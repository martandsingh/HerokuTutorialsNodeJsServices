/**This is a basic tutorial to explain how we can make get and post services using
 * express js for node and mongo. mongo is a document based (nosql) database, where 
 * your records(called document) are saved in form of bson(binary json). Like SQL server &
 * oracle and other rdbms it does not allow you to make relations so it is simpler and faster.
 * by default mongo runs on port no 27017(though this can be changed form system to system).
 * To test your get/post method os services you can use postman, fiddler and many other
 * free tools are availaible.
 * 
 * Author : Martand Singh
 * Date: 01 June 2018
 * Scope : Node Rest Api using Express Js and mongodb as backend.
 * Email: martandsays@gmail.com
 */

const express  = require('express');
const app = new express();
var cors = require('cors');
//mongoose is used for mongo connection
const mongoose = require('mongoose');

//this is the model of your book, which should be same as mongo document.
const Book  = require('./models/bookModel');
const News = require('./models/newsModel');
const Plan = require('./models/planModel');
const PlanDetail = require('./models/planDetailModel');
//mongodb connection. admin is the name of database
const db = mongoose.connect('url-mongo-db-url');

//body parse basically read your request and if there is some json then it puts in your request body
const bodyParser  = require('body-parser');

// if you have set an environment the it will take port no already set in env otherwise 3000.
//in our case we have set enviornment in gulpfile.js where port no is 8000. So our application
//will work on 8000 port.
const port  = process.env.PORT || 3000;

//here we are creating a router for book.
var bookRouter = express.Router();
var newsRouter = express.Router();
var planRouter = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()) //we will use json body parser


newsRouter.route('/latestnews')
.post(function(req, res){
    var _news  = new News(req.body);
    _news.save();
    res.status(201).send(_news);;
})
.get(function(get, res){
    var query = {};


    News.find(function(err, news){
       if(err){
            res.status(500).send(err); //here we are sending response status code also. as 500 means internal server error.
       }
       else{
           res.json(news);
       }
   }).limit(3)
   .sort({ newsDate: 1 });
});


///books route created. book 
bookRouter.route('/books') //books is basically your collection name in mongodb
//defining post request
.post(function(req, res){
    var _book = new Book(req.body);
    _book.save();
    console.log(_book);
    res.status(201).send(_book); //201 status for created
})
//defining get request
.get(function(req, res){
    var query = {};

    //here we are checking if query string name is genre then only we will filter the data.
    if(req.query.genre){
        query.genre = req.query.genre;
    }
    //here we are checking if query string name is author then only we will filter the data.
    if(req.query.author){
        query.author = req.query.author;
    }
    
   Book.find(query, function(err, books){
       if(err){
            res.status(500).send(err); //here we are sending response status code also. as 500 means internal server error.
       }
       else{
           res.json(books);
       }
   });
});

planRouter.route('/plans')
.get(function(req, res){
    Plan.find(function(err, plans){
        if(err){
             res.json(err);
        }
        else{
             res.json(plans);
        }
    });
});

planRouter.route('/plandetails')
.get(function(req, res){
    var query = {};
    console.log("plan details");
    //here we are checking if query string name is genre then only we will filter the data.
    if(req.query.plancode){
        query.plancode = req.query.plancode;
    }
    console.log(query);
    PlanDetail.find(query, (err, plan) => {
        if(err){
             res.status(500).json(err);
        }
        else{
             res.json(plan);
        }
    })
    
});
// here we are defining a route to find a book with its it.
//e.g: http://localhost:8000/api/books/5b10402e453bd55322440e89
bookRouter.route('/books/:bookid')
.get(function(req, res){
   
   Book.findById(req.params.bookid, function(err, book){
       if(err){
            res.status(500).send(err);
       }
       else{
           res.json(book);
       }
   });
});


app.use(cors({origin: '*'}));
app.use('/api', bookRouter);
app.use('/api', newsRouter);
app.use('/api', planRouter);

app.get('/', (req, res) => {
    res.json({status : 200, message : "Service Running..."});
});

app.listen(port, function() {
    console.log('GULP is running my server on PORT: '+port);
});