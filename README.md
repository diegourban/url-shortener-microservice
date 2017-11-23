# url-shortener-microservice
Freecodecamp's API Project for Back End Development Certification

User Stories:

- I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
- If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
- When I visit that shortened URL, it will redirect me to my original link.

## Requirements
* Node.js
* MongoDB

## Installation
`npm install` - to install the dependencies

## Usage
`npm start` - to start the server

## Example Creation Usage
`http://host:port/new/https://www.google.com` - to shorten a new url

`http://host:port/new/http://foo-bar-bar.com:80` - to shorten a new url

## Example Creation Output
`{ "original_url":"http://foo-bar-bar.com:80", "short_url":"http://host:port/8170" }`

## Example Visit Usage
`http://host:port/2871` will redirect to `http://www.google.com/`
