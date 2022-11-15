require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const ejs = require('ejs');

const {
    GOOGLE_REFRESH_TOKEN,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI,
    GOOGLE_SENDER_EMAIL
} = process.env;

const oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

function sendEmail(to, subject, html) {
    return new Promise(async (resolve, reject) => {

        try {
            const accessToken = await oauth2Client.getAccessToken();

            const transport = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: GOOGLE_SENDER_EMAIL,
                    clientId: GOOGLE_CLIENT_ID,
                    clientSecret: GOOGLE_CLIENT_SECRET,
                    refreshToken: GOOGLE_REFRESH_TOKEN,
                    accessToken: accessToken
                }
            });

            const mailOptions = {
                to,
                subject,
                html
            };

            const response = await transport.sendMail(mailOptions);

            resolve(response);
        } catch (err) {
            reject(err);
        }
    });
};

async function getHtml(filename, data) {
    return new Promise((resolve, reject) => {
        const path = __dirname + '/views/' + filename;

        ejs.renderFile(path, data, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

async function main() {
    try {
        const html = await getHtml('welcome.ejs', { user: { name: 'tatang' } });

        await sendEmail('tromadhona@binaracademy.org', 'test gapakai express', html);
    } catch (err) {
        console.log(err);
    }
}
main();

/*
    endpoint forgot password -> http://localhost/forgot-password {email: user_email}
*/
// ambil user_email
// findOne by email
// generate token (user_id)
// kirim token dan url ganti password ke email user -> http://localhost/reset_password?token=


/*
    endpoint reset password -> http://localhost/reset-password?token=  {new_password}
*/
// ambil token dan body data
// extract/verify token -> dapatin payload { user_id}
// validasi apakah user_id ada di database
// bcrypt(password)
// update user password where user_id = payload.user_id
// success


