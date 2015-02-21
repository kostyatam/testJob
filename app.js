var express= require('express')
var expressBodyParser= require('body-parser')

var app= express() // экземпляр приложения



app.use(express.static(__dirname+'/public'))
// GET http://localhost:8000/hello
app.get('/', function (req, res, next) { // обработчик запроса
  res.render('index.html')
})

app.get('/api/v1/employees', function (req, res, next) { // обработчик запроса
	setTimeout(function(){
  res.send([{
    id: 100500,
    groupId: 1,
    groupTitle: 'Менеджеры',
    title: 'Константин Константинопольский',
    intervals: [{
        id: 1,
        type: 'free',
        beginDate: 'Thu Oct 23 2014 16:00:00 GMT+0300',
        endDate: 'Fri Oct 24 2014 00:00:00 GMT+0300',
    },{
        id: 2,
        type: 'free',
        beginDate: 'Fri Oct 24 2014 16:00:00 GMT+0300',
        endDate: 'Sat Oct 25 2014 00:00:00 GMT+0300',
    },{
        id: 3,
        type: 'free',
        beginDate: 'Sat Oct 25 2014 16:00:00 GMT+0300',
        endDate: 'Sun Oct 26 2014 00:00:00 GMT+0300',
    },{
        id: 4,
        type: 'free',
        beginDate: 'Mon Oct 27 2014 00:00:00 GMT+0200',
        endDate: 'Mon Oct 27 2014 16:00:00 GMT+0200',
    },{
        id: 5,
        type: 'used',
        beginDate: 'Mon Oct 27 2014 16:00:00 GMT+0300',
        endDate: 'Tue Oct 28 2014 00:00:00 GMT+0300',
    }]
},{
    id: 100501,
    groupId: 1,
    groupTitle: 'Менеджеры',
    title: 'Роберт Оппенгеймер',
    intervals: [{
        id: 3,
        type: 'free',
        beginDate: 'Sat Oct 25 2014 16:00:00 GMT+0300',
        endDate: 'Sun Oct 26 2014 00:00:00 GMT+0300',
    },{
        id: 4,
        type: 'free',
        beginDate: 'Mon Oct 27 2014 8:00:00 GMT+0300',
        endDate: 'Mon Oct 27 2014 10:00:00 GMT+0300',
    },{
        id: 5,
        type: 'used',
        beginDate: 'Mon Oct 27 2014 13:00:00 GMT+0300',
        endDate: 'Mon Oct 27 2014 15:00:00 GMT+0300',
    },{
        id: 6,
        type: 'used',
        beginDate: 'Mon Oct 27 2014 17:00:00 GMT+0300',
        endDate: 'Mon Oct 28 2014 00:00:00 GMT+0300',
    }],
},{
    id: 100502,
    groupId: 1,
    groupTitle: 'Менеджеры',
    title: 'Лесли Гровс',
    intervals: null,
}])
	},2000)
})



// API блога, например



var port= 8000 // http://localhost:8000

app.listen(port, function () {
    console.log('application listening on port %d', port)
})
