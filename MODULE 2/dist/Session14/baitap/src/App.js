"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./components/Home"));
const About_1 = __importDefault(require("./components/About"));
const Contract_1 = __importDefault(require("./components/Contract"));
function App() {
    return (<div>
      <header>
        <ul>
          <li>
            <react_router_dom_1.Link to="/"> Trang chủ</react_router_dom_1.Link>
          </li>
          <li>
            <react_router_dom_1.Link to="/about"> Giới thiệu</react_router_dom_1.Link>
          </li>
          <li>
            <react_router_dom_1.Link to="/contract"> Liên hệ</react_router_dom_1.Link>
          </li>
        </ul>
      </header>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
        <react_router_dom_1.Route path="/about" element={<About_1.default />}/>
        <react_router_dom_1.Route path="/contract" element={<Contract_1.default />}/>
      </react_router_dom_1.Routes>
    </div>);
}
exports.default = App;
