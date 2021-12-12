const { request } = require('express');
const express = require('express');
const app = express();
app.use(express.json())
const {sayHello,uppercase, lowercase, countCharacters, firstCharacter,firstCharacters} = require('./lib/strings'); 
const {add, multiply, subtract} = require('./lib/numbers')



app.get('/strings/hello/:string', function(req, res){
  res.status(200).json({result: sayHello(req.params.string)}) //adds parameters to string
  
  //json sends a response that is the parameter converted to json string.  
  //json can be chained with status
});

app.get('/strings/upper/:string', function(req, res){
  res.status(200).json({result: uppercase(req.params.string)})

});

app.get('/strings/lower/:string', function(req, res){
  res.status(200).json({result: lowercase(req.params.string) })
});

app.get('/strings/count/:string', function(req, res){
  res.status(200).json({result: countCharacters(req.params.string)
})
});

app.get('/strings/first-character/:string', function(req, res) {
  res.status(200).json({result: firstCharacter(req.params.string)});
});

app.get('/strings/first-characters/:string', function(req, res){
  res.status(200).json({result: firstCharacters(req.params.string, req.query.length)
  });
});

app.get('/numbers/add/:a/and/:b', function(req,res){
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  
  if(Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.'})
  } else {
  res.status(200).json({ result: add(a, b) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(b, a) });
  }
});

// app.post('numbers/multiply', function(req,res) {
//   const a = req.body;
//   const b = req.body;
//   if(Number.isNaN(a) || Number.isNaN(b)) {
//     res.status(400).json({ error: 'parameters are not numbers'}) 
//   } else {
//   res.status(200).json({ result: multiply(req.body.a, req.body.b)})
//   }
// })




module.exports = app;