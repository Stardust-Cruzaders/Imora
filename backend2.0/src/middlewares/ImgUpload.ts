import { Storage } from '@google-cloud/storage';
import { Request, Response, NextFunction } from 'express';

interface MulterRequest extends Request {
  files: any;
}
interface Image {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: any;
  size: number;
}
const storage = new Storage({ keyFilename: 'Imora-de02efe2d599.json' });

const bucketName = 'imora_residence_pictures';

const bucket = storage.bucket(bucketName);

function getPublicUrl(filename: string): string {
  return `https://storage.googleapis.com/${bucketName}/${filename}`;
}

const uploadToGcs = (
  request: MulterRequest,
  response: Response,
  next: NextFunction,
) => {
  if (!request.files) {
    return next();
  }
  let promises: Array<Promise<unknown>> = [];
  request.files.forEach((image: Image, index: number) => {
    const gcsname = `${image.originalname}${Date.now()}`;
    const file = bucket.file(gcsname);

    const promise = new Promise((resolve, reject) => {
      const stream = file.createWriteStream({
        metadata: {
          contentType: image.mimetype,
        },
      });

      stream.on('finish', async () => {
        try {
          request.files[index].cloudStorageObject = gcsname;
          await file.makePublic();
          request.files[index].cloudStoragePublicUrl = getPublicUrl(gcsname);
          resolve();
        } catch (error) {
          reject(error);
        }
      });

      stream.end(image.buffer);
    });
    promises.push(promise);
  });
  Promise.all(promises)
    .then(_ => {
      promises = [];
      next();
    })
    .catch(next);
};

export default uploadToGcs;
