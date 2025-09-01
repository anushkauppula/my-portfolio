import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
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
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-700"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button className="sm:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
