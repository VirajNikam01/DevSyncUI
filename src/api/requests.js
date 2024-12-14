import { DEV_URL } from "../utils/helper";

const SendIntrestedRequest = async (id) => {
  try {
    const response = await fetch(`${DEV_URL}request/send/intrested/${id}`, {
      method: "POST",
      credentials: "include",
    });
    const data = await response.json();
    if (data?.data) {
      return data.data;
    }
    return undefined
  } catch (error) {
    console.log(error, "ERROR");
  }
};

export {SendIntrestedRequest}
