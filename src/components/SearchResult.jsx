import { Link } from "react-router-dom";
import Loading from "./Loading";

const SearchResult = ({ data, loading }) => {
  return (
    <div className="mt-4 mx-auto w-full sm:w-96 ">
      { loading ? (
        <Loading />
      ) : (
        <ul className=" overflow-x-auto h-96  no-scrollbar">
          {data.map((item, idx) => (
            <li
              className="text-xl flex justify-between my-1 cursor-pointer"
              key={`key-${item.recipe.image}`}
            >
                <Link
                  to={`recipes/${idx}`}
                  state={{ recipe: item.recipe }}
                  className="text-white"
                >
                  {item.recipe.label}
                </Link>
              <img
                src={item.recipe.images.THUMBNAIL.url}
                className="h-10 w-10 rounded-full"
                alt= {`${item.recipe.label}dog`}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResult;
