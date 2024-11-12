import pg from 'pg';
import {Sequelize} from 'sequelize';

class DbConnection {
    private static instance: DbConnection;
    private readonly sequelize: Sequelize;

    private constructor() {
        this.sequelize = this.connectToDatabase();
    }

    public static getInstance(): DbConnection {
        if (!DbConnection.instance) {
            DbConnection.instance = new DbConnection();
        }
        return DbConnection.instance;
    }

    private connectToDatabase(): Sequelize {
        const dbUser = process.env.POSTGRES_USER;
        const dbPass = process.env.POSTGRES_PASSWORD;
        const dbName = process.env.POSTGRES_DATABASE;
        const dbHost = process.env.POSTGRES_HOST;

        if (!dbUser || !dbPass || !dbName || !dbHost) {
            throw new Error('Database connection details are missing');
        }

        return new Sequelize({
            dialect: 'postgres',
            username: dbUser,
            password: dbPass,
            database: dbName,
            host: dbHost,
            port: 5432,
            logging: false,
            dialectModule: pg,
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        });
    }

    public getSequelize(): Sequelize {
        return this.sequelize;
    }
}

export default DbConnection;