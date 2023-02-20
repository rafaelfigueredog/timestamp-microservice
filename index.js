const express = require('express');
const app = express();
const cors = require('cors');

// Enable CORS middleware
const corsOptions = { optionsSuccessStatus: 200 };
app.use(cors(corsOptions));

// Serve static files
app.use(express.static('public'));


// Check if a date is valid
function isValidDate(date) {
  return date?.toString() !== "Invalid Date";
}

// Convert a date string to a Date object
function getDateFromString(stringDate) {
  if (!stringDate?.length)
    return new Date();

  const utcDate = new Date(stringDate);
  const unixDate = new Date(Number(stringDate));

  return isValidDate(unixDate) ? unixDate : (isValidDate(utcDate) ? utcDate : null);
}

// Serve HTML file
function serveIndex(req, res) {
  res.sendFile(__dirname + '/views/index.html');
}

// Handle API requests
function handleApiRequest(req, res) {
  const { date } = req.params;
  const parsedDate = getDateFromString(date);

  if (!parsedDate) {
    return res.json({
      error: "Invalid Date"
    });
  }

  return res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString(),
  }); 
}

app.get("/", serveIndex);
app.get('/api/:date?', handleApiRequest);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Accepting connections.`));