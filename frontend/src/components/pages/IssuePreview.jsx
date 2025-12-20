import { ShieldCheck, Copy, Check } from "lucide-react";
import { useState } from "react";

const IssuePreview = ({ form, anonymous, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(form.reportId);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-xl p-6 animate-fade-in">

        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="text-emerald-700 w-6 h-6" />
          <h2 className="text-xl font-semibold text-emerald-700">
            Issue Submitted
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-3 text-sm text-gray-700">

          <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-lg p-3">
            <div>
              <p className="text-xs text-gray-500">Report ID</p>
              <p className="font-semibold text-emerald-700">
                {form.reportId}
              </p>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-emerald-600 text-emerald-700 hover:bg-emerald-100 cursor-pointer transition"
            >
              {copied ? (
                <>
                  <Check size={16} /> Copied
                </>
              ) : (
                <>
                  <Copy size={16} />
                </>
              )}
            </button>
          </div>

          <p>
            <span className="font-medium">Category:</span> {form.category}
          </p>

          <p>
            <span className="font-medium">Location:</span> {form.location}
          </p>

          <p>
            <span className="font-medium">Submitted As:</span>{" "}
            {anonymous ? "Anonymous" : "Identified"}
          </p>

          <div>
            <span className="font-medium">Description:</span>
            <p className="text-gray-600 mt-1">{form.description}</p>
          </div>

          <p className="text-yellow-600 font-medium">
            <span className="text-gray-700">Current Status:</span> Pending Review
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-red-700 italic text-sm">
            * Keep Report ID for future reference.
          </p>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-medium transition"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};

export default IssuePreview;
