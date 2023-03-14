import {dbJob} from "./jobs/db";
import dataSource from "@/db/source";
import * as process from "process"


async function cron() {
    try {
        await dataSource.initialize();
    } catch (error) {
        console.error('Could not initialize database', error);
        return;
    }

    console.log('CRON JOBS');

    try {
        await dbJob();

        if (dataSource.isInitialized) {
            await dataSource.destroy();
        }
        process.exit(0)
    } catch (error) {
        console.error('There was an error', error);
        if (dataSource.isInitialized) {
            await dataSource.destroy();
        }
        process.exit(1)
    }
}

cron();

export {};
