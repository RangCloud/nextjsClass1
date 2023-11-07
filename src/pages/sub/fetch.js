import { useEffect } from "react";

function Fetch(){
    const [user, setUser] = userState([name:null])
    useEffect(
        ()=>{
            fetch(process.env.NEXT_PUBLIC_API_URL+'api/hello').then(
                type=>type.json()
            ).then(
                // result=>{console.log(result);}
                result=>{setUser(result)}
            )
        }
    )
    return(
        <div>
            <h1>/page/sub/about.js</h1>
            <a href='/'>page/index.js</a>
            <p>{user.name}</p>
        </div>
    )
}

export default Fetch;