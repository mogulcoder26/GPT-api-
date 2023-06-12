const axios = require("axios");
const express = require('express');
const app = express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
let link='';
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.post('/detect',(req,res)=>{
    console.log(req.body);
    link=req.body.piclink;
    res.redirect('/detect');
})

app.get('/detect',(req,res)=>{
    const options = {
    method: 'POST',
    url: 'https://age-detector.p.rapidapi.com/age-detection',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '95992756cbmshdd903a59b07377ap1b3e73jsn36c4b8682a30',
        'X-RapidAPI-Host': 'age-detector.p.rapidapi.com'
    },
    data: {"url":link}
};
axios.request(options).then((response)=>{
    console.log(response.data);
    res.json(response.data[0].age)
}).catch(function (error) {
    console.error(error);
});

})

app.listen(5000, () => {
    console.log("App live at PORT 5000!")
})
