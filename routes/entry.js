const express = require('express');
const router = express.Router();
const Entry = require("../models/Entry");
const requiresAuth = require("../middleware/permissions");
const validateEntryInput = require("../validation/entryValidation");

// @route   GET /api/entry/test
// @desc    Test the auth route
// @access  Public 

 router.get("/test", (req,res) => {
   res.send("Entry route working")
 }
 );

// @route   POST /api/entry/new
// @desc    Create entry
// @access  Private
router.post("/new", requiresAuth, async (req, res) => {
  try {
    const {isValid, errors} = validateEntryInput(req.body);

    if(!isValid) {
      return res.status(400).json(errors);
    }
    // Create new Entry
    const newEntry = new Entry({
      user:req.user._id,
      content: req.body.content,
      complete:false,
    })

    await newEntry.save();
    
    return res.json(newEntry);

  } catch(err) {
    console.log(err);

    return res.status(500).send(err.message);
  }

})


// @route   POST /api/entry/current
// @desc    Current diary entry 
// @access  Private

router.get("/current", requiresAuth, async (req, res) => {
  try {
    const completeEntry = await Entry.find({
        user: req.user._id,
        complete: true, 
      }).sort({ completeAt: -1 })

    return res.json({complete: completeEntry});

  } catch(err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
  
});

 module.exports = router; 