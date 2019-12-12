// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    requried: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  pages: {
    type: [Schema.Types.ObjectId],
    ref: "Page"
  }
});

export default mongoose.model("User", UserSchema);
