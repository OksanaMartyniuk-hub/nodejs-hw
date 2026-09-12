import createHttpError from 'http-errors';

import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';
import { User } from '../models/user.js';

export const updateUserAvatar = async (req, res, next) => {
  try {
    if (!req.file) {
      throw createHttpError(400, 'No file');
    }

    const result = await saveFileToCloudinary(req.file.buffer, req.user._id);

    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        avatar: result.secure_url,
      },
      {
        returnDocument: 'after',
      },
    );

    res.status(200).json({
      url: user.avatar,
    });
  } catch (err) {
    next(err);
  }
};
