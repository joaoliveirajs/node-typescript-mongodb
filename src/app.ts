import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

import routes from './routes';

class AppController {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(morgan('dev'));
    }

    private database(): void {
        mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    }

    private routes(): void {
        this.express.use(routes);
    }
}

export default new AppController().express;
