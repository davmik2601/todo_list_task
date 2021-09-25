import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    default: '0/0/0, 00:00',
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User"
  }
}, {
  timestamps: true
});


taskSchema.pre('save', function(next) {

  const today = new Date();
  this.date = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}, ${today.getHours()}:${today.getMinutes()}`;
  next();
})


const Task = mongoose.model("Task", taskSchema);

export default Task;