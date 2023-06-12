const axios = require("axios");
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
        params: { q: 'bing' },
        headers: {
            'X-RapidAPI-Key': '95992756cbmshdd903a59b07377ap1b3e73jsn36c4b8682a30',
            'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
        }
    };

    axios.request(options)
        .then((response) => {
            console.log(response.data);
            const data = (response.data);
            return data;
        }).then((data) => {
            console.log(data.items);
            let items = data.items;
            // res.json(items);
            return items;
        }).then((items) => {
            let array=[];
            items.forEach((video) => {
                let obj={
                    title:video.title,
                    url:video.url
                }
                array.push(obj);
            });
            // res.json(array);
            return array;
        }).then((array)=>{
            let finalArr=[];
            array.forEach((e)=>{
                finalArr.push(e)
            })
            res.json(finalArr);//can extract for further use!!!
        }).catch(function (error) {
            console.error(error);
        });

    // axios.request(options)
    // .then(function (response) {
    //     console.log(response.data);
    //     res.json(response.data.items);
    // }).catch(function (error) {
    //     console.error(error);
    //     res.status(500).send('Internal server error');
    // });

})

app.listen(3000, () => {
    console.log('Server Live @ 3000')
})