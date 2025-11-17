import { useState } from "react";
export default function Login(){
    const [email,setEmail]=useState("")
    const [password, setPassword] = useState("");
    return(
        <div>
            <h1>Login PAge</h1>
            <div>
                
                <form action="">
                    <input type="email" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    /> 
                    <input type="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Enter your password"
                    /> 
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}