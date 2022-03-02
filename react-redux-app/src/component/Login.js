import React, {useState} from 'react';

export default function Login ({login}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        login({email, password});
        // setEmail(""); setPassword("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='email' value={email} onChange={e=>setEmail(e.target.value)} placeholder={'Email Your'}/>
            <input type='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder={'Password Your'}/>
            <button>Login</button>
        </form>
    )
}
// https://codersx-swagger.glitch.me/api-docs/#/todos