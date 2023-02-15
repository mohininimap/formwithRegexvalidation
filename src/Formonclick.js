import React,{useState} from 'react'

const Formonclick = (e) => {
 
    const [display,setDisplay]=useState(false)
const [state,setState]=useState({
    username:"",
    email:"",
    password:""
})
const handleChange=(e)=>{
setState({
    ...state,
    [e.target.name]:e.target.value

})
setDisplay(false)
}
    const hadleClick=(e)=>{
        e.preventDefault()
        setDisplay(true)
        alert("Filled data successfully ...");

        // setState({
        //     username:"",
        //     email:"",
        //     password:""
        // })
    }
  return (
    <div>
     <form>
     <input type="text" name="username" placeholder='Enter Name' onChange={handleChange} value={state.username}/>
     <input type="text" name="email" placeholder='Enter Email' onChange={handleChange} value={state.email}/>
     <input type="text" name="password" placeholder='Enter Password' onChange={handleChange} value={state.password}/>
     <button onClick={hadleClick}>Fill Data</button>
     </form>

     <div>
        {display?
        <>
        <div>{state.username}</div>
       <div>{state.email}</div>
       
        </>
        

        :""}
        
     </div>
    </div>
  )
}

export default Formonclick