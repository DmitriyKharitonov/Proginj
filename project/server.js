
import sqlite3 from 'sqlite3'
var app = express();
import express from 'express'

// var express = require('express');
// var app = express();
// const sqlite3 = require('sqlite3').verbose()



let db = new sqlite3.Database("./public/data.sqlite");

// db.all("Select * from 'Voprosy_trenazher (1)_Лист1'" , (err , data) => {
//     if(err) return;

//     console.log(data);
    
// });

app.get('/api', function (req,res)  {
        db.all("Select * from 'Voprosy_trenazher (1)_Лист1'" , (err , data) => {
            if(err) return;
            res.send(data)
        });
    });

// app.get('/api', (req,res) => {
//         res.json = ({
//             "data_base": all_data
//         })
//     })



app.use(express.static('public'));


app.listen(8000);

