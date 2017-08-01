var express=require('express');
var path = require('path');
var app=express();
var morgan=require('morgan');
var cookieParser=require('cookie-parser');
var session=require('express-session');
var bodyParser=require('body-parser');

var mongoose=require('mongoose');
var lbgRoute=require('./routes/lbgRoute.js');
var bgvRoute=require('./routes/bgvRoute.js');
var qualificationRoute=require('./routes/qualificationRoute.js');
var visaRoute=require('./routes/visaRoute.js');
var employee=require('./models/employee.js');

mongoose.connect('mongodb://localhost/lbg');

app.use(morgan('dev'));
// app.use(cookieParser());
// app.use(session({
//   secret:'lbgApp',
//   savaUnintialized:'true',
//   resave:'true'
// }));

app.use('/',express.static(path.join(__dirname, '../Client')));
// app.use('/',function(req,res)
//   {
//      ("cookieParser---",req.cookies);
//      ("session---",req.session);
//   });

app.use('/lbgRoute',lbgRoute);
app.use('/bgvRoute',bgvRoute);
app.use('/qualificationRoute',qualificationRoute);
app.use('/visaRoute',visaRoute);

app.listen(8080,function(req,res)
{
   console.log("started listening at 8080....");
});
