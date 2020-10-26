import { Storage } from '@google-cloud/storage';
import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';

interface MulterRequest extends Request {
  file: any;
}

const storage = new Storage({ keyFilename: 'Imora-de02efe2d599.json' });

const bucketName = 'imora_user_pictures';

const bucket = storage.bucket(bucketName);

function getPublicUrl(filename: string): string {
  return `https://storage.googleapis.com/${bucketName}/${filename}`;
}

const uploadToGcs = (
  request: MulterRequest,
  response: Response,
  next: NextFunction,
) => {
  if (!request.file) {
    return next();
  }

  const gcsname = `${request.file.originalname}${Date.now()}`;
  const file = bucket.file(gcsname);

  const stream = file.createWriteStream({
    metadata: {
      contentType: request.file.mimetype,
    },
  });

  stream.on('finish', async () => {
    try {
      request.file.cloudStorageObject = gcsname;
      await file.makePublic();
      request.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
    } catch (error) {
      throw new AppError(`Something went wrong if the avatar upload: ${error}`);
    }
  });

  stream.end(request.file.buffer);
  next();
};

export default uploadToGcs;
