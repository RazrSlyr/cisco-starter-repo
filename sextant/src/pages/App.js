import React, { useEffect, useState } from "react";
import AddressDisplay from "../components/addressDisplay";
import Exhibit from "../components/exhibit";
import Header from "../components/header";
import LatencyDisplay from "../components/latencyDisplay";

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

  return (
    <div>
      <Header/>
      <div className="grid w-full p-5 gap-5 grid-cols-2 place-items-center">
        <Exhibit heading={"IPV6"}>
          <AddressDisplay url="https://api64.ipify.org?format=json"/>
        </Exhibit>
        <Exhibit heading={"IPV4"}>
          <AddressDisplay url="https://api.ipify.org?format=json"/>
        </Exhibit>
        <Exhibit heading={"Latency"}>
          <LatencyDisplay/>
        </Exhibit>
        
      </div>
    </div>
  );
}

export default App;
