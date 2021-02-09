
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


  }));

  var ses;





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
    if(req.session.access=='O')
        {
            x.msg='already logged off';
            res.send(x);
        
        }
	
        console.log("reading inputs " + req.body.v1 +  "  second " + req.body.v2)
        let y = req.body.email;
        let z = req.body.pass;
        con.query('select *  from employee where Emp_Email = ? and Emp_Pass = ?',[y,z], (err, res1) => {
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
    let uname = req.body.uname;
    let pass = req.body.pass;
    con.query('select *  from employee where Emp_Email = ? and Emp_Pass = ?',[uname,pass], (err, res1) => {
        if (err) {
            req.session.Emp_Access='O';
            x.msg='login failed,try again';
            ses = req.session;
            res.send(x);
           
        }
        else{

            if(res1.length<1){
                req.session.Emp_Access='O';
                x.msg='login failed,try again';
                x.Emp_Access='O';
                ses = req.session;
                res.send(x);

            }
            else{
                req.session.uname=req.body.uname;
                req.session.pass=req.body.pass;
                req.session.Emp_Access=res1[0].Emp_Access;
                req.session.login = true;
                ses = req.session;
                console.log( req.session);
                res.send(res1);
            }
               
            
                

        }

       
    });
    

});
app.get('/logout', function (req, res) {

        let x={}
        if(!ses.login)
        {
            x.msg='already logged off';
            res.send(x);
        
        }
        else
        {
            ses.Emp_Access='O';
            console.log("log off successful");
            ses.login = false;
            res.send(ses);


        }

});

app.get('/logcheck', function (req, res) {

    res.send(ses);

    

});


app.get('/poc2', function (req, res) {
    
	
        console.log("reading input " + req.query.xyz);
		
    	var xyz ={ v1:37, v2:35};

		res.send(xyz);

        });
        

        




app.listen(8081, function () {
    console.log("server listening at port 8081...");
});