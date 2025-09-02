import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const routes = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/achievements", label: "Achievements" },
  // { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <img src={require('../logo.png')} alt="Logo" className="h-8 w-8 rounded-full shadow" />
          Anushka Uppula
        </Link>

        <div className="hidden sm:flex gap-6 items-center">
          {routes.map((r) => (
            <NavLink
              key={r.to}
              to={r.to}
              className={({ isActive }) =>
                "text-sm hover:underline " +
                (isActive ? "font-semibold" : "")
              }
              end={r.to === "/"}
            >
              {r.label}
            </NavLink>
          ))}
        </div>

        <button className="sm:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {/* Mobile menu dropdown */}
      {open && (
        <div className="sm:hidden bg-white border-b shadow-md">
          <div className="flex flex-col px-6 py-4 gap-4">
            {routes.map((r) => (
              <NavLink
                key={r.to}
                to={r.to}
                className={({ isActive }) =>
                  "text-base py-2 px-2 rounded hover:bg-slate-100 " +
                  (isActive ? "font-semibold text-blue-700" : "text-slate-700")
                }
                end={r.to === "/"}
                onClick={() => setOpen(false)}
              >
                {r.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
