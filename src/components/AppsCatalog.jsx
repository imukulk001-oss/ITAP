import React, { useRef } from "react";
import "./AppsCatalog.css";

const apps = [
  {
    id: 1,
    title: "Legal Case Management System",
    desc: "Trial run of Legal Case Management System is Active",
    img: "/images/app1-image.png", // ✅ public image path
  },
  { id: 2, title: "App 2", desc: "Desc 2", img: "/images/app2-image.png" },
  { id: 3, title: "App 3", desc: "Desc 3", img: "/images/app3-image.png" },
  { id: 4, title: "App 4", desc: "Desc 4", img: "/images/app4-image.png" },
  { id: 5, title: "App 5", desc: "Desc 5", img: "/images/app4-image.png" },
  { id: 6, title: "App 6", desc: "Desc 6", img: "/images/app4-image.png" },
];

const AppsCatalog = () => {
  const scrollRef = useRef(null);

  // // Auto-scroll logic
  // useEffect(() => {
  //   const slider = scrollRef.current;
  //   const scrollStep = 320;
  //   const delay = 4000; // 4 seconds
  //   const autoScroll = setInterval(() => {
  //     if (slider) {
  //       if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
  //         slider.scrollLeft = 0; // Reset to start
  //       } else {
  //         slider.scrollLeft += scrollStep;
  //       }
  //     }
  //   }, delay);

  //   return () => clearInterval(autoScroll);
  // }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section id="apps-catalog" className="apps-section">
      {/* ⭐ Hero Heading Added Here */}
      <h1 className="hero-title">CSIR-ITApps Portal</h1>
      <p className="hero-description">
        CSIR - ITApps portal is designed to provide various
        software applications<br />
        for different purposes / Sections / Divisions /
        Directorates of CSIR users
      </p>
      <br />

      <h2 className="apps-title">Apps Catalog</h2>

      <div className="apps-slider-container">
        <button className="arrow left" onClick={scrollLeft}>
          &#10094;
        </button>

        <div className="apps-slider" ref={scrollRef}>
          {apps.map((app) => (
            <div className="app-card" key={app.id}>
              <img src={app.img} alt={app.title} className="app-image" />
              <div className="app-info">
                <h3>{app.title}</h3>
                <p>{app.desc}</p>
                <div className="app-links">
                  {/* ✅ Replace invalid href with button-style link */}
                  <button
                    className="read-more-btn"
                    onClick={() => alert(`Read more about ${app.title}`)}
                  >
                    Read More →
                  </button>
                  <button
                    className="open-btn"
                    onClick={() => alert(`Opening ${app.title}`)}
                  >
                    Open
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default AppsCatalog;


