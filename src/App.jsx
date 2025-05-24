import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Editclass from "./pages/editclass";
import Timetable from "./pages/timetable";
import Subject from "./pages/subject";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/subject" element={<Subject/>}/>
    <Route path="/timetable" element={<Timetable/>}/>
    <Route path="/editclass" element={<Editclass/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
</>
  )
}
export default App


