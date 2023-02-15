import React, { useEffect, useState } from "react";
import Exhibit from "../components/exhibit";
import Header from "../components/header";

function App() {
  let [comps1, setComps1] = useState({});
  let [comps2, setComps2] = useState({});

  const cloneObject = (obj) => {
    let out = {};
    for (let key in obj) {
      out[key] = obj[key];
    }
    return out;
  }


  // note: the API for getting the ipv4 doesn't seem to be responding right now, so only ipv6 will be obtained
  useEffect(() => {
    // get ipv6
    fetch("https://api64.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        let temp = cloneObject(comps1);
        temp.ipv6 = data.ip;
        setComps1(temp);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="grid w-full p-5 gap-5 grid-cols-1 place-items-center">
        <Exhibit heading={"Example Heading"} comps={comps1} />
        <Exhibit heading={"Example Heading"} comps={comps2} />
      </div>
    </div>
  );
}

export default App;
