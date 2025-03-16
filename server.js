const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => 
{
    res.render('OnDemand')
})

app.get('/home', (req, res) => 
    {
        res.render('home')
    })

app.get('/cust', (req, res) =>
{
    res.render('customerDashboard')
})

app.get('/serv', (req, res) =>
{
    res.render('ServiceProvider')
})

app.get('/prof', (req, res) =>
{
    res.render('Profile')
})

app.get('/skill', (req, res) =>
{
    res.render('skillpage')
})

app.listen(3000)

// app.use(logger)

//Set up different routes
/*
    app.'call different methods'

    METHODS:
    post - put things in database
    put - update
    get - retrieve
    delete - delete
*/

// app.set('view engine', 'ejs')
// app.use(logger)

// //request (req) & Response(res)
// app.get('/', (req, res) => 
// {
//     console.log("Abby")

//     //Rendering a file
//     // ejs - view engine (most similar to html)
//     // pug - view engine
//     res.render('OnDemand')

//     res.download('server.js')
//     // res.json({message: "Error"})
//     // res.send("Heyy")
// }) 

//Middleware function ->code that runs between the starting and ending of the request. 

//Middleware for logging out something
// function logger(req, res, next) 
// {
//     console.log(req.originalUrl)
//     next()
// }