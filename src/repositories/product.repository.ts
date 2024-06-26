import { AppDataSource } from '../data-source';
import { Product } from '../entities/product.entity';

export const productRepository = AppDataSource.getRepository(Product);
