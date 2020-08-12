const { GroupModel } = require('./group.model');

async function createGroup(group) {
    GroupModel.create(group);
}

module.exports = { createGroup }