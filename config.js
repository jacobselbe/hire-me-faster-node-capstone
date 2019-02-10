exports.DATABASE_URL = 
    process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://admin:admin007@ds129045.mlab.com:29045/job-search-crm';

exports.TEST_DATABASE_URL = 
    process.env.TEST_DATABASE_URL || 'mongodb://admin:admin007@ds129045.mlab.com:29045/job-search-crm';

exports.PORT = 
    process.env.PORT || 8080;