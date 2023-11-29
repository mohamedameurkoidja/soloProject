const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/library")
  .then(() => {
    console.log("conected");
  })
  .catch((err) => {
    console.log("err", err);
  });

let bookSchema = mongoose.Schema({
  title: String,
  Image: String,
  prix: Number,
  
});

const books = mongoose.model("book", bookSchema);

let add = async(book)=>{
  return await books.create(book)
}
let getall= async(book)=>{
  return await books.find(book)
}
let deletebook= async(book)=>{
  return await books.deleteOne(book)
}
let updetebook= async(id,book)=>{
  return await books.findOneAndUpdate({_id:id},book)
}
let serchbook= async(book)=>{
  return await books.findOne({title: book})
}

module.exports = {updetebook,deletebook,getall,add,serchbook};
