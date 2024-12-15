import { LIVE_URL } from "../utils/helper";

const SendIntrestedRequest = async (id) => {
  try {
    const response = await fetch(`${LIVE_URL}request/send/intrested/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = await response.json();
    if (data?.data) {
      return data.data;
    }
    return undefined;
  } catch (error) {
    console.log(error, "ERROR");
  }
};

const AcceptRequest = async (id) => {
  try {
    const response = await fetch(
      `${LIVE_URL}request/review/accepted/${id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    const data = await response.json();

    return data ? data : undefined;
  } catch (error) {
    console.log(error);
  }
};

const ShowAllRequests = async () => {
  try {
    const response = await fetch(`${LIVE_URL}user/requests/received`, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    return data ? data : undefined;
  } catch (error) {
    console.log(error);
  }
};

export { SendIntrestedRequest, AcceptRequest, ShowAllRequests };
