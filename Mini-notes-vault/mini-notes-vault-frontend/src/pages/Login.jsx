import { useState } from "react";
export default function Login(){
    const [email,setEmail]=useState("")
    const [password, setPassword] = useState("");
    function handleLogin(e) {
  e.preventDefault();  // stop page reload

  console.log("Email:", email);
  console.log("Password:", password);
}
    return(
        <div>
            <h1>Login PAge</h1>
            <div>
                
                <form onSubmit={handleLogin}>
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