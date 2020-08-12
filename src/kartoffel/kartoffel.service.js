const axios = require('axios').default;
const config = require('../config');

async function getAllHierarchy() {
    const res = await axios.get(`${config.kartoffel.url}/api/organizationGroups/${config.kartoffel.rootID}/children`);
    const groups = res.data;
    return groups;
}

async function getDirectMembers(groupID) {
    const res = await axios.get(`${config.kartoffel.url}/api/organizationGroups/${groupID}?populate=directmembers`);
    const group = res.data;
    return group.directMembers;
}

async function getAllMembers(groupID) {
    const res = await axios.get(`${config.kartoffel.url}/api/organizationGroups/${groupID}/members`);
    const members = res.data;
    return members;
}

module.exports = { getAllHierarchy, getDirectMembers, getAllMembers }