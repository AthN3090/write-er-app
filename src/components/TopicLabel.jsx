import { Link } from "react-router-dom";

function TopicLabel({text}) {
    return ( 
    <span className="px-4 py-2 rounded-xl bg-gray-700 text-white">
        <Link to={`/filter/${text}`}> {text} </Link>
    </span> );
}

export default TopicLabel;