import mongoose from  'mongoose';

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    
      image: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      duration: {
        type: String,
        
      },
      category: {
        type: String,
        required: true,
      },
      createdBy: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    whatsapp:{
        type:String,
        required: [true, "Path `whatsapp` is required"],
    }

    
});
export const Courses  = mongoose.model("Courses", schema);