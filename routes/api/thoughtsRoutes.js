const { createThought, getThoughts, getSingleThought, updateThought, deleteSingleThought, createReaction, deleteSingleReaction } = require('../../controllers/thoughtController');

const router = require('express').Router();

// /api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);

router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteSingleThought)

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(createReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteSingleReaction);

module.exports = router;


