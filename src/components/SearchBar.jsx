import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { getSearchData } from "../utils/getSearchData";

const SearchBar = ({ setData , setLoading}) => {
  const [value, setValue] = useState('');
  function handleClick() {
    if (value) {
      setLoading(true)
      getSearchData(value)
        .then((res) => setData(res.hits))
        .finally(() => {setValue("")
        setLoading(false)
      });
    } else {
      alert("search some food name");
    }
  }

  return (
    <>
      <div className="flex justify-center items-center mt-4 ">
        <input
          className="border-2  w-96 py-3 pl-3 rounded-3xl outline-none "
          placeholder="search food food name..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="h-8 w-8 ml-4  z-10 right-0" onClick={handleClick}>
          <IoSearch size="100%" color="#fff" />
        </button>
       
      </div>
    </>
  );
};

export default SearchBar;
