import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { Product } from '../entities/product.entity';
import { productRepository } from '../repositories/product.repository';

export async function getAll(): Promise<Product[]> {
	return await productRepository.find();
}

export async function create(payload: CreateProductDto): Promise<Product> {
	const product = productRepository.create(payload);

	return await productRepository.save(product);
}

export async function getById(id: number): Promise<Product> {
	return await productRepository.findOneByOrFail({ id });
}

export async function updateById(id: number, payload: UpdateProductDto): Promise<Product> {
	const product = await productRepository.findOneByOrFail({ id });

	productRepository.merge(product, payload);

	return await productRepository.save(product);
}

export async function deleteById(id: number): Promise<void> {
	await productRepository.delete(id);
}
