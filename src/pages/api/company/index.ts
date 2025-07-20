// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/general/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const method = req.method;
  if (method==="POST"){
      const body = req.body;
    const createdCompanyFromApi =   await prisma.company.create({data : {email : body.email,name : body.companyNameParameter}})
    res.status(200).json(createdCompanyFromApi);
  }
}
