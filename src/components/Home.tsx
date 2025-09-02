import profile from "../data/profile";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col sm:flex-row">
      {/* Left: Full image */}
      <div className="sm:w-1/2 w-full min-h-screen sm:h-screen flex items-center justify-center bg-slate-100">
        {/* Mobile view: vertically centered image */}
        <div className="flex flex-col justify-center items-center w-full h-full sm:hidden min-h-screen">
          <img
            src={require('../photo.jpeg')}
            alt="Profile"
            className="w-full h-auto max-h-[350px] object-cover object-center rounded-xl shadow"
          />
        </div>
        {/* Desktop/web view: full height image */}
        <img
          src={require('../photo.jpeg')}
          alt="Profile"
          className="hidden sm:block w-full h-full object-cover object-center"
        />
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
