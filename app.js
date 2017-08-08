var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended : true}))

mathResult = [];

function serverCalculator(x, y, type) {
    if(type === 'addButton') {
        mathResult = [+x + +y]
    } else if (type === 'subtractButton') {
        mathResult = [+x - +y]
    } else if (type === 'multiplyButton') {
        mathResult = [+x * +y]
    } else if (type === 'divisionButton') {
        mathResult = [+x / +y]
    }
    return mathResult
} // end of server calculator function 

app.post('/userCalc', function (req,res) {
    
    console.log('user calc route was hit')
    
    // logging the data object from client.js
    console.log(req.body);
    var x = req.body.firstNumber;
    console.log(x)
    var y = req.body.secondNumber;
    console.log(y)
    var type = req.body.mathType;
    console.log(type)
    
    serverCalculator(x,y, type)

    res.send(mathResult)

}) // end of post route back to the user


app.listen(port, function () {
    console.log('listening on port' , port)
})