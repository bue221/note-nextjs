const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add the title"],
    unique: true,
    trim: true,
    maxLength: [40, "title cannot be more than 40 characters"],
  },
  description: {
    type: String,
    required: true,
    maxLength: [200, "Description cannot be more than 40 characters"],
  },
});

// NoteSchema.set("timestamps", true);

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
