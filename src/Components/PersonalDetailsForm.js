import { useState } from "react"

const PersonalDetailsForm=(props)=>{
    const [details,setDetails]=useState({name:"",designation:"",email:"",mobile:"",address:""})

    if(!props.personalShow)
        {return null}
   const handleNameChange=(e)=>{
    setDetails({
        ...details,...{name:e.target.value}
    })
    
    }
    const handleDesignationChange=(e)=>{
        setDetails({
            ...details,...{designation:e.target.value}
        })
    }

const handleEmailChange=(e)=>{
    setDetails({
        ...details,...{email:e.target.value}
    })
    
    }
const handleMobileChange=(e)=>{
    setDetails({
        ...details,...{mobile:e.target.value}
    })
    
    
    }
const handleAddressChange=(e)=>{
    setDetails({
        ...details,...{address:e.target.value}
    })
}    
    return(
        <div className="modal">
          <div className="modal-content">
              <div className="modal-body">
            Name: <input type="text" name="" id="" value={details.name} onChange={handleNameChange}/> <br />
            Designation : <input type="text" name="" value={details.designation} onChange={handleDesignationChange} id="" />
            Email : <input type="text" name="" id="" value={details.email} onChange={handleEmailChange}/> <br />

            Mobile : <input type="text" name="" id="" value={details.mobile} onChange={handleMobileChange}/> <br />
             
            Address : <input type="text" name="" id="" value={details.address} onChange={handleAddressChange} />
            
               <button onClick={()=>{props.submitPersonalDetails(details)}}>Submit</button> 
                <button onClick={()=>{ props.onClose()}}>Cancel</button>
            
            </div>
            </div>
       </div>
    )
}
export default PersonalDetailsForm