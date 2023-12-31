import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";

const RecipeDetail = () => {
  const { state } = useLocation();
  const [fav, setFev] = useState(false);

  function handleClick() {
    const data = JSON.parse(localStorage.getItem("recipe"));
    if (data) {
      localStorage.setItem("recipe", JSON.stringify([...data, state.recipe]));
      alert("Added to Favorite");
    } else {
      localStorage.setItem("recipe", JSON.stringify([state.recipe]));
      alert("Added to Favorite");
    }
  }
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("recipe"));
    if (data) {
      const isFev = data.filter((item) => item.label === state?.recipe?.label);
      console.log(isFev[0]?.label);
      if (isFev[0]?.label) {
        setFev(true);
        console.log("aagaya");
      }
    }
  }, [state, fav]);

  return (
    <>
      <div
        className={`w-full bg-cover bg-no-repeat h-[100vh] bg-[url('https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] `}
      >
        <div className="flex justify-center items-center pt-8 flex-col ">
          <img
            src={state?.recipe?.images.REGULAR.url}
            className="h-60 w-60 rounded-3xl"
            alt="recipe "
          />
          <h1 className="text-white ">Dish Name:- {state?.recipe?.label}</h1>
          <button className="text-white" onClick={handleClick}>
            add to favorite
            <MdFavoriteBorder
              className="h-6 w-6 inline "
              fill={fav ? "red" : "white"}
            />
          </button>
          <div className="text-white">
            <h1 className=" font-bold">ingredients</h1>
            <ul className="overflow-x-auto h-60 no-scrollbar pr-4 w-80">
              {state?.recipe?.ingredients.map((item) => (
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
      </div>
    </>
  );
};
export default RecipeDetail;
