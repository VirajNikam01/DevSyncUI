import { LIVE_URL } from "../utils/helper";

const RegisterNewUser = async (evt) => {
  try {
    const response = await fetch(`${LIVE_URL}signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(evt),
      credentials: "include",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, "SIGN IN ERROR");
  }
};

const LogoutUser = async () => {
  try {
    const data = await fetch(`${LIVE_URL}logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error.message, "ERROR MESSAGE");
  }
};

const UserLogin = async (evt) => {
  try {
    const { email, password } = evt;
    const response = await fetch(`${LIVE_URL}login`, {
      method: "POST",
      body: JSON.stringify({
        emailId: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    console.log("LOGGED IN!!!");

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, "ERRROR");
  }
};

export { RegisterNewUser, LogoutUser, UserLogin };
