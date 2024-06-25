import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class Product {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ nullable: false })
	name!: string;

	@Column({ nullable: true, type: 'text' })
	description!: string;

	@Column({ nullable: false, type: 'decimal', precision: 10, scale: 2 })
	price!: number;

	@Column({ nullable: false, type: 'int' })
	inventory!: number;

	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;
}
