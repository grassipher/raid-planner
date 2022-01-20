import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function Encounter({props}) {
    const [raidName, setRaidName] = useState("");
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`/fights/${id}`).then(res => res.json()).then(data => {
            setRaidName(data.name);
        });
    }, []);
    return <li>{raidName}</li>
}

export default Encounter;