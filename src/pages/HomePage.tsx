import {  useNavigate } from "react-router";

const HomePage = () => {
    const router = useNavigate();
  return (
    <div>
      <h1 className="text-center my-12">Home Page</h1>
      {/* <a href="/about">
        
      </a> */}
      {/* <Link className={"border-2 bg-red-500 px-4 py-1 mx-20"} to={"/about"}>
        Go To about
      </Link> */}
      <button onClick={() => router("/about")} className="border px-4 py-1 mx-20">Go to About</button>
    </div>
  );
};

export default HomePage;
