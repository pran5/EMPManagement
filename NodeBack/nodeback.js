
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const bodyParser = require('body-parser');
var mysql = require('mysql');






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
        res.send(result);
    });

});


app.get('/poc2', function (req, res) {
    
	
        console.log("reading input " + req.query.xyz);
		
    	var xyz ={ v1:37, v2:35};

		res.send(xyz);

		});




app.listen(8081, function () {
    console.log("server listening at port 8081...");
});