import Navbar from "@/scenes/navbar";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import Players from "@/pages/Players";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <BrowserRouter>
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Routes>
          <Route
            path="/"
            element={<HomePage setSelectedPage={setSelectedPage} />}
          />
          <Route path="/players" element={<Players />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
