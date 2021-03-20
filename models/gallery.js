const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const gallerySchema = new mongoose.Schema({
  
    
    product: {
        type: ObjectId,
        ref: 'Product',
        required: true,
    },
    file: {
        data: Buffer,
        contentType: String,
        path:String,
        name: String
    }
    
}, {timestamps: true}
);



module.exports = mongoose.model("Gallery", gallerySchema);