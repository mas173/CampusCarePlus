import "./trackIssue.css";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TrackSearchBar from "./TrackSearchBar";
import IssueHeroCard from "./IssueHeroCard";
import IssueProgressTracker from "./IssueProgressTracker";
import IssueAttachment from "./IssueAttachment";
import { getIssueDetailByUSer } from "../../lib/apicalls";
import toast from "react-hot-toast";

const TrackIssuePage = () => {
  const navigate = useNavigate();
  const [issue, setIssue] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (reportId) => {
    if (!reportId) return;
    setLoading(true);
    setIssue(null);

    try {
      const res = await getIssueDetailByUSer(reportId);
      if (!res) {
        toast.error("No issue found");
        return;
      }
      setIssue(res);
    } catch {
      toast.error("Failed to fetch issue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="track-bg">
      <div className="track-container">
        <header className="track-header">
          
          <h1> <button className="cursor-pointer mr-6" onClick={() => navigate("/")}>
            <ArrowLeft />
          </button>Track Your Issue</h1>
        </header>

        <TrackSearchBar onSearch={handleSearch} loading={loading} />

        {issue && (
          <>
            <IssueHeroCard issue={issue} />
            <IssueProgressTracker issue={issue} />

            <div>
              {issue.attachment && (
                <IssueAttachment image={issue.attachment} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TrackIssuePage;
