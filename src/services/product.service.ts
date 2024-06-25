import { Product } from '../entities/product.entity';
import { productRepository } from '../repositories/product.repository';

export async function getAll(): Promise<Product[]> {
	return await productRepository.find();
}

export async function create(createProductDto: any): Promise<Product> {
	const product = productRepository.create({
		name: 'Test',
		description: 'description',
		price: 1000,
		inventory: 10,
	});

	return await productRepository.save(product);
}

export async function getById(id: number): Promise<Product> {
	return await productRepository.findOneByOrFail({ id });
}

export async function updateById(id: number, updateProductDto: any): Promise<Product> {
	const product = await productRepository.findOneByOrFail({ id });

	productRepository.merge(product, updateProductDto);

	return await productRepository.save(product);
}

export async function deleteById(id: number): Promise<void> {
	await productRepository.delete(id);
}
