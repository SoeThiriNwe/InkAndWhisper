// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/general/prisma";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const method = req.method;
    if(method==="POST"){
        const body = req.body;
        console.log(body)
        const createdCategory = await prisma.category.create({data : {name: body.categoryNamePara,CompanyId : body.companyId}});
        res.status(200).json(createdCategory);

    }
  res.status(200).json({ name: "John Doe" });
}
