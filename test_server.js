const express = require('express');
const fs=require('fs').promises;

var app = express();

app.get('/api/cert_device', (req, res) => {
    console.log("cert device:   " + JSON.stringify(req.query));
    var id=req.query.id;
    var pin=req.query.pin;

    var ret=[200,'test_iden'];

    res.status(ret[0]).json(ret);
});

app.get('/', (req, res) => {
    console.log(req.path);
    html = fs.readFile('./index.html', {
        encoding: "utf-8",
        flag: "r"
    }).then(
        data => {
            res.status(200);
            res.type('html');
            res.send(data);
        }, reason => {
            console.log(reason);
            res.status(500).send("Internal server error!");
        }
    );
});

app.listen(8082,()=>{
    console.log('listen on 8082');
})