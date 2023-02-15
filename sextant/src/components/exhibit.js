function Exhibit(props) {
    return (
        <div className="p-5 border-2 rounded-lg shadow-md shadow-arylide border-arylide w-1/2">
            <p className="text-2xl text-copper pb-2">{props.heading}</p>
            <ul className="ml-5">
                {Object.keys(props.comps).map((comp) => {
                    return <li className="">
                        <span className="text-van-dyke">{comp}: </span>
                        <span className="text-hunyadi">{props.comps[comp]}</span>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Exhibit;
