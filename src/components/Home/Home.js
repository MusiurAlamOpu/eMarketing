import React from "react";
import Footer from "../Shared/Footer/Footer";
import rocketLaunch from "./startingMax.png";
import working from "./WorkingLight.png";
import review from "./Review.jpg";
import fakeData from "./fakedata.json";
import fakeReview from "./fakeReview.json";
import fakeProjects from './fakeProjects.json';
import "./Home.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Servieses from "./Servieses/Servieses";
import Reveiws from "./Review/Reveiws";
import ProjectCard from "./Projects/ProjectCard";
const Home = () => {
  // #e3f2fd lightblue
  return (
    <section id="body">
      <main>
        {/* banner Section */}
        <section>
          <div id="bannerContainer" className="container">
            <div
              className="bannerDivs"
              style={{
                width: "100%",
                padding: "2% 5%",
                height: "100%",
              }}
            >
              <div>
                <p
                  id="bannerParagraph"
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "30px",
                    fontWeight: "600",
                  }}
                >
                  We give rocket to your business and you decide where to fly
                </p>
                <p>
                  We build digital product, from idea to design, development to
                  marketing & PR to post launch campaign and support
                </p>
              </div>
              <Button
                style={{
                  border: "1px solid skyblue",
                  borderRadius: "30px",
                  margin: "10px 10px",
                }}
                variant="contained"
                color="primary"
              >
                GET STARTED
              </Button>
              <Button
                style={{
                  border: "1px solid blue",
                  borderRadius: "30px",
                  margin: "10px 2%",
                }}
                variant="contained"
                color="default"
              >
                LEARN MORE
              </Button>
            </div>
            <div
              className="bannerDivs"
              style={{
                width: "100%",
                padding: "0% 2%",
                height: "100%",
              }}
            >
              <img style={{ width: "100%" }} src={rocketLaunch} alt=""></img>
            </div>
          </div>
        </section>
        {/* servies */}
        <section className="container">
          <div
            id="sectionSectionDiv"
          >
            <div
            className="serviesDivs"
             style={{ width: "96%", padding: "0% 2%", height: "100%" }}>
              <small>Modern digital agency</small>
              <h2
                style={{
                  fontSize: "40px",
                  fontWeight: "600px",
                  fontFamily: "roboto",
                }}
              >
                A transformative agency partner with creative spark.
              </h2>
              <p>
                We look more like a modern management consultancy solving major
                problems for businesses. From marketing strategy and web
                experience to lead generation—even culture transformation.
              </p>
              <Link>Know more about us...</Link>
              <img style={{ width: "100%" }} src={working} alt=""></img>
            </div>
            <div
              className="serviesDivs"
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {fakeData.map((servies) => {
                return <Servieses servies={servies}></Servieses>;
              })}
            </div>
          </div>
        </section>
        {/* projects 3 */}
        <section style={{margin: '3% 0%'}}>
          <div class="container" style={{textAlign: 'center'}}>
            <small style={{color: 'grey'}}>Our Works</small>
            <h2 style={{
                  fontSize: "40px",
                  fontWeight: "600px",
                  fontFamily: "roboto",
                }}>Ongoing Projects</h2>
            <div style={{display: 'flex',
            flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
              {
                fakeProjects.map(project => {
                  return (
                    <ProjectCard project={project}></ProjectCard>
                  );
                })
              }
            </div>
          </div>
        </section>
        {/* review 4 */}
        <section style={{paddingBottom: "3%"}} className="container">
          <div
            id="reviewSectionDiv"
          >
            <div className="reviewDivs" style={{ width: "100%", padding: "0% 2%", height: "96%" }}>
              <small>What our client say</small>
              <h2
                style={{
                  fontSize: "40px",
                  fontWeight: "600px",
                  fontFamily: "roboto",
                }}
              >
                User Testimonial
              </h2>
              <p>
                Curabitur blandit tempus porttitor. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Etiam porta sem
                malesuada magna mollis euismod.
              </p>
              <Link>Know more about us...</Link>
              <img style={{ width: "100%" }} src={review} alt=""></img>
            </div>
            <div
            className="reviewDivs"
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {fakeReview.map((user) => {
                return <Reveiws user={user}></Reveiws>;
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default Home;
