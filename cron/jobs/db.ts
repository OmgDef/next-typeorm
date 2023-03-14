import {getDb} from "@/db";
import {Post} from "@/db/entities/post";


export async function dbJob() {
    const dataSource = await getDb();
    const rows = await dataSource.manager.find(Post);
    console.log(rows);
}
