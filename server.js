var express= require('express')
var expressBodyParser= require('body-parser')
var mockCollection= require('./mockCollection')
var app= express() // экземпляр приложения



app.use(express.static(__dirname+'/angularTask/src/app'))
// GET http://localhost:8000/hello
app.get('/', function (req, res, next) {
  res.render('index.html')
})


app.get('/api/collection', function (req, res, next) {
  var collection= mockCollection.getCollection(),
      groups= mockCollection.getGroupsList()    
  res.send({
    collection: collection,
    groups: groups
  })
})


var port= 8000 // http://localhost:8000
app.listen(port, function () {
    console.log('application listening on port %d', port)
})
