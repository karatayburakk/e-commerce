import { DataSource } from 'typeorm';

const port = parseInt(process.env.DB_PORT || '5432');

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: true,
	logging: true,
});