/* eslint-disable no-unused-vars */
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import BrowseJobs from "./components/BrowseJobs";
import HomeCards from "./components/HomeCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ViewAllJobs from "./components/ViewAllJobs";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>MYApp</h1>} />)
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Navbar />
      <Hero />
      <HomeCards />
      <BrowseJobs />
      <ViewAllJobs /> */}
    </>
  );
}

export default App;
