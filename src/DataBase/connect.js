const mongoose = require('mongoose')


const ConnectDataBase =async() =>{
    try {
        await mongoose.connect(`mongodb+srv://Joabyson:${process.env.MONGO_PASSWORD}@cluster0.9tzyifo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

        console.log("conexão foi um sucesso!")
      
      } catch (error) {
        console.log("houve um erro" , error)
      }
}
   

module.exports = ConnectDataBase



