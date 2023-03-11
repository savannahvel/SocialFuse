const { Schema, Types } = require('mongoose');

// Schema Only
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: string, 
            required: true,
        },
        createdAt: {
            type: date, 
            default: Date.now, 
        }
    },
    {
        toJSON: {
            getters: true,
            virtual: true,
        },
        id: false,
    }
);

reactionSchema.virtual('formattedTimestamp').get(function() {
  return this.createdAt.toLocaleString();
});

module.exports = reactionSchema;
