import PriorityBadge from "../../admin/PriorityBadge";
import IssueStatusBadge from "../../admin/IssueStatusBadge";
import IssueDetailsLoader from "../../admin/IssueDetailsLoader";
import NoIssueFound from "../../admin/NoIssueFound";
import { useParams } from "react-router-dom";
import useIssueDetail from "../../hooks/UseGetissueDetail";
import {
  MapPin,
  Calendar,
  User,
  FileText,
  Brain,
  Image as ImageIcon,
  ScrollText,
  FileCheck2,
  GalleryVertical,
} from "lucide-react";

const IssueDetails = () => {
  const { id } = useParams();
  const { isLoading, data: issue } = useIssueDetail(id);

  if (isLoading) return <IssueDetailsLoader />;
  if (!issue) return <NoIssueFound />;

  return (
    <div className="max-w-6xl mx-auto mt-8 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-gray-900">
          {issue.title}
        </h1>
        <p className="text-sm text-gray-500">
          Report ID: <span className="font-medium">{issue.reportId}</span>
        </p>
      </div>

      <div className="bg-white rounded-2xl border shadow-sm p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Meta icon={<User size={18} />} label="Submitted By" value={issue.submittedBy} />
          <Meta
            icon={<Calendar size={18} />}
            label="Reported On"
            value={
              issue.createdAt
                ? new Date(issue.createdAt).toLocaleString("en-IN")
                : "—"
            }
          />
          <Meta icon={<MapPin size={18} />} label="Location" value={issue.location} />
          
          
          <Meta icon={<GalleryVertical size={18} />} label="Category" value={issue.category} />
        </div>

        <div className="flex flex-wrap gap-3">
          <IssueStatusBadge status={issue.status} />
          <PriorityBadge priority={issue.priority} />
        </div>

        <Section title="Issue Description :" icon={<ScrollText size={18} />}>
          <p className="text-gray-700 leading-relaxed">
            {issue.description}
          </p>
        </Section>

        {issue.aiSummary && (
          <Section title="AI Analysis :" icon={<FileCheck2 size={18} />}>
            <p className="text-sm text-gray-700">
              {issue.aiSummary}
            </p>
          </Section>
        )}

        {issue.attachment && (
          <Section title="Attached Evidence :" icon={<ImageIcon size={18} />}>
            <div className="rounded-xl overflow-hidden border">
              <img
                src={issue.attachment}
                alt="Attachment"
                className="w-full max-h-[420px] object-cover"
              />
            </div>
          </Section>
        )}

        <div className="border-t pt-6 flex flex-wrap gap-3 justify-end">
          <ActionButton label="Mark In Progress" variant="yellow" />
          <ActionButton label="Resolve Issue" variant="green" />
          <ActionButton label="Reject Issue" variant="red" />
        </div>
      </div>
    </div>
  );
};

const Meta = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="text-emerald-700">{icon}</div>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium text-gray-800">{value || "—"}</p>
    </div>
  </div>
);

const Section = ({ title, icon, children }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2 text-gray-900 font-semibold">
      {icon}
      {title}
    </div>
    {children}
  </div>
);

const ActionButton = ({ label, variant }) => {
  const styles = {
    yellow: "bg-yellow-500 cursor-pointer hover:bg-yellow-600",
    green: "bg-emerald-600 cursor-pointer hover:bg-emerald-700",
    red: "bg-red-600 cursor-pointer hover:bg-red-700",
  };

  return (
    <button
      className={`${styles[variant]} text-white px-5 py-2 rounded-lg font-medium transition`}
    >
      {label}
    </button>
  );
};

export default IssueDetails;
