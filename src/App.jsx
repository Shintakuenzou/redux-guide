import { Provider } from "react-redux";

import Sidebar from "./Components/Sidebar";
import Video from "./Components/Video";

import store from "./store";

export function App() {
  return (
    <div>
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}
