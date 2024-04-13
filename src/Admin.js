import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FlutterDevelopment from './pages/components/DevelopmentCourse/FlutterDevelopment';
import Androiddevelopment from './pages/components/DevelopmentCourse/Androiddevelopment';
import GameDevelopment from './pages/components/DevelopmentCourse/GameDevelopment';
import FullstrackDevelopmentCourse from './pages/components/DevelopmentCourse/FullstrackDevelopmentCourse';
import WebDevelopment from './pages/components/DevelopmentCourse/WebDevelopment';
import ReactNative from './pages/components/DevelopmentCourse/ReactNative';
import '../src/pages/components/DevelopmentCourse/DeveloperCourse.css';
import WebDesign from './pages/components/DesignCourse/WebDesign';
import UXDesign from './pages/components/DesignCourse/UI-UXDesign';
import GraphicDesign from './pages/components/DesignCourse/GraphicDesign';
import Adobellustrator from './pages/components/ShortTearmCourse/Adobellustrator';
import AdobeXD from './pages/components/ShortTearmCourse/AdobeXD';
import BasicComputerCourse from './pages/components/ShortTearmCourse/BasicComputerCourse';
import PhotoShop from './pages/components/ShortTearmCourse/PhotoShop';
import Cprogramming from './pages/components/ProgrammingIT/Cprogramming';
import CPlusProgramming from './pages/components/ProgrammingIT/CPlusProgramming';
import JavaProgramming from './pages/components/ProgrammingIT/JavaProgramming';
import Ios from './pages/components/ProgrammingIT/Ios';
import PHP from './pages/components/ProgrammingIT/PHP';
import Laravel from './pages/components/ProgrammingIT/Laravel';
import Wordpress from './pages/components/ProgrammingIT/Wordpress';
import Node from './pages/components/TrendyCourse/Node';
import Angular from './pages/components/TrendyCourse/Angular ';
import Reactjs from './pages/components/TrendyCourse/Reactjs';
import Python from './pages/components/TrendyCourse/Python';
import AspDotNetDevelopment from './pages/components/DevelopmentCourse/AspDotNetDevelopment';
import Course from './pages/Course';
import CorelDraw from './pages/components/ShortTearmCourse/CorelDraw';


const Admin = () => {
  const { pathname } = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('beforeunload', saveScrollPosition);

    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
    }

    // Cleanup the event listener
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, [pathname, scrollPosition]);

  const saveScrollPosition = () => {
    setScrollPosition(window.scrollY);
  };

  return (
    <div className='webUserAdmin'>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/course" element={<Course />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/flutterDevelopment" element={<FlutterDevelopment />} />
        <Route path="/androidDevelopment" element={<Androiddevelopment />} />
        <Route path="/gameDevelopment" element={<GameDevelopment />} />
        <Route path="/fullstackdevelopment" element={<FullstrackDevelopmentCourse />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/reactnative" element={<ReactNative />} />
        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/ui-uxdesign" element={<UXDesign />} />
        <Route path="/graphic" element={<GraphicDesign />} />
        <Route path="/adobellustrator" element={<Adobellustrator/>} />
        <Route path="/adobeXD" element={<AdobeXD/>} />
        <Route path="/basic-computer-course" element={<BasicComputerCourse/>} />
        <Route path="/photoshop" element={<PhotoShop/>} />
        <Route path="/coreldraw" element={<CorelDraw/>} />
        <Route path="/Cprogramming" element={<Cprogramming/>} />
        <Route path="/C++programming" element={<CPlusProgramming/>} />
        <Route path="/javaprogramming" element={<JavaProgramming/>} />
        <Route path="/ios" element={<Ios/>} />
        <Route path="/php" element={<PHP/>} />
        <Route path="/laravel" element={<Laravel/>} />
        <Route path="/wordpress" element={<Wordpress/>} />
        <Route path="/nodejs" element={<Node/>} />
        <Route path="/angular" element={<Angular/>} />
        <Route path="/reactjs" element={<Reactjs/>} />
        <Route path="/python" element={<Python/>} />
        <Route path="/aspdotnetdevelopment" element={<AspDotNetDevelopment/>} />
      </Routes>
    </div>
  );
}

export default Admin;