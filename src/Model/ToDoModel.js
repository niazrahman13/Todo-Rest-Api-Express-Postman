const todoModel = require("../Controller/ToDoListController");

// Create Todo

exports.createTodo = ((req,res)=>{
    
    let body = req.body
   
    let userName = req.headers['userName']
    let subject = body['subject']
    let description = body['description']
    let status = 'Now'
    let creation = Date.now()
    let update = Date.now()

    let protoType = {
        
        Name:userName,
        ToDoSubject:subject,
        ToDoDescription:description,
        ToDoStatus:status,
        ToDoCreationDate:creation,
        ToDoUpdateDate:update
    }

    todoModel.create(protoType)
    .then((data)=>{
        res.status(200).json({'Status':'Ok','data':data})
    })
    .catch(()=>{
        res.status(404).json({'Status':'Todo Creation Failed'})
    })
})


// Read Todo

exports.readTodo = ((req,res)=>{

    let userName = req.headers['userName']
    todoModel.find({Name:userName})
    .then((data)=>{
        res.status(200).json({'status':'ok','data':data})
    })
    .catch(()=>{
        res.status(200).json({'status':'Failed'})
    })

})

// Update Todo Status

exports.updateStatusTodo = (req,res)=>{

    let body = req.body

    let updateStatus = body['updateStatus']
    let updateTodoDate = Date.now()
    let id = body['id']

    let model = {
        ToDoStatus:updateStatus,
        ToDoUpdateDate:updateTodoDate
    }
    
    todoModel.updateOne({_id:id},{$set:model},{upsert:true})
    .then((data)=>{
        res.status(200).json({'status':'Ok','data':data})
    })
    .catch(()=>{
        res.status(400).json({'status':'Failed'})
    })
}

// Remove Todo List

exports.removeTodo = (req,res) => {

    let body = req.body

    let id = body['id']

    todoModel.deleteOne({_id:id})
    .then((data)=>{
        res.status(200).json({'status':'Todo Removed','data':data})
    })
    .catch(()=>{
        res.status(400).json({'status':'Todo Removed Failed'})
    })
}

// Update Status

exports.SelectTodoStatus = ((req,res)=>{
    let body = req.body
    let userName = req.headers.userName
    let status = body['status']

    todoModel.find({ToDoStatus:status})
    .then((Data)=>{
        res.status(200).json({'status':'Ok','Data':Data})
    })
    .catch(()=>{
        res.status(404).json({'status':'Todo Status Failed'})
    })

})