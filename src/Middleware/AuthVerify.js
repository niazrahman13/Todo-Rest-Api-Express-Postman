// JWT Import

var jwt = require('jsonwebtoken');

// MiddleWare Function

exports.authVerify = ((req,res,next) => {

    let token = req.headers['token-key']

    jwt.verify(token,'secret',(err,data)=>{
        if(data){

            let store = data.items[0]["UserName"]
            req.headers.userName = store
            
            next()
        }else{
            res.status(404).send({'Status':'Failed JWT Verify'})
        }
    })
    
})