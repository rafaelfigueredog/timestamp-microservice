# Timestamp Microservice

This is the Timestamp Microservice project from freeCodeCamp [Back End Development and APIs Certification](https://www.freecodecamp.org/learn/back-end-development-and-apis/). 

## Overview

The main objective is to create a microservice that provides a web interface and an API for converting dates between Unix timestamps and UTC format. The app defines two routes, one for serving an HTML file and one for handling API requests. The API route accepts an optional date parameter in either Unix timestamp or UTC date string format, and returns the corresponding Unix timestamp and UTC date string. The original project description can be found on [freeCodeCamp](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice)

## Starting the app
To start the app, run the following command in the terminal:

~~~bash
node server.js
~~~


## Routes
The app defines the following routes:

**GET** `/` returns the `index.html` file in the views directory.

**GET** `/api/:date?` accepts an optional date parameter in the format of either a Unix timestamp or a UTC date string, and returns the corresponding Unix timestamp and UTC date string.


## License
This code is released under the MIT License.

## Demo

[Live Demo](https://timestamp-microservice.freecodecamp.rocks/)
