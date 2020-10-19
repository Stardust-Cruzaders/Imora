import { Storage } from '@google-cloud/storage';
import { Request, Response, NextFunction } from 'express';

const storage = new Storage({ keyFilename: 'Imora-de02efe2d599.json' });

const bucketName = 'imora_residence_pictures';

const bucket = storage.bucket(bucketName);

function getPublicUrl(filename: string): string {
  return `https://storage.googleapis.com/${bucketName}/${filename}`;
}
const imgUpload = {};

imgUpload.uploadToGcs = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (!request.file) return next();

  const gcsname = request.file.originalname;
  const file = bucket.file(gcsname);

  const stream = file.createWriteStream({
    metadata: {
      contentType: request.file.mimetype,
    },
  });

  stream.on('error', err => {
    request.file.cloudStorageError = err;
    next(err);
  });

  stream.on('finish', () => {
    request.file.cloudStorageObject = gcsname;
    request.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
    next();
  });

  stream.end(request.file.buffer);
};

export default imgUpload;
