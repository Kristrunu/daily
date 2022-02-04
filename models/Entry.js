const {Schema, model} = require('mongoose');

// Definition for what our entry model will look like
const EntrySchema = new Schema(
  {
    // User property
    user: { // Tells the database which user the entry/entries belong to
      type: Schema.Types.ObjectId, 
      ref: "User"
    },
    
    // Content property
    content: {
      type: String,
      required: true
    },
  },
  {
  timestamps: true
  }
);

// export the model 

const Entry = model("Entry", EntrySchema);
module.exports = Entry;
