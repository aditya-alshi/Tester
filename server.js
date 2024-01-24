const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/pani', function(req, res){
    res.send("ba bal albala ba");
})

app.listen(8000);