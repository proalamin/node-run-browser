const fs=require('fs');
const http = require('http');

const server=http.createServer((req, res)=>{
    if(req.url=='/'){
        let data= fs.readFileSync('home.html')
        res.end(data);
    }
    else if(req.url=='/blog'){
        let data = fs.readFileSync('blog.html')
        res.end(data);
    }
    else if(req.url=='/ourTeam'){
        let data = fs.readFileSync('ourTeam.html')
        res.end(data);
    }
})

const PORT= 5000;
server.listen(PORT);
console.log(`server is runnning at http://localhost:${PORT}`);