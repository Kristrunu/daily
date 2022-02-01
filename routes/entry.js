const express = require('express');
const router = express.Router();
const Entry = require("../models/Entry");
const requiresAuth = require("../middleware/permissions");
const validateEntryInput = require("../validation/entryValidation");
const req = require('express/lib/request');
const { findOne, findOneAndUpdate } = require('../models/Entry');

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
      user: req.user._id,
      content: req.body.content,
      complete: false,
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

      const incompleteEntry = await Entry.find({
        user: req.user._id,
        complete: false,
      }).sort({ createdAt: -1 });

    return res.json({incomplete: incompleteEntry, complete: completeEntry});

  } catch(err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
  
});

// @route   PUT /api/entry/:entryID/complete
// @desc    Mark a todo as complete **
// @access  Private

// router.put("/:entryId/complete", requiresAuth, async(req,res) => {
//   try {
//     const entry = await Entry.findOne({
//       user: req.user._id, 
//       _id: req.params.entryId
//     });

//     if(!entry) {
//       return res.status(404).json({error: 'Could not find Entry'});
//     }

//     if(entry.complete) {
//       return res.status(400).json({error: "Entry is already complete"})
//     }

//     const updatedEntry = await Entry.findOneAndUpdate(
//       {
//         user: req.user._id, 
//         _id: req.params.entryId,
//       },

//       {
//         complete:true,
//         completedAt: new Date(),
//       },
//       {
//         new: true
//       }
//     );

//     return res.json(updatedEntry);

//   } catch(err) {
//     console.log(err);
//     return res.status(500).send(err.message);
//   }
// });

// // @route   PUT /api/entry/:entryID/incomplete
// // @desc    Mark a todo as incomplete 
// // @access  Private

// router.put("/:entryId/incomplete", requiresAuth, async(req,res) => {
//   try { 
//     const entry = await Entry.findOne({
//       user: req.user._id,
//       _id: req.params.entryId,
//     });

//     if(!entry) {
//       return res.status(404).json({error: 'Could not find Entry'});
//     }

//     if(!entry.complete) {
//       return res.status(400).json({error: "Entry is already incomplete"})
//     }

//     const updatedEntry = await Entry.findOneAndUpdate(
//       {
//         user: req.user._id, 
//         _id: req.params.entryId,
//       },

//       {
//         complete:false,
//         completedAt: null,
//       },
//       {
//         new: true
//       }
//     );

//     return res.json(updatedEntry);


//   } catch(err) {
//     console.log(err);
//     return res.status(500).send(err.message);
//   }

// });

// @route   PUT /api/entry/:entryID/
// @desc    Update a entry
// @access  Private

router.put("/:entryId", requiresAuth, async (req,res) => {
  try { 
    const entry = await Entry.findOne({
      user: req.user._id,
      _id: req.params.entryId,
    });

    if(!entry) {
      return res.status(404).json({error: 'Could not find Entry'});
    }

    const { isValid, errors } = validateEntryInput(req.body);

    if(!isValid) {
      return res.status(400).json(errors);
    }

    const updatedEntry = await Entry.findOneAndUpdate(
      {
          user: req.user._id,
          _id: req.params.entryId,
      },
      {
          content: req.body.content
      },
      {
          new: true
      }
    );

    return res.json(updatedEntry); 

  } catch(err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
})

// @route   DELETE /api/entry/:entryID/
// @desc    DElete a entry
// @access  Private

router.delete("/:entryId", requiresAuth, async (req, res) => {
  try { 
    const entry = await Entry.findOne({
      user: req.user._id,
      _id: req.params.entryId,
    });

    if(!entry) {
      return res.status(404).json({error: 'Could not find Entry'});
    }

    await Entry.findOneAndRemove({
      user: req.user._id,
      _id: req.params.entryId,
    });

    return res.json({ sucess: true });
  } catch(err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
});





 module.exports = router; 