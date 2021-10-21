const express = require('express');
const cors = require('cors');
const { json } = require('express');
const app = express();

app.use(cors());


app.use(express.json());




const port = 5000;




app.get('/',(req,res)=> {
    res.send('wow, exiviting to laerning node')
});



const users = [
    {id:0,name:'Sudeb',email:'sudebkarmokar8@gmail.com',phone:'01723813821'},
    {id:1,name:'Asha',email:'Asha@gmail.com',phone:'01723813821'},
    {id:2,name:'Tisha',email:'Tisha@gmail.com',phone:'01723813821'},
    {id:3,name:'Puja',email:'Puja@gmail.com',phone:'01723813821'},
    {id:4,name:'Srabonti',email:'Srabonti@gmail.com',phone:'01723813821'},
    {id:5,name:'Anamika',email:'Anamika@gmail.com',phone:'01723813821'},
]

app.get('/users',(req,res)=>{
   const search = req.query.search; 
   if(search){
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult);
   }
   else{
    res.send(users)
   }
   
})


//app.method
app.post('/users',(req,res)=>{
    const newUser = req.body;
    
    newUser.id = users.length;
    users.push(newUser)


    console.log('hiting the post',req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


app.get('/users/:id',(req,res)=> {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits/mangoes/fazli',(req,res) => {
    res.send('Yummy ummy tok marka fazli')
})

app.get('/fruits',(req,res)=> {
    res.send(['mango','oranges','banana','apple'])
})

app.listen(port,()=> {
    console.log('listening to port', port);
})