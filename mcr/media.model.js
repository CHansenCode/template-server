import mongoose from "mongoose";

const mediaSchema = mongoose.Schema({
  //INFO
  title: String,
  description: String,
  tags: [String],

  category: String,

  //VALUES
  color: String, //hex-code
  height: Number,
  width: Number,

  //SEO & ACCESS
  alt: String,

  //FILE
  fileName: String,

  urls: {
    root: String,
    full: String,
    regular: String,
    small: String,
    thumb: String,
  },

  //ARCHIVALS
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Media = mongoose.model("Media", mediaSchema, "Media");

export default Media;
