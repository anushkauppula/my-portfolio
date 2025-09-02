import profile from "../data/profile";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col sm:flex-row">
      {/* Left: Full image */}
      <div className="sm:w-1/2 w-full flex items-center justify-center bg-slate-100" style={{ minHeight: '300px' }}>
        <div className="flex items-center justify-center w-full h-full py-8 sm:py-0">
          <img
            src={require('../photo.jpeg')}
            alt="Profile"
            className="w-full h-auto max-h-[350px] object-cover object-center rounded-xl shadow"
          />
        </div>
      </div>
      {/* Right: Centered text */}
      <div className="sm:w-1/2 w-full flex flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-0 bg-white">
        <h1 className="text-3xl sm:text-6xl font-extrabold text-slate-900 mb-6 text-center">
          Hey,<br />I am {profile.name}
        </h1>
        <p className="text-base sm:text-xl text-slate-500 text-center mt-2">
          {profile.role}
        </p>
      </div>
    </div>
  );
}
