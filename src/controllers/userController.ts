import bcrypt from 'bcryptjs';
import { NextFunction, Request, Response } from 'express';

import HttpError from '../models/http-error';
import { User } from '../database/entities';

import { getRepository } from 'typeorm';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const userRepository = getRepository(User);

  const { name, email, password } = req.body;

  try {
    const checkUser = await userRepository.find({
      where: {
        email: email,
      },
    });

    if (checkUser) {
      const error = new HttpError('This email is already being used!', 422);
      return next(error);
    }
  } catch (err) {
    console.error(err);
    const error = new HttpError('Connection error, user check DB', 500);
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    console.error(err);
    const error = new HttpError('It was not possible to create the user, try again later. (code: hash error)', 500);
    return next(error);
  }

  try {
    const newUser = await userRepository.save({
      name,
      email,
      password: hashedPassword,
    });

    const createdUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      created_at: newUser.created_at,
      updated_at: newUser.updated_at,
    };

    return res.status(201).json(createdUser);
  } catch (err) {
    console.log(err);
    const error = new HttpError('It was not possible to create the user, try again later. (code: save)', 500);
    return next(error);
  }
};

export { create };
