import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Portfolio.css";
import Header from "../global/Header";
import PortfolioItem from './PortfolioItem';
import projects from "./projects";
const Portfolio = () => {
    const [value, setValue] = useState("all");
    const breakPoint = useMediaQuery("(min-width:600px)");
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const web = projects.filter(project => {
      return project.category === "Web design"
    })
    const app = projects.filter((project) => {
      return project.category === "App";
    });
  return (
    <div>
      <Header section="portfolio" />
      <section id="portfolio" className="section portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <Tabs
                id="portfolio-flters"
                indicatorColor=""
                value={value}
                onChange={handleChange}
                centered
                TabIndicatorProps={{
                  sx: { display: breakPoint ? "block" : "none" },
                }}
                sx={{
                  m: "25px",
                  "& .MuiTabs-flexContainer": {
                    flexWrap: "wrap",
                  },
                }}
              >
                <Tab className="tab" label="ALL" value="all" />
                <Tab className="tab" label="APP" value="app" />
                <Tab className="tab" label="WEB" value="web" />
              </Tabs>
            </div>
          </div>

          <div className="row portfolio-container">
            {value === "all" &&
              projects.map((item) => (
                <PortfolioItem item={item} key={item.name} />
              ))}
            {value === "web" &&
              web.map((item) => <PortfolioItem item={item} key={item.name} />)}
            {value === "app" &&
              app.map((item) => <PortfolioItem item={item} key={item.name} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
