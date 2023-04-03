import { useState } from "react";
// import { useAuth } from "../../config/FirebaseConfig";
// import { createUserWithEmailAndPassword } from 'firebase/auth'

export function Auth() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = async () => {
        // await createUserWithEmailAndPassword(useAuth(), email, password)
    }

    return (
        <div>
            <label className="form-label">Email address</label>
            <input className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <label className="form-label mt-4">Password</label>
            <input className="form-control" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <div className="buttonWrapper">
                <button className="btn btn-primary" onClick={signIn}>Sign In</button>
            </div>
        </div>
    )
}