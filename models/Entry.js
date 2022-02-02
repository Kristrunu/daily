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
},
  {
  timestamps: true
  }
);

// export the model 

const Entry = model("Entry", EntrySchema);
module.exports = Entry;
