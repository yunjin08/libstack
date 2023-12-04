import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  title: {
    type: Schema.Types.ObjectId,
    required: [true, "Title is required."],
  },
  author: {
    type: String,
    required: [true, "Prompt is required."],
  },
  page: {
    type: Number,
    required: [true, "Tag is required."],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
