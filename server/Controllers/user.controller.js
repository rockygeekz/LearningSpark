import profiles from "../Mongodb/connect.js"

const createUser = (req,res)=>{
    let {data} = req.body;
    
    if (data.name === profiles[0].usn){
        res.send(profiles[0].name);
    }
    
}

export {createUser};