import profile from "../data/profile";

export default function Home() {
  return (
    <>
      {/* Mobile view */}
      <div className="block sm:hidden min-h-screen w-full bg-slate-100 flex flex-col items-center justify-start">
        <img
          src={require('../photo.jpeg')}
          alt="Profile"
          className="w-full h-auto max-h-[350px] object-cover object-center rounded-xl shadow mt-4"
        />
        <div className="w-full bg-white flex flex-col items-center justify-center py-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-0 text-center">
            Hey,<br />I am {profile.name}
          </h1>
          <p className="text-base text-slate-500 text-center mt-2">
            {profile.role}
          </p>
        </div>
      </div>
      {/* Web/desktop view */}
      <div className="hidden sm:flex min-h-screen w-full flex-row">
        {/* Left: Full image */}
        <div className="sm:w-1/2 w-full h-screen flex items-center justify-center bg-slate-100">
          <img
            src={require('../photo.jpeg')}
            alt="Profile"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Right: Centered text */}
        <div className="sm:w-1/2 w-full flex flex-col items-center justify-center px-6 py-0 bg-white">
          <h1 className="text-6xl font-extrabold text-slate-900 mb-6 text-center">
            Hey,<br />I am {profile.name}
          </h1>
          <p className="text-xl text-slate-500 text-center mt-2">
            {profile.role}
          </p>
        </div>
      </div>
    </>
  );
}
