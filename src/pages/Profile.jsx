import { useParams } from "react-router-dom";

function Profile() {
    const {id} = useParams()
    return ( id + "profile" );
}

export default Profile;