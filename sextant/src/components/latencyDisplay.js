import { useEffect, useState } from "react";

function LatencyDisplay(props) {

    let [latency, setLatency] = useState("Obtaining Latency...");


    // establish client server, but only on mount
    useEffect(() => {
        var W3CWebSocket = require('websocket').w3cwebsocket;

        var client = new W3CWebSocket('ws://localhost:55455/');

        client.onerror = function () {
            setLatency("Failed to Obtain Latency");
        };

        client.onmessage = function (e) {
            setLatency((Date.now() - e.data) + " ms");
        };
    }, []);



    return (
        <p className="text-xl">
            {latency}
        </p>
    );
}

export default LatencyDisplay;
