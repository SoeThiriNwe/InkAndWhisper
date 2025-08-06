import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store/hook";
import { readAllDataFromCompanyId } from "@/store/slices/companySlice";


export default function Home() {

  const router = useRouter();
  useEffect(()=>{
    router.push("/admin/backoffice");
  }, [] )


  
  return (
    <></>
  )
}
