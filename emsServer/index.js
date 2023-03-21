const express=require('express')

const cors=require('cors')

const logic=require('./services/logic')

const server=express()


server.use(cors({
    origin:'http://localhost:3000'
}))

server.use(express.json());

server.listen(8000,()=>{
    console.log('listening on the port 8000');
})

server.get('/allempoyee',(req,res)=>{
    logic.allEmployees().then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )

})
server.post('/addempoyee',(req,res)=>{
    logic.addEmployees(req.body.id,req.body.empname,req.body.age,req.body.designation,req.body.salary).then(
        (result)=>{
            console.log(req.body.id);
            res.status(result.statusCode).json(result)
        }
    )

})
server.delete('/delempoyee:id',(req,res)=>{
    logic.delEmployees(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )

})
server.get('/getanemployee:id',(req,res)=>{
    logic.getanEmployee(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )

})
server.put('/updateemployee',(req,res)=>{
    logic.updateEmployee(req.body.id,req.body.empname,req.body.age,req.body.designation,req.body.salary).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )

})