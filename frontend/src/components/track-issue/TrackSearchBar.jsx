import { Search } from "lucide-react";
import { useState } from "react";

const TrackSearchBar = ({ onSearch, loading }) => {
  const [value, setValue] = useState("");

  return (
    <div className="search-card">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your Report ID : (CC-2025-XXXX)"
      />
      <button 
        onClick={() => onSearch(value)} 
        disabled={loading} 
        className="bg-emerald-800 text-white px-4 rounded-lg cursor-pointer flex items-center gap-1 hover:bg-emerald-600"
      >
        <Search size={18} />
        {loading ? "Tracking..." : "Track"}
      </button>
    </div>
  );
};

export default TrackSearchBar;
