import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { NextFunction, Request, Response } from 'express';

exports.login = async (req: Request, res: Response, next: NextFunction) => {
	const { email = 'teste@teste.com', password = '123456' } = req.body;

	return res.status(200).json({
		user_name: 'TESTE',
		id: 'ID',
		email: email,
		token: 'tokenaqui',
	});
};
