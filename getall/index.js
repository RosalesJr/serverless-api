const dynamoose = require('dynamoose');

// create schema'
const peopleSchema = new dynamoose.Schema({
  id: Number,
  name: String,
  state: String,
});

// create model using schema

const peopleModel = dynamoose.model('people-demo', peopleSchema);

// to be continued (code locally, zip, and upload)

exports.handler = async (event) => {
    console.log(event.queryStringParameters)

    let response = {statusCode: null, body: null};
    try {
      let peopleRecords = await peopleModel.scan().exec();
      response.statusCode = 200;
      response.body = JSON.stringify(peopleRecords);
    } catch (error) {
      console.log(error)
      response.statusCode = 500;
      response.body = JSON.stringify(error.message);
    }  
    return response;
};
