const mongoose = require('mongoose')


const ConnectDataBase =async() =>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_ADIMIN}:${process.env.MONGO_PASSWORD}@apicardapio.o7qwz2z.mongodb.net/?retryWrites=true&w=majority`);
        console.log("conexão foi um sucesso!")
      
      } catch (error) {
        console.log("houve um erro" , error)
      }
}
   

module.exports = ConnectDataBase



