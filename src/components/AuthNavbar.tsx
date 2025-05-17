import { Link, Outlet } from "react-router";

const AuthNavbar = () => {
  return (
    <div>
      <nav className="py-5 px-6 space-x-5">
        <Link
          to={"/login"}
          className="border-b-2 active:border-red-500 border-slate-500 cursor-pointer pb-2 text-blue-500"
        >
          Go to Login
        </Link>
        <Link
          to={"/register"}
          className="border-b-2 active:border-red-500 border-slate-500 cursor-pointer pb-2 text-blue-500"
        >
          Go to Register
        </Link>
      </nav>

        <Outlet />
    </div>
  );
};

export default AuthNavbar;
