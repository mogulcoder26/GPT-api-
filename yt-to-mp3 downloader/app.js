const express=require('express');
const app=express();
const axios = require("axios");
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
let id='';


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
    // Iy-dJwHVX84
    // mTLQhPFx2nM
})

app.get('/download',(req,res)=>{
        const options = {
      method: 'GET',
      url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
      params: {id: id},
      headers: {
        'X-RapidAPI-Key': '95992756cbmshdd903a59b07377ap1b3e73jsn36c4b8682a30',
        'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
      }
    };
    axios.request(options).then((response)=> {
        console.log(response.data);
        res.json(response.data.formats[0].url);
        // res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})

app.post('/dwnld',(req,res)=>{
    console.log(req.body);
    let ytlink= req.body.link;
//    https://www.youtube.com/watch?v=mTLQhPFx2nM
    id=ytlink.slice(32,32+11)
    console.log(id);
    res.redirect('/download');
})


app.listen(5000,(req,res)=>{
    console.log("App is listening to port 5000");
})