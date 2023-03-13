const express = require('express')
const app = express()
const cors = require('cors')
const PORT= 8000

app.use(cors())

let rappers = {
    'eminem' : {
        'age' : 50,
        'birthName' : 
        'Marshall Bruce Mathers III',
        'birthLocation' : 'Saint Joseph, MO',
}, 
    'chance the rapper' : {
        'age' : 29,
        'birthName' : 
        'Chancelor Johnathan Bennett',
        'birthLocation' : 'Chicago, Illinois',
    }, 
    'unknown' : {
        'age' : 20,
        'birthName' : 
        'Unknown',
        'birthLocation' : 'Unknown',
    },
}




app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
}) 

app.get('/api/rappers/:rapperName', (request, response) => {
    const rapName = request.params.rapperName.toLowerCase() //Convert to lowercases everything we put in 
    // we use the request function to give us a parameters. rapperName is what we will get in the html above
    console.log(rapName)
    if (rappers[rapName]){ //if rapper name requested is in the object above. 
        response.json(rappers[rapName]) //respond with that name
    } else { //else response with something else 
    response.json(rappers['unknown']) //we use square brackets for indexing for spacing issues. 
    }
})




app.listen(PORT, () => {
    console.log(`Rinning the server on ${PORT}`)
})