

const User = require("../models/user_management_model");
//const Users = require("../models/user_management");
var md5 = require('md5');
exports.create=(req,res)=>{
    //const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty !"
        });
    } 
     
     const user = new User({
        
           
        firstname : req.body.firstname,
        lastname   :req.body.lastname,
        email : req.body.email,
        contact : req.body.contact,
        password : md5(req.body.password),
       // confirmpwd : req.body.confirmpwd,
        
        dept_id:req.body.dept_id,
      //  usergroup :  req.body.usergroup,
       
        branch_id :req.body.branch_id,
        active : req.body.active,
        confirmed : req.body.confirmed,
        //assoc_role:req.body.assoc_role,
        module_id : req.body.module_id,
        role_perm_id:req.body.role_perm_id
        });
        
        User.create(user,(err, data)=>{

            if(!req.body){
                res.status(400).send({
                    message:"Fill all the data"
                })
              
            }
         
           if(err)
                res.status(500).send({
                message: 
                err.message || "some error occured while creating the user."
            });
        
            else {
                res.send(data);            
                
            }
                
                   
            
        });
    

    

   
};

exports.findAll=(req,res)=>{
    User.getAll((err, data) =>{
        if(err)
         res.status(500).send({
             message:
              err.message || "some error occured while retrieving the user "
         });
         else res.send(data);
    });
};

/*exports.findOne=(req,res)=>{
    User.findById(req.params.userId, (err, data) =>{
        console.log(req.params);
     if(err){
         if(err.kind === "not_found"){
             res.status(404).send({
                 message :'Not found user with id ${req.params.parentId}.'
             });

         }else{
             res.status(500).send({
                message :"error retriveing user with id " +req.params.parentId
             });
         }
         
     }else
               
                res.send(data);

 });
};

exports.update=(req,res)=>{
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty !"
        });

    }

    User.updatedById(req.params.userId,new User(req.body),(err, data) => {
            if(err){
                if(err.kind === "not_found"){
                    res.status(404).send({
                        message: 'Not found user with id ${req.params.userId}.'
                    });
                }else{
                    res.status(500).send({
                        message:"Error updating user with id " +req.params.userId
                    });
                }
            }else res.send(data);
        }
    );
};

exports.delete=(req,res)=>{
    Users.remove(req.params.userId,(err,data)=>{
        if(err){
            if(err.kind === "not_find"){
                res.status(400).send({
                    message:'Not  found user with id ${req.params.userId}.'
                });
            }else{
                res.status(500).send({
                    message: "could not delete user with id " +req.params.userId
                });
            }
        }else res.send({message: 'user was deleted Successfully ! '});
    });
};*/

exports.deleteAll=(req,res)=>{
    User.removeAll((err, data)=>{
        if(err)
         res.status(500).send({
             message:
             err.message || " Some error occured while removing all user."
         });
        else res.send({message :'All user were deleted successfully !'});
    });
};