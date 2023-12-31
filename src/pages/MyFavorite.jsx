import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyFavorite = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const json = JSON.parse(localStorage.getItem("recipe"));
    setData(json);
  }, []);
  return (
    <>
      <div
        className={`w-full bg-cover bg-no-repeat h-[100vh] bg-[url('https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] `}
      >
        <h1 className="text-center text-3xl pt-4 font-bold text-white ">
          My Favorite List
        </h1>
        {data ? (
          <div className=" overflow-y-auto h-[32rem] no-scrollbar ">
            {data?.map((items) => (
              <>
                <div
                  className="flex justify-center pt-8 gap-6 flex-col items-center"
                  key={items.uri}
                >
                  <img
                    src={items.images.REGULAR.url}
                    className="h-60 w-60 rounded-3xl self-center"
                    alt="recipe "
                  />
                  <div className="text-white flex flex-col">
                    <h1 className="text-white ">Dish Name:- {items.label}</h1>

                    <h1 className=" font-bold">ingredients</h1>
                    <ul className="overflow-x-auto h-60 no-scrollbar pr-4 w-80">
                      {items?.ingredients.map((item) => (
                        <div key={item?.foodId}>
                          <li className="mb-4">
                            <p>food: {item?.food}</p>
                            <p>foodCategory: {item?.foodCategory}</p>
                            <p>measure: {item?.measure}</p>
                            <p>text: {item?.text}</p>
                            <p>quantity: {item?.quantity}</p>
                            <img
                              src={item?.image}
                              className="h-16 w-16 rounded-lg"
                              alt={item?.text}
                            />
                            <p>weight: {item?.weight.toFixed(2)} GM</p>
                          </li>
                          <hr />
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ))}
          </div>
        ) : (
          <>
            <div className="flex justify-center mt-10 flex-col">
              <h1 className=" animate-character text-center text-2xl font-bold">
                Please Add first Favorite List
              </h1>
            </div>
            <div className="flex justify-center mt-10">
              <Link className="text-white underline " to="/">
                click to Home
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default MyFavorite;
