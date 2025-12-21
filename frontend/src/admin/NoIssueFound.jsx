import { AlertCircle } from "lucide-react";

const NoIssueFound = () => {
  return (
    <div className="bg-white rounded-xl shadow p-8 text-center max-w-xl mx-auto mt-5">
      <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
      <h2 className="text-lg font-semibold">Issue not found</h2>
      <p className="text-gray-500 mt-2">
        The issue you are looking for does not exist or may have been removed.
      </p>
    </div>
  );
};

export default NoIssueFound;
