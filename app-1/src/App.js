import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Post from "./components/Post.js";
import LOGO from "./components/Mainpage.js"
import Community from "./components/Community.js";

function App() {
  return (
    <>
      <Header/>
      <LOGO/>
      <Community/>
      <Post/>
      <Footer/>
    </>
  );
}

export default App;
