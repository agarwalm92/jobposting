import BrowseJobs from "./components/BrowseJobs";
import HomeCards from "./components/HomeCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ViewAllJobs from "./components/ViewAllJobs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <BrowseJobs />
      <ViewAllJobs />
    </>
  );
}

export default App;
