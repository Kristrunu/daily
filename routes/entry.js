const express = require('express');
const router = express.Router();
const Entry = require("../models/Entry");
const requiresAuth = require("../middleware/permissions");
const validateEntryInput = require("../validation/entryValidation");
const req = require('express/lib/request');
const { findOne, findOneAndUpdate } = require('../models/Entry');

/********* TEST DATABASE - GET/READ *********/
// @route   GET /api/entry/test
// @desc    Test the auth route
// @access  Public 
router.get("/test", (req,res) => {
  res.send("Entry route working")
});

/********* POST / CREATE *********/
// @route   POST /api/entry/new
// @desc    Create entry
// @access  Private
router.post("/new", requiresAuth, async (req, res) => { // Creating a new entry requires user authentication
  try {
    const {isValid, errors} = validateEntryInput(req.body); // Validation from entryValidation 

    if(!isValid) {
      return res.status(400).json(errors);
    }

    // Create a new Entry
    const newEntry = new Entry({
      user: req.user._id,
      content: req.body.content,
    });

    // Save the new entry
    await newEntry.save();
    // Return the new entry data in json
    return res.json(newEntry);

  } catch(err) {
    console.log(err);
    // We return a 500 server error, and return error message
    return res.status(500).send(err.message);
  }
});


/********* GET / READ *********/
// @route   GET /api/entry/current
// @desc    Current users entry
// @access  Private
router.get("/current", requiresAuth, async (req, res) => {
  try {
    // Grab user entries from the database 
    const entry = await Entry.find({ 
      user: req.user._id, 
      // sort them by creation date
    }).sort({ createdAt: -1 });
 
    return res.json({entries: entry});

  } catch(err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
});


/********* PUT / UPDATE *********/
// @route   PUT /api/entry/:entryID/
// @desc    Update an entry
// @access  Private
router.put("/:entryId", requiresAuth, async (req,res) => {
  try { 
    // Grab the user entry from the database, check that it exists
    const entry = await Entry.findOne({ // Return one entry
      // Make sure that id belongs to the user
      user: req.user._id, // Check for the entry with the user_id
      _id: req.params.entryId, // the ID = /:entryID
    });

    // If there is no return from the database
    if(!entry) {
      // Return a 404 (not found) with message
      return res.status(404).json({error: 'Could not find Entry'});
    }

    // Validate the input/textarea for entry
    const { isValid, errors } = validateEntryInput(req.body);

    if(!isValid) { // If it is invalid
      // return a 400 error
      return res.status(400).json(errors);
    }

    // Entry update
    const updatedEntry = await Entry.findOneAndUpdate(
      {
        user: req.user._id, // Check for the entry with the user_id
        _id: req.params.entryId,
      },
      {
        // Update the content
        content: req.body.content
      },
      {
        // Return new
        new: true
      }
    );

    // Return the updated entry
    return res.json(updatedEntry); 

  } catch(err) {
    // If no response from server, return 500 error message
    console.log(err);
    return res.status(500).send(err.message);
  }
})


/********* DELETE *********/
// @route   DELETE /api/entry/:entryID/
// @desc    DElete a entry
// @access  Private
router.delete("/:entryId", requiresAuth, async (req, res) => {
  try { 
    // Grab the user entry from the database, check that it exists
    const entry = await Entry.findOne({
      user: req.user._id,
      _id: req.params.entryId,
    });

    // If there is no return from the database
    if(!entry) {
      // Return a 404 (not found) with message
      return res.status(404).json({error: 'Could not find Entry'});
    }

    //If we find the entry, we delete it.
    await Entry.findOneAndRemove({
      user: req.user._id, // Check for the entry with the user_id
      _id: req.params.entryId,
    });

    return res.json({ sucess: true });
  } catch(err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
});

module.exports = router;