import { IsPositive, IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateProductDto {
	@IsOptional()
	@IsString()
	name!: string;

	@IsOptional()
	@IsString()
	description!: string;

	@IsOptional()
	@IsPositive()
	@IsNumber()
	price!: number;

	@IsOptional()
	@IsPositive()
	@IsNumber()
	inventory!: number;
}
