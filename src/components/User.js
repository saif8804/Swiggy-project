import { useEffect, useState } from "react";


const User = (props) =>{

     const [count, setCount] = useState(0);

    useEffect(()=>{

    },[])
    

    return (
        
        <div className="user-card">
             <button onClick={()=>{
                setCount(count + 1 );
             }}>count = {count}</button>
            <h2>Name:{props.name}</h2>
            <h3>Location: {props.location}</h3>
             <h3>Contact : Mau Nath Bahanjan</h3>
        </div>
    )
}

export default User;