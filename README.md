# Timestamp Microservice

This is the Timestamp Microservice project from freeCodeCamp [Back End Development and APIs Certification](https://www.freecodecamp.org/learn/back-end-development-and-apis/). 

## Description 

The original project description can be found on [freeCodeCamp](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice)

## Starting the app
To start the app, run the following command in the terminal:

~~~bash
node server.js
~~~


## Routes
The app defines the following routes:

**GET** `/` returns the `index.html` file in the views directory.

**GET** `/api/:date?` accepts an optional date parameter in the format of either a Unix timestamp or a UTC date string, and returns the corresponding Unix timestamp and UTC date string.

## Functions
The following functions are defined in this code:

`isValidDate(date)`
This function checks if a date object is a valid JavaScript Date object by comparing its string representation to the string "Invalid Date". If the string representations match, then the date object is not a valid date.

**Arguments**
- `date` - a JavaScript `Date` object
 
 **Returns**
 - `true` if date is a valid date, `false` otherwise.

`getDateFromString(stringDate)`
This function accepts a string parameter representing a date in either Unix timestamp or UTC date string format, and returns a Date object representing the same date.

**Arguments**
- `stringDate` - a string representing a date in either Unix timestamp or UTC date string format

**Returns**
If `stringDate` is a valid Unix timestamp or UTC date string, then this function returns a Date object representing the same date. If stringDate is not a valid date, then this function returns null.


## License
This code is released under the MIT License.

## Demo

[Live Demo](https://timestamp-microservice.freecodecamp.rocks/)
