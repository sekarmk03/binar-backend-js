const { google } = require('googleapis');

const {
    OAUTH_REDIRECT_URI,
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET
} = process.env;

const oauth2Client = new google.auth.OAuth2(
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
    OAUTH_REDIRECT_URI
);

function generateAuthURL() {
    const scopes = [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile'
    ];

    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        response_type: 'code',
        scope: scopes
    });

    return authUrl;
}

module.exports = {
    googleOauth2: (req, res, next) => {
        try {
            const code = req.query.code;

            if (!code) {
                const url = generateAuthURL();

                return res.redirect(url);
            }

            res.send('berhasil login');
        } catch (err) {
            next(err);
        }
    }
};