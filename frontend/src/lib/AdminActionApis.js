import { getAuthHeaders } from "../utils/getAuthtoken"
import adminAxios from "./adminAxios"

export const markAsResolved = async(remark)=>{

  if(!remark){
    return false
  }

try {
    const resolvedData = await adminAxios.put("/admin/issues/resolve",{remark:remark},{headers:await getAuthHeaders()})

  
 return resolvedData.data;
} catch (error) {
  console.log(error)
  return false
}
}