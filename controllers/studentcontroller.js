import Student from "../models/student.js";

export function getStudent(req, res) {
   Student.find().then(
    (result)=>{
        res.json(result)
    }           
   )
 }

export function postStudent(req, res) {    
    
    let studentData = req.body;

    let student = new Student(studentData);

    student.save().then( ()=> {
        res.json({
            message: "Student saved successfully"
        })
    }).catch( () => {
        message: "student saving failed"
    })
            
}
  