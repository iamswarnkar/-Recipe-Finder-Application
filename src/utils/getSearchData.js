// import dotenv from "dotenv";
// dotenv.config();

const appId = process.env.REACT_APP_APPLICATION_ID;
const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;



//https://api.edamam.com/api/recipes/v2?type=public&q=biriyani&app_id=31424e4e&app_key=3d3f38ac534276793bbadd1e49c48713

export const getSearchData = async (searchQuery ) => {
  try {
    const data = await fetch(
      `${baseUrl}/api/recipes/v2?type=public&q=${searchQuery}&app_id=${appId}&app_key=${apiKey}`
    );
    const response = await data.json();
    return response;
  } catch (e) {
    console.log(e, "eeeeeeeeeeee");
    return e;
  }
};
