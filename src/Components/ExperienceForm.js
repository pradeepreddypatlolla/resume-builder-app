import { useState,useEffect } from "react"

const ExperienceForm=(props)=>{

    const [details,setDetails]=useState({company:"",startDate:"",endDate:"",role:"",description:"",location:""})
    const [flag,setFlag]=useState(true)
    useEffect(()=>{
        setFlag(false)
    },[details])

    
    if(!props.show){
        return null
    }
    else if(flag){
        let detailsTemp
   if(props.index==-1 ){
      detailsTemp={company:"",startDate:"",endDate:"",role:"",description:"",location:""}
   } 
    else{
         detailsTemp=props.details[props.index]

    }
    setDetails(detailsTemp)
    setFlag(false)
    }
    const handleCompanyChange=(e)=>{
        setDetails({
            ...details,...{company:e.target.value}
        })
    }
    const handleStartDateChange=(e)=>{
        setDetails({
            ...details,...{startDate:e.target.value}
        })
    }
    const handleEndDateChange=(e)=>{
        setDetails({
            ...details,...{endDate:e.target.value}
        })
    }
    const handleRoleChange=(e)=>{
        setDetails({
            ...details,...{role:e.target.value}
        })
    }

    const handleDescription=(e)=>{
        setDetails({
            ...details,...{description:e.target.value}
        })
    }  
    const handleLocationChange=(e)=>{
        setDetails({
            ...details,...{location:e.target.value}
        })
    }

    return(
        <div className="modal"> 
            <div className="modal-content">
                <div className="modal-body">
            Company : <input type="text" name="" id="" value={details.company} onChange={handleCompanyChange} /> <br />
            Start Date : <input type="date" name="" id="" value={details.startDate} onChange={handleStartDateChange} /> <br />
            End Date : <input type="date" name="" id="" value={details.endDate} onChange={handleEndDateChange} /> <br />
            Role : <input type="text" name="" id="" value={details.role} onChange={handleRoleChange} /> <br />
            Description : <textarea name="" id="" value={details.description} cols="30" rows="10" onChange={handleDescription}></textarea> <br />
            Location : <input type="text" name="" id="" value={details.location} onChange={handleLocationChange} /> <br />
            {(props.index==-1) ? <button onClick={()=>{alert("-1"); props.submitExp(details);setFlag(true);}}>Submit</button> : <button onClick={()=>{ props.editExp(details);setFlag(true);}}> Edit</button> }   
                <button onClick={()=>{ props.onClose();setFlag(true);}}>Cancel</button>
            
                </div>
            </div>
        </div>
    )

}
export default ExperienceForm