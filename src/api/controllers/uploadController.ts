import {Request, Response, NextFunction} from 'express';
import {Point} from 'geojson';
import CustomError from '../../classes/CustomError';
import {UploadResponse} from '../../types/MessageTypes';

const uploadPost = async (
  req: Request,
  res: Response<UploadResponse, {coords: Point}>,
  next: NextFunction,
) => {
  try {
    if (!req.file) {
      const err = new CustomError('file not valid', 400);
      throw err;
    }

    const response: UploadResponse = {
      message: 'file uploaded',
      data: {
        filename: req.file.filename,
        location: res.locals.coords,
      },
    };
    res.json(response);
  } catch (error) {
    next(new CustomError((error as Error).message, 400));
  }
};

export {uploadPost};
