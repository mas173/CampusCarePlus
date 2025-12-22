import { useQuery } from "@tanstack/react-query";
import { getIssueDetailByAdmin } from "../lib/apicalls";

const useIssueDetail = (id) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["getIssueDetail", id], 
    queryFn: () => getIssueDetailByAdmin(id), 
    enabled: !!id, 
    retry: false,
  });

  // console.log(data);

  return { isLoading, data, error };
};

export default useIssueDetail;