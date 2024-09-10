// import React from 'react'
import Home from "./Home";
import Book from "./Book";
import Services from "./Services";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import Products from "./Products";
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: "#212529",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffff",
      gradient:
        "linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%)",

      shadow:
        "rgba(0,0,0,0.2) 0px 1px 3px 0px , rgba(27,31,35,0.15) 0px 0px 0px 1px;",

      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  
const App = () => {
  return (
   

    <ThemeProvider theme={theme}> 
       <BrowserRouter>
    <Header ></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/book" element={<Book></Book>}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </ThemeProvider>
   
  )
}

export default App
