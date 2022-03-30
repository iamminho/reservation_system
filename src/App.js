import "./App.css";
import { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import RouteTest from "./components/RouteTest";

import AddStylelist from "./pages/AddStylelist";
import Stylelist from "./pages/Stylelist";
import Personalinfo from "./pages/Personalinfo";
import Time from "./pages/Time";
import Home from "./pages/Home";

//Components
// import MyButton from "./components/MyButtons";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <Router>
      <div className="App">
        <MyHeader companyName={"ramibeauty"} />
        {/* 라우트 안에 있는 요소들만 변경된다
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼클릭")}
          type={"positive"}
        />
        <MyButton
          text={"예약하기"}
          onClick={() => alert("예약이 완료되었습니다.")}
        /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Stylelist" element={<Stylelist />} />
          <Route path="/AddStylelist" element={<AddStylelist />} />
          <Route path="/Personalinfo" element={<Personalinfo />} />
          <Route path="/Time" element={<Time />} />
        </Routes>
        {/* <RouteTest /> */}
      </div>
    </Router>
  );
}

export default App;
