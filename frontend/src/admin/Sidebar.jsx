import { AlertTriangle, ChartNoAxesCombined, LayoutDashboard, Settings, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard />, path: "/admin/dashboard" },
  { name: "Issues", icon: <AlertTriangle />, path: "/admin/issues" },
  { name: "Analytics", icon: <ChartNoAxesCombined />, path: "/admin/analytics" },
  { name: "Settings", icon: <Settings />, path: "/admin/settings" },
];

const Sidebar = ({ open, onClose }) => {
  return (
    <>
      {/* Overlay (mobile only) */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed z-50 top-0 left-0 h-full w-56 bg-emerald-700 text-white
          transform transition-transform
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="p-6 text-xl font-bold flex justify-between items-center">
          <ShieldCheck className="w-6 h-6" /> CampusCare<span className="text-emerald-400"></span>
          <button onClick={onClose} className="ml-4 md:hidden text-xl">✕</button>
        </div>

        <nav className="mt-6 flex flex-col gap-2 px-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `px-4 py-2 flex items-center gap-2 rounded-lg transition ${
                  isActive ? "bg-emerald-800" : "hover:bg-emerald-600"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
