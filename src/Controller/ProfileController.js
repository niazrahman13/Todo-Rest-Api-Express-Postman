//Profile Model Import

const profileModel = require("../Model/ProfileModel")

// JWT Token Import

var jwt = require('jsonwebtoken');

// Create Profile

exports.createProfile = (req,res) => {

    let body = req.body
    
    let name = body['Name']
    let id = body['Id']
    let dept = body['Dept']
    let userName = body['UserName']
    let password = body['Password']

    let design = {
        
        Name:name,
        Id:id,
        Dept:dept,
        UserName:userName,
        Password:password
    }
    

    profileModel.create(design)
    .then((data) => {
        res.status(200).json({'Status': 'Ok', 'data': data})
    })
    .catch(() => {
        res.status(404).json({'Status': 'Failed'})
    })
    
}

// Login Profile

exports.loginProfile = ((req,res) =>{
    
    let body = req.body

    let userName = body['userName']
    let password = body['password']

    profileModel.find({UserName:userName,Password:password})
    .then((data) => {

        if(data.length > 0){
            
            // JWT Implementation
            
           let token =  jwt.sign({items: data}, 'secret', { expiresIn: '24h' });
        
           res.status(200).json({status:'Ok','data':data,'Token':token})
        }else{
            res.status(404).json({status:'User Not Found'})
        }
    })
    .catch(()=>{
        res.json({status:'Check Login Profile Code ERROR'})
    })
    
})


// Select Profile 

exports.selectProfile = ((req,res)=>{
    
     let userName = req.headers['userName']
    

    profileModel.find({UserName:userName})
    .then((data) => {
        res.status(200).json({status:'Ok','data':data})
    })
    .catch(()=>{
        res.status(404).json({status:'Failed'})
    })

})