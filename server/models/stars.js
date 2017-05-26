var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StarSchema = new mongoose.Schema({
  name: {type: String, required:true, minlength: 3},
  author: {type: String, required:true, minlength: 3},
  description: {type: String, required:true, minlength: 5},
  count: {type: Number},
  notes: [{type: Schema.Types.ObjectId, ref:'Note'}]
},{timestamps: true})

var NoteSchema = new mongoose.Schema({
  name: {type: String, required:true, minlength: 3},
  content: {type: String, required:true, minlength: 4},
  _star :{type:Schema.Types.ObjectId, ref:'Star'}
},{timestamps: true})

mongoose.model("Star", StarSchema);
mongoose.model("Note", NoteSchema);
