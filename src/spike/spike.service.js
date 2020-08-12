const getTokenCreator = require('spike-get-token');
const config = require('../config');


async function getKartoffelToken() {
    const getToken = getTokenCreator(config.spike);
    const token = await getToken();
    return token;
}

module.exports = { getKartoffelToken }