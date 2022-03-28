import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RouteTest from "./components/RouteTest";

import Stylists from "./pages/Stylists";
import Personalinfo from "./pages/Personalinfo";
import Time from "./pages/Time";
import Home from "./pages/Home";

//Components
import MyButton from "./components/MyButtons";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>App.js</h2>
        {/* 라우트 안에 있는 요소들만 변경된다 */}
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼클릭")}
          type={"positive"}
        />
        <MyButton
          text={"예약하기"}
          onClick={() => alert("예약이 완료되었습니다.")}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Stylists/:id" element={<Stylists />} />
          <Route path="/Personalinfo" element={<Personalinfo />} />
          <Route path="/Time" element={<Time />} />
        </Routes>
        <RouteTest />
      </div>
    </Router>
  );
}

export default App;
