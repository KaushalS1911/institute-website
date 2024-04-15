import "./App.css";
import "./assets/css/style/style.css";
import "./assets/css/cutsom/custom.css";
import "./assets/css/default/default.css";
import "../src/assets/css/DeveloperCourse.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import GraphicDesign from "./pages/Course/DesignCourse/GraphicDesign";
import UXDesign from "./pages/Course/DesignCourse/UI-UXDesign";
import WebDesign from "./pages/Course/DesignCourse/WebDesign";
import Node from "./pages/Course/TrendyCourse/Node";
import Angular from "./pages/Course/TrendyCourse/Angular ";
import Reactjs from "./pages/Course/TrendyCourse/Reactjs";
import Python from "./pages/Course/TrendyCourse/Python";
import AdobeXD from "./pages/Course/ShortTearmCourse/AdobeXD";
import Adobellustrator from "./pages/Course/ShortTearmCourse/Adobellustrator";
import BasicComputerCourse from "./pages/Course/ShortTearmCourse/BasicComputerCourse";
import PhotoShop from "./pages/Course/ShortTearmCourse/PhotoShop";
import CorelDraw from "./pages/Course/ShortTearmCourse/CorelDraw";
import Cprogramming from "./pages/Course/ProgrammingIT/Cprogramming";
import CPlusProgramming from "./pages/Course/ProgrammingIT/CPlusProgramming";
import JavaProgramming from "./pages/Course/ProgrammingIT/JavaProgramming";
import Ios from "./pages/Course/ProgrammingIT/Ios";
import PHP from "./pages/Course/ProgrammingIT/PHP";
import Laravel from "./pages/Course/ProgrammingIT/Laravel";
import Wordpress from "./pages/Course/ProgrammingIT/Wordpress";
import Contact from "./pages/Contact/Contact";
import Androiddevelopment from "./pages/Course/DevelopmentCourse/Androiddevelopment";
import AspDotNetDevelopment from "./pages/Course/DevelopmentCourse/AspDotNetDevelopment";
import FlutterDevelopment from "./pages/Course/DevelopmentCourse/FlutterDevelopment";
import FullstrackDevelopmentCourse from "./pages/Course/DevelopmentCourse/FullstrackDevelopmentCourse";
import GameDevelopment from "./pages/Course/DevelopmentCourse/GameDevelopment";
import ReactNative from "./pages/Course/DevelopmentCourse/ReactNative";
import WebDevelopment from "./pages/Course/DevelopmentCourse/WebDevelopment";
import Blog from "./pages/Blog/Blog";
import Footer from "./pages/Globle/Footer";
import Course from "./pages/Course/Course";
import SingleBlog from "./pages/Blog/SingleBlog";
import { Helmet } from "react-helmet";
import fullstackdevelopment from '../src/assets/images/Course/Fullstack_development.png'
import Header from "./pages/Globle/Header";


function App() {
  const location = useLocation();
  const { pathname } = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("beforeunload", saveScrollPosition);

    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
    }

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, [pathname, scrollPosition]);

  const saveScrollPosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Helmet>
        <title>
          Fullstack Dveloper Course | Web Development Course in Surat | JBS
        </title>
        <meta
          name="description"
          content="JBS IT INSTITUTE offers comprehensive courses in coding, web development,UI/UX Design,Flutter Development and more. Join us to kickstart your career in the tech industry!"
        />
        <meta
          name="keywords"
          content="It Institute,Jbs It Institute,Institute,It,Jbs It"
        />
        <meta name="author" content="Monil Kakadiya" />
        <meta
          property="og:title"
          content="Fullstack Dveloper Course | Web Development Course in Surat | JBS"
        />
        <meta
          property="og:description"
          content="JBS IT INSTITUTE offers comprehensive courses in coding, web development,UI/UX Design,Flutter Development and more. Join us to kickstart your career in the tech industry!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JBS" />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://jbsitinstitute.com/" />
        <meta
          property="og:image"
          content={process.env.PUBLIC_URL + fullstackdevelopment}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fullstack Dveloper Course | Web Development Course in Surat | JBS"
        />
        <meta
          name="twitter:description"
          content="JBS IT INSTITUTE offers comprehensive courses in coding, web development,UI/UX Design,Flutter Development and more. Join us to kickstart your career in the tech industry!"
        />
        <meta name="twitter:image" content="https://example.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={process.env.PUBLIC_URL + fullstackdevelopment}
        />
      </Helmet>
      <div id="header">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/contact" element={<Contact />} />

        {/* COURSE */}
        <Route path="/flutterDevelopment" element={<FlutterDevelopment />} />
        <Route path="/androidDevelopment" element={<Androiddevelopment />} />
        <Route
          path="/fullstackdevelopment"
          element={<FullstrackDevelopmentCourse />}
        />
        <Route path="/gameDevelopment" element={<GameDevelopment />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/reactnative" element={<ReactNative />} />
        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/ui-uxdesign" element={<UXDesign />} />
        <Route path="/graphic" element={<GraphicDesign />} />
        <Route path="/adobellustrator" element={<Adobellustrator />} />
        <Route path="/adobeXD" element={<AdobeXD />} />
        <Route
          path="/basic-computer-course"
          element={<BasicComputerCourse />}
        />
        <Route path="/photoshop" element={<PhotoShop />} />
        <Route path="/coreldraw" element={<CorelDraw />} />
        <Route path="/Cprogramming" element={<Cprogramming />} />
        <Route path="/C++programming" element={<CPlusProgramming />} />
        <Route path="/javaprogramming" element={<JavaProgramming />} />
        <Route path="/ios" element={<Ios />} />
        <Route path="/php" element={<PHP />} />
        <Route path="/laravel" element={<Laravel />} />
        <Route path="/wordpress" element={<Wordpress />} />
        <Route path="/nodejs" element={<Node />} />
        <Route path="/angular" element={<Angular />} />
        <Route path="/reactjs" element={<Reactjs />} />
        <Route path="/python" element={<Python />} />
        <Route
          path="/aspdotnetdevelopment"
          element={<AspDotNetDevelopment />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
