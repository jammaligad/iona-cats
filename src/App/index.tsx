import { Outlet } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <main>
      This is the `/` home page <Outlet />
    </main>
  );
}

export default App;
