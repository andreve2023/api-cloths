require('dotenv').config();
const config = {
    portServer: process.env.PORT || process.env.PORT_SERVER,
    portDb: process.env.POSTGRESPORT || process.env.PORT_DB,
    localHost: process.env.POSTGRESHOST || process.env.LOCALHOST,
    nameDb: process.env.POSTGRESDATABASE || process.env.NAME_DB,
    passwordDb: process.env.POSTGRESPASSWORD || process.env.PASSWORD_DB,
    userDb: process.env.POSTGRESUSER || process.env.USER_DB,
    jwtSecret: process.env.JWT_SECRET,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET
}

module.exports = {config}