import { Schema, model, models } from "mongoose";
const NewsSchema = new Schema({
  Title: {
    type: String,
    required: [true, "required"],
  },
  Image: {
    type: String,
    required: [true, "required"],
  },
  Description: {
    type: String,
    unique: true,
    required: [true, "required"],
  },
  Date: {
    type: String,
    required: [true, "required"],
  }
});

const News = models.News || model("News", NewsSchema);

export default News;
