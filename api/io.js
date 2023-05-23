import axios from "axios";

export const getCharacters = async () => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};
