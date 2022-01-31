const {Schema, model} = require('mongoose');

const EntrySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    content: {
      type: String,
      require: true
    },
    complete: {
      type: Boolean, 
      default: false,
    },
    completedAt: {
      type: Date, 
    }
},
  {
  timestamps: true
  }
);

// export the model 

const Entry = model("Entry", EntrySchema);
module.exports = Entry;
