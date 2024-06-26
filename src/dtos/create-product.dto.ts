import { IsNotEmpty, IsPositive, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
	@IsNotEmpty()
	@IsString()
	name!: string;

	@IsOptional()
	@IsString()
	description!: string;

	@IsPositive()
	@IsNumber()
	price!: number;

	@IsPositive()
	@IsNumber()
	inventory!: number;
}
