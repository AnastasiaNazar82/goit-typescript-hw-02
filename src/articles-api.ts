import axios from "axios";

const API_KEY = "zl5ajlft1JNrwRwTaer6p9rRFP015oGnGRWIZxEASeA";
axios.defaults.baseURL = "https://api.unsplash.com/";

interface Image {
  id: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface GetImagesResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export const getImages = async (
  query: string,
  page: number
): Promise<GetImagesResponse> => {
  const response = await axios.get<GetImagesResponse>("search/photos", {
    params: {
      query: query,
      page: page,
      pre_page: 12,
      client_id: API_KEY,
    },
  });

  return response.data;
};
