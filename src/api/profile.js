import { LIVE_URL } from "../utils/helper";

const GetAllConnections = async () => {
  try {
    const response = await fetch(`${LIVE_URL}user/connections`, {
      credentials: "include",
    });
    const data = await response.json();

    return data ? data.data : undefined;
  } catch (error) {
    console.log(error, "ERROR");
  }
};

export { GetAllConnections };
