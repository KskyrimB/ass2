const mongoose = require("mongoose");
const conn_str = "mongodb+srv://root:root@krutish.kusg0.mongodb.net/ESD-2?retryWrites=true&w=majority"

mongoose.connect(conn_str, { useNewUrlParser: true , useUnifiedTopology: true})
    .then( () => console.log("Connected successfully...") )
    .catch( (err) => console.log(err) );

const orderSchema = new mongoose.Schema({
  "rollNumber": String,
  "firstName": String,
  "lastName": String,
  "year": String,
  "dept": String,
  "div": String,
  "phoneNumber": String,
  "emailID": String,
}
  
);

const orderModel = new mongoose.model("students", orderSchema);

exports.order = orderModel;
