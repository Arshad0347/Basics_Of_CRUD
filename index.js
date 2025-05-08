const express=require("express");
const app=express();
const port=3200;

const Members=require("./Members");
const uuid=require("uuid");
app.use(express.json());


app.delete("/deleteUsers/:uid",(req,res)=>{
    const id=parseInt(req.params.uid);
    // console.log(id);
const found =Members.filter((member)=>member.id!==id);
if(found.length===Members.length){
    return res.status(404).json({message:`user not found ${id}`});
}
Members=found;
res.status(200).json(Members);
    
})
// app.get("/myUsers",(req,res)=>{
//     res.status(200).json(Members);
// })
app.post("/addUser",(req,res)=>{
    // const user=req.body;
    // console.log(user);
    const {name,email,status}=req.body
    // console.log(name,email,status)
    
    Members.push({
        id:uuid.v4(),
        name,
        email,
        status
        
    });
    res.status(200).json(Members);
})

///app.push ___ home work...

app.get("/myUsers/:id",(req,res)=>{
//  console.log(req.params.email);
const id=req.params.id;
const user=members.filter((member)=>member.id=== parseInt(id));
(user.length!==0)?res.status(200).json(user):res.status(404).json({message:`user not found ${id}`});

})

app.listen(port,()=>{
    console.log('server is running http://localhost:3200');
    
})