import { Router } from 'express';
import * as productController from '../controllers/product.controller';

const productRouter: Router = Router();

productRouter.route('/').get(productController.getAll).post(productController.create);

productRouter
	.route('/:id')
	.get(productController.getById)
	.patch(productController.updateById)
	.delete(productController.deleteById);

export { productRouter };
