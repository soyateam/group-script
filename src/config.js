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
    mongo: {
        connectionString: process.env.MONGO_URL ? `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.MONGO_URL}` : 'mongodb://mongo:27017'
    },
    madors: process.env.MADORIM_LIST ? process.env.MADORIM_LIST.split(',') : ['5ead97fbed7c45b55922ea67', '5ead97feed7c45b55922ea6f', '5ead97fced7c45b55922ea69']
}

module.exports = { config };