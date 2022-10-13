# AWS: API, Dynamo and Lambda

## Author

Luis Rosales

## Deployed Link

[Deployed link](https://gaucc8npa6.execute-api.us-east-2.amazonaws.com/lab18/)

## How it Works

- Create one table for one data model at Dynamo DB
- Create a Dynamoose schema to define the structure of your table
- Write lambda functions that will separately perform the proper CRUD operation on the database
- Create your routes using API Gateway
- Routes should integrate with the appropriate Lambda function to perform the operation

## Credits and Collaborators

Demo code, Stephanie Hill, Brandon Pitts, Keelen Fisher, Tyler main

## Issues Encountered

Most of my issues were solved when I finally was able to find correctly path my methods to reach my table.

## Args / Params

- Dynamoose

- Events

- People

## Testing

- Ran test in Lambda tests

- Executed methods in API Gateway

- Checked Logs in Cloudwatch

## Routing: API Gateway

### POST

- /people - Given a JSON body, inserts a record into the database
returns an object representing one record, by its id (##)

### GET

- /people - returns an array of objects representing the records in the database
- /people/id - returns an object representing one record, by its id (##)

### PUT

- /people/## - Given a JSON body and an ID (##), updates a record in the database
returns an object representing one record, by its id (##)

### DELETE

- /people/## - Given an id (##) removes the matching record from the database
returns an empty object
