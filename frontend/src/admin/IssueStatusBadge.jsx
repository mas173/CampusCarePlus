const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700 border-yellow-300",
  "In Progress": "bg-blue-100 text-blue-700 border-blue-300",
  Resolved: "bg-emerald-100 text-emerald-700 border-emerald-300",
  Rejected: "bg-red-100 text-red-700 border-red-300",
};

const IssueStatusBadge = ({ status }) => {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}>
      {status}
    </span>
  );
};

export default IssueStatusBadge;
