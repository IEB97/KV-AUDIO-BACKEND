import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

let app = express();
app.use(bodyParser.json());

let mongoURL = "mongodb+srv://IEB97:123@cluster0.p3sm5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoURL);

let connection = mongoose.connection;
    connection.once ("open", () => {
        console.log("MongoDB connection established successfully");
    } 
);       

app.get('/', 
    (req, res) => {
        let studentSchema = new mongoose.Schema(
            {
            name: String,
            age: Number,
            hight: Number,
        }
        );
        
        let Student = mongoose.model('Students', studentSchema);

});



app.post('/', 
    (req, res) => {
        let studentSchema = new mongoose.Schema(
            {
            name: String,
            age: Number,
            hight: Number,
        }
        );
        
        let Student = mongoose.model('Students', studentSchema);

        let newStudent = req.body;
        let student = new Student(newStudent);
            student.save().then( 
                 () => {
                  console.log("Student Save Successfully");  
                  res.json({
                    "Message": "Student Save Successfully"
                })
        }
        ).catch(
            () => {
                res.json({
                    "Message": "Student could not be saved"
                })
            }
        )
    });



app.listen(3000, () => {
    console.log('Server is running on port 3000');

});