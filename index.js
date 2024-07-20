const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000;

//use express fileupload middleware
app.use(fileUpload());


//serve index page
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.send("Hello World!");
})

//install express middleware at this point
app.post('/upload', (req, res) => {

    //get file set to our field named 'image
    const {image} = req.files;

    if(!image) return res.sendStatus(400);

    //post to the upload directory
    image.mv(__dirname + '/upload/' + image.name);

    //console.log(req.files);

    res.sendStatus(200);
})


//listening
app.listen(port, () => {
    console.log(`Example app listening on ${port}`);
})