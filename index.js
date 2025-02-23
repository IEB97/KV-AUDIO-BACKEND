import express from 'express';
import bodyParser from 'body-parser';

let app = express();
app.use(bodyParser.json());

app.get('/', 
    (req, res) => {
    console.log("This is a Get request");
    res.json({
        "message": "Good Morning " + req.body.name,
    });
});

app.post('/', (req, res) => {
    console.log("This is post request");
    res.json({
        message: "That is a post request",
        status: "success"
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');

});