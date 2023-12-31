import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="w-full bg-cover bg-no-repeat h-[100vh] bg-[url('https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
        <h1 className="text-center text-3xl pt-4 font-bold text-white ">
          Recipe Finder Application
        </h1>
        <Link to="/MyFavorite" className="animate-character font-bold  ml-8 ">
          MyFavorite
        </Link>
        <SearchBar setData={setData} setLoading={setLoading} />
        <SearchResult data={data} loading={loading} />
      </div>
    </>
  );
};

export default Home;
