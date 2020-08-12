const Schema = require('mongoose').Schema;

const ObjectId = Schema.Types.ObjectId;

const groupSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        isMador: {
            type: Boolean,
            required: true,
        },
        unitName: {
            type: String,
            required: true,
        },
        assignedCount: {
            type: String,
            required: true,
            default: 0
        },
        kartoffelID: {
            type: ObjectId,
            required: true,
        },
        parent: {
            type: ObjectId,
            required: true,
        },
        children: {
            type: [ObjectId],
            required: true,
            default: [],
        },
        ancestores: {
            type: [ObjectId],
            required: true,
            default: []
        },
        peopleSum: {
            type: Number,
            required: true,
        },
        serviceType: {
            type: {
                kevaSum: Number,
                hovaSum: Number,
            },
            required: true,
        },
        rankType: {
            type: {
                aSum: Number,
                bSum: Number,
                cSum: Number,
            },
            required: true
        }
    }
);

module.exports = mongoose.model('group', groupSchema);