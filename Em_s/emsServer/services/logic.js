const db=require('./db')

const allEmployees=()=>{
    return db.Employee.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    employees:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"Employees not found"
                }
            }
        }
    )
}

const addEmployees=(id,empname,age,designation,salary)=>{
    console.log({id});
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:404,
                    message:"Employee already exist"
                }
            }
            else{

                const newEmpolyee= new db.Employee({id,empname,age,designation,salary})
                newEmpolyee.save()
                return{
                    statusCode:200,
                    message:"Employees added successfully"
                }
            }
        }
    )
}

const delEmployees=(id)=>{
    return db.Employee.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    message:"Deleted successfully"
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"No data found"
                }
            }
        }
    )
}

const getanEmployee=(id)=>{
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    employees:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"Employees not found"
                }
            }
        }
    )
}
const updateEmployee=(id,empname,age,designation,salary)=>{

    const filter={id:id}
    const update={
        id:id,
        empname:empname,
        age:age,
        designation:designation,
        salary:salary
    }
    return db.Employee.findOneAndUpdate(filter,update).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    message:"Data updated"
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"Employees not found"
                }
            }
        }
    )
}

module.exports={
    allEmployees,
    addEmployees,
    delEmployees,
    getanEmployee,
    updateEmployee
}
