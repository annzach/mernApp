const mongoose =require('mongoose');

const todoSchema = new mongoose.Schema({
  task:{type: String, required:true},
  isComplete:{type:Boolean, required:true, default:false},
  createdAt:{type:Date, required:true ,default:Date.now }
});
//statics -- if I want to call toggle method on a Model use statics , if I want to call toggle on arow
//call method instaed  of statics
todoSchema.statics.toggle = function(id,cb) {
  this.findById(id, (err,todo)=>{
    if(err) return cb(err);
    todo.isComplete = !todo.isComplete;
   /* let saveCb = (err, savedTodo)=>{
      cb(err,savedTodo);
    });*/
    todo.save(cb);
  })

};

const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;