import Home from "./Pages/Home";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { appStore } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className=" ">
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
