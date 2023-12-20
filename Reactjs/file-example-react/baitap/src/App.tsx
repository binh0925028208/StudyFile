import { useState } from "react";
import "./App.css";

export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  phone: number;
  status: boolean;
}

function App() {
  return <div className="App"></div>;
}

export default App;
