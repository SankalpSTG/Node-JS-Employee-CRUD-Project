require("dotenv").config()
const employeesController = require("./controllers/employees.controllers")
const express = require("express")
const bodyParser = require("body-parser")

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(bodyParser.urlencoded())

app.route("/employee/:id")
    .get(employeesController.get)
    .delete(employeesController.delete)
app.route("/employee")
    .get(employeesController.getAll)
    .post(employeesController.update)
    .put(employeesController.insert)

app.listen(process.env.PORT, () => {
    console.log(`Server Started At ${process.env.PORT}`)
})