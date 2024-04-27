import BrowseJobs from "./components/BrowseJobs";
import HomeCards from "./components/HomeCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <BrowseJobs />
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
}

export default App;
