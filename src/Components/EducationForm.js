import { useEffect, useState } from "react"

const EducationForm=(props)=>{
    
    const [details,setDetails]=useState({school:"",qualification:"",specialization:"",yearOfPass:""})
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
      detailsTemp={school:"",qualification:"",specialization:"",yearOfPass:""}
   } 
    else{
         detailsTemp=props.details[props.index]

    }
    setDetails(detailsTemp)
    setFlag(false)
    }
    const handleSchoolChange=(e)=>{
        
        setDetails({
            ...details,...{school:e.target.value}
        })
    }
    const handleQualificationChange=(e)=>{
        setDetails({
            ...details,...{qualification:e.target.value}
        })
    }
    const handleSpecializationChange=(e)=>{
        setDetails({
            ...details,...{specialization:e.target.value}
        })
    }
    const handleYearOfPass=(e)=>{
        setDetails({
            ...details,...{yearOfPass:e.target.value}
        })
    }

   return(
       <div className="modal">
          <div className="modal-content">
              <div className="modal-body">
            School: <input type="text" name="school" id="" value={details.school} onChange={handleSchoolChange}/> <br />

            Qualification : <input type="text" name="qualification" id="" value={details.qualification} onChange={handleQualificationChange}/> <br />

            Specialization : <input type="text" name="specialization" id="" value={details.specialization} onChange={handleSpecializationChange}/> <br />

            Year Of Pass : <input type="text" name="" id="" value={details.yearOfPass} onChange={handleYearOfPass} />
              {(props.index==-1) ? <button onClick={()=>{alert("-1"); props.submitEdu(details);setFlag(true);}}>Submit</button> : <button onClick={()=>{ props.editEdu(details);setFlag(true);}}> Edit</button> }   
                <button onClick={()=>{ props.onClose();setFlag(true);}}>Cancel</button>
            
            </div>
            </div>
       </div>
   ) 


}
export default EducationForm