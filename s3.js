const fs = require("fs");
const AWS = require("aws-sdk");
const BUCKET_NAME = process.env.IMAGES_BUCKET;
const S3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "eu-west-3",
});

const uploadImage = async (file) => {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: `${BUCKET_NAME}/images`,
    Key: file.originalname,
    Body: fileStream,
  };
  return S3.upload(uploadParams).promise();
};

module.exports = { uploadImage, S3 };
