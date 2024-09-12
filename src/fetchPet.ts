import { QueryFunction } from "@tanstack/react-query";
import { PetAPIResponse } from "./APIResponsesTypes";

//<PetAPIResponse, ["details", string]> is the type of the query function
// "details is the query key, and string is the value of the pet"
const fetchPet: QueryFunction<PetAPIResponse, ["details", string]> = async ({
  queryKey,
}) => {
  const id = queryKey[1];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchPet;
