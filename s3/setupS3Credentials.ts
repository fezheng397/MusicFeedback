import AWS from 'aws-sdk';

export function setupS3Credentials() {
  AWS.config = new AWS.Config();
  AWS.config.accessKeyId = process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID;
  AWS.config.secretAccessKey = process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY;
  AWS.config.region = 'us-east-2';
}
