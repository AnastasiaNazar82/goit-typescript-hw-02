import axios from "axios";

const API_KEY = "zl5ajlft1JNrwRwTaer6p9rRFP015oGnGRWIZxEASeA";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async (query, page) => {
  const response = await axios.get("search/photos", {
    params: {
      query: query,
      page: page,
      pre_page: 12,
      client_id: API_KEY,
    },
  });

  return response.data;
};

// const API_KEY = "563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74";
// axios.defaults.baseURL = "https://api.pexels.com/v1/";
// axios.defaults.headers.common["Authorization"] = API_KEY;
// axios.defaults.params = {
//   orientation: "landscape",
//   per_page: 15,
// };

// export const getPhotos = async (query, page) => {
//   const { data } = await axios.get("search", {
//     params: {
//       query,
//       page,
//     },
//   });

//   return data;
// };
