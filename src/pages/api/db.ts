// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getDb} from "@/db";
import {Post} from "@/db/entities/post";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {

  const dataSource = await getDb();
  const result = await dataSource.manager.find(Post)

  res.status(200).json(result)
}
