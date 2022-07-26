const dbconfig = require("../dbconfig")

var model = {}

model.insert = async function({name, age, department, position}){
    try{
        var response = await dbconfig.conn.query("INSERT INTO employees (name, age, department, position) VALUES(?, ?, ?, ?)", [name, age, department, position])
        return response[0].insertId
    }catch(error){
        return null
    }
}
model.getAll = async function(){
    try{
        var response = await dbconfig.conn.query("SELECT id, name, age, department, position FROM employees")
        return response[0]
    }catch(error){
        return []
    }
}
model.get = async function({id}){
    try{
        var response = await dbconfig.conn.query("SELECT id, name, age, department, position FROM employees WHERE id = ?", [id])
        return response[0][0]
    }catch(error){
        return null
    }
}
model.update = async function({name, age, department, position, id}){
    try{
        var response = await dbconfig.conn.query("UPDATE employees SET name = ?, age = ?, department = ?, position = ? WHERE id = ?", [name, age, department, position, id])
        return response[0].affectedRows > 0
    }catch(error){
        return false
    }
}
model.delete = async function({id}){
    try{
        var response = await dbconfig.conn.query("DELETE FROM employees WHERE id = ?", [id])
        return response[0].affectedRows > 0
    }catch(error){
        return false
    }
}

module.exports = model