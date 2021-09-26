const { Schema } = require('mongoose');

module.exports = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  phone: {type: Number, unique: true},
  todos: [{ type: Schema.Types.ObjectId, ref: 'Todo' }]
}, { timestamps: true });