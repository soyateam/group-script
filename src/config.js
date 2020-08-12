const config = {
    kartoffel: {
        url: process.env.KARTTOFEL_URL || 'http://kartoffel-master.eastus.cloudapp.azure.com:3000',
        rootID: process.env.HIERARCHY_ROOT_ID || '5e56858e4203fc40043591a5'
    },
    spike: {
        id: process.env.SPIKE_CLIENT_ID || 'id',
        secret: process.env.SPIKE_CLIENT_SECRET || 'secret'
    },
    cron: {
        timeZone: process.env.TIME_ZONE || 'Asia/Jerusalem'
    },
    madors: process.env.MADORIM_LIST ? process.env.MADORIM_LIST.split(',') : ['5ead97fbed7c45b55922ea67', '5ead97feed7c45b55922ea6f', '5ead97fced7c45b55922ea69']
}

module.exports = config;