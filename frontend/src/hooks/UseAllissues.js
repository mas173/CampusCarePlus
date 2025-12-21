import {useQuery} from '@tanstack/react-query';
import { getAllissues } from '../lib/apicalls';

const useAllIssues =()=>{
  const {data, isLoading}= useQuery({
    queryKey:["getAllIssues"],
    queryFn:getAllissues,
    retry:2
  })
//  console.log(data)
  return {isLoading:isLoading , allIssues:data}
}

export default useAllIssues;