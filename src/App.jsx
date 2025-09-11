import { Route, Routes } from "react-router-dom";
import Adminlogin from "./Admin/Adminlogin";
import Userlogin from "./User/Userlogin";
import Landingpage from "./Tour/Landingpage";
import Newregister from "./User/Newregister";
import Routing from "./Tour/Routing";
import Userlanding from "./User/Userlanding";
import Book from "./User/Book";
import Mybook from "./User/Mybook";
import Bookplace from "./User/Bookplace";

function App() {
  const route = [
    { path: "/", Component: Landingpage },
    { path: "/adminlogin", Component: Adminlogin },
    { path: "/userlogin", Component: Userlogin },
    { path: "/register", Component: Newregister },
    { path: "/userpanel", Component: Userlanding },
    { path: "/homepage", Component: Userlanding },
    { path: "/bookpack", Component: Book },
    { path: "/mybooking", Component: Mybook },
    { path: "/twodetail", Component: Bookplace }
  ];

  return (
    <Routes>
      {route.map((data, index) => (
        <Route key={index} path={data.path} element={<data.Component />} />
      ))}
      {/* Fallback (for any unknown route) */}
      <Route path="*" element={<Routing />} />
    </Routes>
  );
}

export default App;
