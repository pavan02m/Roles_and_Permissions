const authAdmin = (permissions) =>{
    return(req,res,next) => {
        userRole = req.body.role;
        if(permissions.includes(userRole)){
            next()
        }
        else{
            return res.status(400).json({"messsage":"You dont have permission"})
        }
    }
};

const authStudent = (req,res,next) =>{

    next()
}

module.exports = {authAdmin , authStudent}