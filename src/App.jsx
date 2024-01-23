import Navbar from "./Inicio/Navbar";
import BotonWhats from "./boton/BotonWhats";
import PrincipalPage from "./Sections/PrincipalPage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/mazatlan-gateway/", element: <PrincipalPage /> },
  {
    path: "/mazatlan-gateway/Emergency-Numbers",
    element: <h1>Emergency numbers</h1>,
  },
  { path: "/mazatlan-gateway/Food", element: <h1>Food</h1> },
  { path: "/mazatlan-gateway/Activities", element: <h1>Activities</h1> },
  { path: "/mazatlan-gateway/Health", element: <h1>Health</h1> },
  { path: "/mazatlan-gateway/Shopping", element: <h1>Shopping</h1> },
  { path: "/mazatlan-gateway/Directory", element: <h1>Shopping</h1> },
]);

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />;
      <BotonWhats />
    </div>
  );
}

export default App;
