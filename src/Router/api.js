const express = require('express')
const { createProfile, loginProfile, selectProfile } = require('../Controller/ProfileController')
const { authVerify } = require('../Middleware/AuthVerify')
const { createTodo, readTodo, updateStatusTodo, removeTodo, SelectTodoStatus } = require('../Model/ToDoModel')

const Router = express.Router()

//User Login

Router.post('/createProfile',createProfile)

Router.post('/loginProfile',loginProfile)

Router.post('/selectProfile',authVerify,selectProfile)

//ToDO

Router.post('/createTodo',authVerify,createTodo)

Router.post('/readTodo',authVerify,readTodo)

Router.post('/updateStatus',authVerify,updateStatusTodo)

Router.post('/removeTodo',authVerify,removeTodo)

Router.post('/selectTodoStatus',authVerify,SelectTodoStatus)

module.exports = Router