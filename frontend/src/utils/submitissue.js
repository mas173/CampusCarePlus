import {toast} from "react-hot-toast"
import {axiosInstance} from "../lib/axios"

const submitIssue = async(form)=>{


try {
  
if(!form){
  return alert("form is required")
}

const issue_data = await axiosInstance.post("/submit",form);

return issue_data.data;

} catch (error) {
  console.log(error)

  return
  
}

}

export default submitIssue;