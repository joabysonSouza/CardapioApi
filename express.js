const express = require("express");
const dotEnv = require("dotenv");
const ConnectBase = require("./src/DataBase/connect");
const UseModel = require("./src/Models/user.models");
const cors = require("cors")

dotEnv.config(); // configurando variaveis de ambiente

ConnectBase();

const app = express();

const Port = process.env.PORT || 3006

app.use(cors())

app.use(express.json());

app.listen( Port, () => console.log("servidor online"));

app.get("/", (req, res) => {
  res.status(200).send("servindo rodando ");
});

app.post("/dados", async (req, res) => {
  try {
    const use = await UseModel.create(req.body);
    res.status(201).json(use);
  } catch (erro) {
    console.log("Houve algum error", +erro);
  }
});


app.get("/dados", async(req , res)=>{
    try{
        const users = await UseModel.find({})
        res.status(200).json(users)
    }catch (erro) {
      res.status(500).send(erro)      
    }

})
app.delete("/dados/:id", async(req, res)=>{
 try{
  const id = req.params.id
  const users = await UseModel.findByIdAndDelete(id)
  res.status(204).json(users)
 }
 catch(erro){
 res.status(500).send(erro)

 }

})


