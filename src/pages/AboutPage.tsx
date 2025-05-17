import { NavLink } from "react-router";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-center my-12">About Page</h1>
      {/* <a href="/">
    <button className="">Go to Home</button>
  </a> */}
      <NavLink className={"border px-4 py-1 mx-20"} to={"/"}>
        Go To Home
      </NavLink>
    </div>
  );
};

export default AboutPage;
