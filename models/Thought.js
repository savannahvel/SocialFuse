const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thought model

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
    toJSON: {
      getters: true,
      virtual:true,
    },
  }
);

thoughtSchema.virtual('formattedTimestamp').get(function() {
  return this.createdAt.toLocaleString();
}); 

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;