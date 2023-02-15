function Exhibit(props) {
    return (
        <div className="p-5 border-2 rounded-lg shadow-md shadow-arylide border-arylide w-full">
            <p className="text-2xl text-copper pb-2">{props.heading}</p>
            <div className="ml-5 text-van-dyke">
                {props.children}
            </div>
        </div>
    );
}

export default Exhibit;
