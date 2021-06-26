import { useState } from "react"

const SkillForm=(props)=>{
    const [skill,setSkill]=useState("")
    const handleSkillChange=(e)=>{
        
        setSkill(e.target.value)
    }

    if(!props.show){
        return null
    }
    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-body">
                Skill : <input type="text" name="" id="" onChange={handleSkillChange} /> <br />

                <button onClick={()=>{props.addSkill(skill)}}>Submit</button> <button onClick={props.onClose}>Cancel</button>
                </div>
            </div>
           </div>
    )
}
export default SkillForm