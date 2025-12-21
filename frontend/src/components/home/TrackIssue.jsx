import { useState } from "react";
import { Search, CheckCircle, XCircle, Clock } from "lucide-react";

const TrackIssue = () => {
  const [open, setOpen] = useState(false);
  const [reportId, setReportId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    setError("");
    setResult(null);

    const issue = mockIssues.find(
      (i) => i.reportId.toLowerCase() === reportId.toLowerCase()
    );

    if (!issue) {
      setError("No issue found with this Report ID");
      return;
    }

    setResult(issue);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Resolved":
        return (
          <span className="flex items-center gap-1 text-green-700 font-medium">
            <CheckCircle size={18} /> Resolved
          </span>
        );
      case "Rejected":
        return (
          <span className="flex items-center gap-1 text-red-700 font-medium">
            <XCircle size={18} /> Rejected
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1 text-yellow-700 font-medium">
            <Clock size={18} /> Pending
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto">

      <button
        onClick={() => setOpen(!open)}
        className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Track Your Issue
      </button>

      {open && (
        <div className="mt-6 space-y-4">

          {/* Search Input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Report ID (e.g. CC-2025-AX91)"
              value={reportId}
              onChange={(e) => setReportId(e.target.value)}
              className="flex-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-700"
            />
            <button
              onClick={handleSearch}
              className="bg-emerald-700 text-white px-4 rounded-lg flex items-center gap-1"
            >
              <Search size={18} />
              Search
            </button>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          {/* Result */}
          {result && (
            <div className="border rounded-lg p-4 bg-gray-50 space-y-2">
              <p>
                <span className="font-medium">Report ID:</span>{" "}
                {result.reportId}
              </p>

              <p>
                <span className="font-medium">Status:</span>{" "}
                {getStatusBadge(result.status)}
              </p>

              <div>
                <span className="font-medium">Description:</span>
                <p className="text-gray-600 mt-1">
                  {result.description}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TrackIssue;
