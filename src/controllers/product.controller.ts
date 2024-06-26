import { Request, Response } from 'express';
import * as productService from '../services/product.service';
import { catchAsync } from '../utils/catch-async';

export const getAll = catchAsync(async (req: Request, res: Response) => {
	const products = await productService.getAll();

	return res.status(200).json({
		products,
	});
});

export const create = catchAsync(async (req: Request, res: Response) => {
	const payload = req.body;

	const product = await productService.create(payload);

	return res.status(201).json({
		product,
	});
});

export const getById = catchAsync(async (req: Request, res: Response) => {
	const id = +req.params.id;

	const product = await productService.getById(id);

	return res.status(200).json({
		product,
	});
});

export const updateById = catchAsync(async (req: Request, res: Response) => {
	const id = +req.params.id;
	const payload = req.body;

	const product = await productService.updateById(id, payload);

	return res.status(200).json({
		product,
	});
});

export const deleteById = catchAsync(async (req: Request, res: Response) => {
	const id = +req.params.id;

	await productService.deleteById(id);

	return res.status(204).send();
});
