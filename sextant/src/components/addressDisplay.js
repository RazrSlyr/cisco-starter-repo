import { useEffect, useState } from "react";

function AddressDisplay(props) {

    const [ip, setIp] = useState("Obtaining Address...");

    useEffect(() => {
        let promise = fetch(props.url);
        promise
            .then((response) => response.json())
            .then((data) => {
                setIp(data.ip);
            });
        promise.catch((error) => {
            console.log(error);
            setIp("Failed to Obtain Address");
        });

    }, []);
    
    return (
        <p className="text-xl">
            {ip}
        </p>
    );
}

export default AddressDisplay;
