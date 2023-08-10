const express = require('express');
const os = require('os');

const app = express();
app.use('/',async(req,res)=>{
    console.log(`I am sending a response ${os.hostname()}`);
    res.json({message:'Ok it works....', hostname:os.hostname()});
});


app.listen(3000, ()=>console.log('server on port 3000'));
