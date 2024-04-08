var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var compiler = require("compilex");

router.use(bodyParser());
var option = { stats: true };
compiler.init(option)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/test", function(req, res){
  res.end("hello");
})
router.post("/test", function (req, res) {
  var code = req.body.code;
  var input = req.body.input;
  var inputRadio = req.body.inputRadio;
  var lang = req.body.lang;
  
  console.log("Received request with lang:", lang, code, "and inputRadio:", inputRadio); // New console log
  
  if (lang === "cpp" || lang === "c") {
    if (inputRadio === true) {
      console.log("Inside inputRadio === 'true' for C++/C"); // New console log
      var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
      compiler.compileCPPWithInput(envData, code, input, function (data) {
        console.log(data)
        if (data.error) {
          res.send(data.error);
        } else {
          res.send(data.output);
        }
      });
    } else {
      console.log("Inside inputRadio === 'false' for C++/C"); // New console log
      var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
      compiler.compileCPP(envData, code, function (data) {
        res.send(data);
      });
    }
  }

  if (lang === "python") {
    console.log(inputRadio === true)
    if (inputRadio === true) {
      console.log("Inside inputRadio === 'true' for Python"); // New console log
      var envData = { OS: "windows" };
      compiler.compilePythonWithInput(envData, code, input, function (data) {
        console.log(`Received output for Python with input: ${data}`);
        res.send(data);
      });
    } else {
      console.log("Inside inputRadio === 'false' for Python"); // New console log
      var envData = { OS: "windows" };
      compiler.compilePython(envData, code, function (data) {
        console.log(`Received output for Python without input: ${data}`);
        res.send(data);
      });
    }
  }
});

// compiler.flush(function() {
//   console.log("JEklas")
// })

module.exports = router;
