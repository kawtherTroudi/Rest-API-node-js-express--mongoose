const mongoose = require ( 'mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
});

module.exports = mongoose.model('User', userSchema)