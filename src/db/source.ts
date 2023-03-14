import "reflect-metadata";
import {DataSource} from "typeorm";
import {Post} from "./entities/post";

const dataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    username: process.env.DB_USERNAME || "user",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_DATABASE_NAME || "db",
    // synchronize: process.env.NODE_ENV !== "production",
    migrations: process.env.DB_LOAD_MIGRATIONS ? ["src/db/migrations/*.ts"] : [],

    entities: [
        Post,
    ],
    logging: false,
});

export default dataSource;
