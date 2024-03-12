const mysql = require('mysql') 
const bodyParser = require('body-parser')
const express = require('express')
const Port = 8000
const App = express()
const Db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventory'
})

App.use(bodyParser.json())
Db.connect(() => {
    console.log("Db Online") //Check Connection
})

App.get('/item', (req,res) => {
    if (req.query.ean13 ==  undefined) return res.status(404); // If params ean13 Not found Send Error
    const Ean13 = req.query.ean13
    Db.query(`SELECT * FROM item WHERE Ean13='${Ean13}' LIMIT 1`, (err, row, field) => {
        if (row.length == 1){
            for (const Item of row){
                res.status(200)
                res.json(Item)
            }
        }else{
            res.status(404)
            res.json({
                'status' : 404,
                'message' : 'Item Not Found In database'
            })
        }
    })
})

App.get('/item/List', (req,res) =>{
    Db.query(`SELECT * FROM item`, (err, row, field) => {
        if (row.length > 0){
            res.status(200)
            res.json({
                'total' : row.length,
                'item' : row
            })
        }
    })
})

App.listen(Port, (err) => {
    if (!err){
        console.log(`http://localhost:${Port}`)
    }else{
        throw err
    }
})
