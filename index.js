import express from "express";
import cors from "cors"

const app = express();

// app.use((req,res, next)=> {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     next();
// })

//replaces function above^^^
app.use(cors());
app.use(express.json())

const animals = [];
const fragrances = [];

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("hello world")
})

app.get("/json", (req, res) => {
    res.status(200).json({
        test: "hello",
        test2: "heloo"})
})

app.get("/animals", (req,res) => {
    res.status(200).json(animals)
})

app.get("/fragrances", (req, res) => {
    res.status(200).json(fragrances)
})


app.post("/fragrances", (req, res) => {
    if(req.body.name && req.body.brand){
        fragrances.push(req.body)
        res.status(200).json({msg: "content received"})
    }else {
        res.status(400).json({msg: "bad content"})
    }
});
app.post("/animals", (req,res) => {
    let body = req.body;
    // const {animal, name, age} = req.body;
    if(body.animal && body.name){
        animals.push(req.body)
        console.log(body);
        res.status(200).json({msg: "content received"})
    }else {
        res.status(400).json({msg: "bad content"})
    }
})

app.listen(3000, () =>{
    console.log("server started")
});