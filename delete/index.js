const dynamoose = require('dynamoose');
const peopleSchema = new dynamoose.Schema({
    id: Number,
    name: String,
    state: String,
});

const peopleModel = dynamoose.model('people-demo', peopleSchema);

exports.handler = async (event) => {
    console.log(event.body)

    let parsedBody = JSON.parse(event.body);
    let { id, name, state} = parsedBody;

 
    let people = {id, name, state}
    console.log(people);

    const response = {statusCode: null, body: null};

    try {
        let newPerson = await peopleModel.delete(people);
        response.statusCode = 200;
        response.body = JSON.stringify(newPerson);

    } catch (e) {
        console.log(e);
        response.statusCode = 500;
        response.body = JSON.stringify(e.message);
    }


    return response;
};