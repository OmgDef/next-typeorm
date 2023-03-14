import dataSource from "@/db/source";


export const getDb = async (): Promise<typeof dataSource> => {
    if (!dataSource.isInitialized) {
        await dataSource.initialize();
    }

    return dataSource;
};

export default getDb();
