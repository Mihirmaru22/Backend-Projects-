import mongoose, { model }  from "mongoose";

const EmpSchema = new mongoose.Schema({
    name : String,
    salary : String,
    city : String,
    isManager : Boolean

})

 export const Emp = mongoose.model('Emp',EmpSchema);