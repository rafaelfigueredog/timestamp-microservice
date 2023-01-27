const express = require('express');
const app = express();

function isValidDate(date) {
  return date.toString() !== "Invalid Date";
}

function getDateFromString(stringDate) {

  if (!stringDate || stringDate.length === 0)
    return new Date();

  const utcDate = new Date(stringDate);
  const unixDate = new Date(Number(stringDate));

  if (isValidDate(unixDate))
    return unixDate;

  if (isValidDate(utcDate))
    return utcDate;

  return null;
}




var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  


app.use(express.static('public'));


app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});




app.get('/api/:date?', (req, res) => {

  const strDate = req.params.date;
  const date = getDateFromString(strDate);

  if (!date) {
    return res.json({
      error: "Invalid Date"
    });
  }

  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  }); 
})




var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
