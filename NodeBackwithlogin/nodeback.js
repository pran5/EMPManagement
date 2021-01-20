
const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
app.use(cors());


const bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(session(
    
    {
   
        secret: 's123',
        resave:true,
        saveUninitialized:true


  }))





app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"empms"
  });


  var result={};
  result.status=0;
  result.content="";
  con.connect(function(err) 
  {   if (err)
      { throw err;}
      else
      {
          console.log("DB Connected")
      }
  });

app.post('/poc1', function (req, res) {

    let x={};
    if(req.session.access=='o')
        {
            x.msg='already logged off';
            res.send(x);
        
        }
	
		console.log("reading inputs " + req.body.v1 +  "  second " + req.body.v2)
        con.query('select *  from emp',[], (err, res1) => {
            if (err) {
    
                result.status=-1;
                result.content = err;
            
            } else {
                result.status=1,
                result.content=res1;
            };
        var xyz ={ v1:37, v2:35};
        result.msg=req.session.access;
        res.send(result);
    });

});

app.post('/login', function (req, res) {

    let x={};
    console.log(req.body);
     if(req.body.uname=='nikhil'&& req.body.pass=='bhati')
     {
         req.session.uname=req.body.uname;
         req.session.pass=req.body.pass;
         req.session.access='m';
         x.access=req.session.access;
         x.msg='login success,manager logged in';
         res.send(x);
     }
     else if(req.body.uname=='pranav'&& req.body.pass=='zade')
     {
         req.session.uname=req.body.uname;
         req.session.pass=req.body.pass;
         req.session.access='a';
         x.access=req.session.access;
         x.msg='login success,admin logged in';
         res.send(x);
     }
     else if(req.body.uname=='amit'&& req.body.pass=='mishra')
     {
         req.session.uname=req.body.uname;
         req.session.pass=req.body.pass;
         req.session.access='e';
         x.access=req.session.access;
         x.msg='login success,employee logged in';
         res.send(x);
     }
     else
     {
        req.session.access='o';
        x.msg='login failed,try again';
        res.send(x);
     }

});
app.post('/logout', function (req, res) {

        let x={}
        if(req.session.access=='o')
        {
            x.msg='already logged off';
            res.send(x);
        
        }
        else
        {
            req.session.access='o';
            x.msg='log off successful';
            res.send(x);

        }

});


app.get('/poc2', function (req, res) {
    
	
        console.log("reading input " + req.query.xyz);
		
    	var xyz ={ v1:37, v2:35};

		res.send(xyz);

        });
        

        




app.listen(8081, function () {
    console.log("server listening at port 8081...");
});