// objective: defin page mongoDB schema
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PageSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String
  }
});

export default mongoose.model("Page", PageSchema);
