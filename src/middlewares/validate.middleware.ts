import { Request, Response, NextFunction } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

export function validateDto(dtoClass: any) {
	return async (req: Request, res: Response, next: NextFunction) => {
		const dtoInstance = plainToInstance(dtoClass, req.body);
		const errors: ValidationError[] = await validate(dtoInstance);

		if (errors.length > 0) {
			const errorMessages = errors
				.map(error => Object.values(error.constraints || {}).join(', '))
				.join('; ');
			return res.status(400).json({ message: `Validation failed: ${errorMessages}` });
		} else {
			req.body = dtoInstance;
			next();
		}
	};
}
