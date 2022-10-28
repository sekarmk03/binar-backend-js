const querystring = require('query-string');
const axios = require('axios');

module.exports = {
    generateAuthURL: () => {
        const params = querystring.stringify({
            client_id: process.env.FB_APP_ID,
            redirect_uri: process.env.FB_REDIRECT_URI,
            scope: ['email', 'user_friends'].join(','),
            response_type: 'code',
            auth_type: 'rerequest',
            display: 'popup',
        });

        return `https://www.facebook.com/v15.0/dialog/oauth?${params}`;
    }
};