import  express  from 'express';

let app = express();

app .get('/', 
    (req,res) => {
    console.log("This is Get request")
    res.json({message: "Hello World"})
}  
);

app.post('/',
    (req,res) => {
    console.log("This is post request")
    res.json({message: "That is a post request",status: "success"})
}
);

app.listen(3000, () => {
    console.log('Server is running on port 3000')
}
);

