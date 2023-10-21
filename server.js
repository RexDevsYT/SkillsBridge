let express = require('express');
let app = express();              
var cors = require('cors')   
let cookieparser = require('cookie-parser');    
let mongoose = require('mongoose');      
let port = process.env.PORT || 8000;            
app.configure(function() {
    app.use(express.logger('dev'));                
    app.use(express.methodOverride());
});


const mongoAtlasUri = 'mongodb+srv://DANIELDKMC2:Number56@cluster0.w2glg4c.mongodb.net/?retryWrites=true&w=majority';
try {
    mongoose.connect(mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true},() =>
    console.log("connected"));
} 
catch (error) {
    console.log("could not connect");
}
const dbConnection = mongoose.connection; 
dbConnection.on("error",(err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to Mongo DB!"));//conecion a mongo

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
require('./routes.js')(app);  

app.listen(port);  
console.log("APP por el puerto " + port);
