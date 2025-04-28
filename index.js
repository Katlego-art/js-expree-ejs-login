import express from "express";
import bodyParser from 'body-parser';
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import path from 'path';


const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
                                                                                                            

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); 
});


app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/public/signup.html');  
});


app.get('/signin', (req, res)=> {
    res.sendFile(__dirname + '/public/signin.html'); 
});

app.listen(port, ()=>{
    console.log(`App is running using port ${port}`);
});
