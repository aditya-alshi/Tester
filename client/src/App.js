import React from 'react';

export default function App(){

    const [message, setMessage] = React.useState("");

    React.useEffect(()=>{
        async function getData(){
            try{
                const response = await fetch('http://localhost:8000/pani');
                const convRes = await response.text();
                console.log(convRes);
                setMessage(convRes);
            }catch(err){
                console.log(err);
            }
        }
        getData();
    }, [])
    
    return(
        <div className="main--wrapper">
            {message}
        </div>
    )
}