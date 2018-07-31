const path = require('path');
const rootPath = path.normalize(__dirname + '/../');

module.exports = {
    development:{
        db: 'mongodb://localhost/fujitora-core',
        rootPath:rootPath,
        port:process.env.PORT || 8080,
        baseUrl: process.env.BASE_URL || 'http://localhost:8080/'
    },
    production:{
        db:process.env.PROD_DB,
        rootPath:rootPath,
        port:process.env.PORT,
        baseUrl: process.env.BASE_URL + '/'
    },
    test:{
        db:  process.env.TEST_DB || 'mongodb://localhost/fujitora-core-test',
        rootPath:rootPath,
        port:process.env.PORT || 8080,
        baseUrl: process.env.BASE_URL || 'http://localhost:8080/'
    },
};
