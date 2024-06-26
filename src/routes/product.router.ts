import { Router } from 'express';
import * as productController from '../controllers/product.controller';
import { validateDto } from '../middlewares/validate.middleware';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';

const productRouter: Router = Router();

productRouter
	.route('/')
	.get(productController.getAll)
	.post(validateDto(CreateProductDto), productController.create);

productRouter
	.route('/:id')
	.get(productController.getById)
	.patch(validateDto(UpdateProductDto), productController.updateById)
	.delete(productController.deleteById);

export { productRouter };
