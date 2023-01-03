require('dotenv').config();
const qr = require('qr-image');
var ImageKit = require("imagekit");

const {
    IMAGEKIT_PUBLIC_KEY,
    IMAGEKIT_PRIVATE_KEY,
    IMAGEKIT_URL_ENDPOINT
} = process.env;

const imagekit = new ImageKit({
    publicKey: IMAGEKIT_PUBLIC_KEY,
    privateKey: IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: IMAGEKIT_URL_ENDPOINT
});

function uploadImage(file) {
    return new Promise(async (resolve, reject) => {
        try {
            const uploadedFile = await imagekit.upload({
                file,
                fileName: 'qr-code'
            });

            const data = {
                title: uploadedFile.name,
                url: uploadedFile.url
            };

            resolve(data);
        } catch (err) {
            reject(err);
        }
    });
}

async function generateQRCode() {
    try {
        const buffer = qr.imageSync('https://google.com');

        const data = await uploadImage(buffer.toString('base64'));

        return data;
    } catch (err) {
        console.log(err);
        return;
    }
}

generateQRCode()
    .then(data => console.log(data));