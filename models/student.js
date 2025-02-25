import mongoose from "mongoose";


let studentSchema = new mongoose.Schema(
            {
            name: String,
            age: Number,
            hight: Number,
            }
        );
        
        let Student = mongoose.model('Students', studentSchema);

        export default Student;