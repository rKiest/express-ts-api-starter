# express-ts-api-starter
---
A typescript/express boilerplate for building api and projects.

## Installation

``` javascript
 npm install 
```

## Starting

``` javascript
 npm start
 or
 npm start-debug
```

## Api docs
http://localhost:3000/api-docs/index.html

## Example Request
curl -H "Content-Type: application/json" -X GET http://localhost:3000/  
curl -H "Content-Type: application/json" -X GET http://localhost:3000/v1/greeting  
curl -d '{"title": "Hello World", "desc": "Hello World !"}' -H "Content-Type: application/json" -X POST http://localhost:3000/v1/greeting  