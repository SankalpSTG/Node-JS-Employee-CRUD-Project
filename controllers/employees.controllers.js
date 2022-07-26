const employeeModel = require("../models/employees.models")
var controller = {}

controller.insert = async function(req, res){
    try{
        var data = req.body
        var result = await employeeModel.insert({name: data.name, age: data.age, department: data.department, position: data.position})
        if(result == null) return res.status(400).send()
        res.status(200).send({id: result})
    }catch(error){
        return res.status(400).send()
    }
}
controller.update = async function(req, res){
    try{
        var data = req.body
        var result = await employeeModel.update({id: data.id, name: data.name, age: data.age, department: data.department, position: data.position})
        if(result == false) return res.status(400).send("Failed To Update")
        res.status(200).send("Updated")
    }catch(error){
        return res.status(400).send()
    }
}
controller.delete = async function(req, res){
    try{
        var id = req.params.id
        var result = await employeeModel.delete({id: id})
        if(result == false) return res.status(400).send("Failed To Delete")
        res.status(200).send("Deleted")
    }catch(error){
        return res.status(400).send()
    }
}
controller.get = async function(req, res){
    try{
        var id = req.params.id
        var result = await employeeModel.get({id: id})
        if(result == null) return res.status(400).send("Employee Not Found")
        res.status(200).send(result)
    }catch(error){
        return res.status(400).send()
    }
}
controller.getAll = async function(req, res){
    try{
        var result = await employeeModel.getAll()
        res.status(200).send(result)
    }catch(error){
        return res.status(400).send()
    }
}
module.exports = controller