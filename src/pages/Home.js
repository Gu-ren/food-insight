import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div class="wrapper" loading={loading}>
          <div class="circle1"></div>
          <div class="circle1"></div>
          <div class="circle1"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
        </div>
      ) : (
        <>
          <Nav />
          <Hero />
        </>
      )}
    </div>
  );
};

export default Home;
