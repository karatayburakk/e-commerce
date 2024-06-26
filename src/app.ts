import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import { AppDataSource } from './data-source';
import { rootRouter } from './routes/root.router';
import { productRouter } from './routes/product.router';
import { globalErrorHandler } from './utils/global-error-handler';
import { AppError } from './utils/AppError';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.APP_PORT ? +process.env.APP_PORT : 80;

function setupExpress(): void {
	app.use('/', rootRouter);

	app.use('/products', productRouter);

	app.all('*', (req: Request, _res: Response, next: NextFunction): void => {
		return next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
	});

	app.use(globalErrorHandler);
}

async function startApp(): Promise<void> {
	try {
		await AppDataSource.initialize();
		console.log(`Data Source has been initialized successfully!`);
	} catch (err) {
		console.error(`Error during Data Source initialization!`, err);
		process.exit(1);
	}

	setupExpress();

	app.listen(port, () => {
		console.log(`App is now running at http://locahost:${port}`);
	});
}

startApp();
