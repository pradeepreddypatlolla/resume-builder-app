import { createElement, useEffect, useState } from "react"
import React from "react"
import ReactDOM from 'react-dom'
import EducationForm from "./EducationForm"
import EducationDiv from "./EducationDiv"
import ExperienceForm from "./ExperienceForm"
import ExperienceDiv from "./ExperienceDiv"
import PersonalDetailsForm from "./PersonalDetailsForm"
import PersonalDetailsDiv from "./PersonalDetailsDiv"
import Template1 from "../Templates/Template1"
import Template2 from "../Templates/Template2"
import SkillForm from "./SkillForm"
import SkillDiv from "./SkillDiv"

const ResumeForm=()=>{
    const [headerDetails,setHeaderDetails]=useState({name:"",email:"",mobile:""})
    const [personalDetails,setPersonalDetails]=useState({name:"",designation:"",email:"",mobile:"",address:""})
    const [summary,setSummary]=useState("Dynamic and creative software developer with over 5 years of experience in producing robust code for high-volume companies. Eager to support the dev team at CDE Inc. with top-notch coding skills. In previous roles, doubled code-efficiency of ABC Inc., and increased customer retention by 30% among others.")
    const [personalShow,setPersonalShow]=useState(false)
    const [isPerDetailsAdded,setIsPerDetailsAdded]=useState(false)
    const [educationDetails,setEducationDetails]=useState([])
    const [eduShow,setEduShow]=useState(false)
    const [eduIndex,setEduIndex]=useState(-1)
    const [experienceDetails,setExperienceDetails]=useState([])
    const [expShow,setExpShow]=useState(false)
    const [expIndex,setExpIndex]=useState(-1)

    const [skills,setSkills]=useState([])
    const [showSkill,setShowSkill]=useState(false)
    const [projects,setProjects]=useState([])
    const [flag,setFlag]=useState(false)
    
   
//Personal Details Functions

    const submitPersonalDetails=(data)=>{
        setPersonalShow(false)
        setIsPerDetailsAdded(true)
        setPersonalDetails(data)
        alert(JSON.stringify(personalDetails))
    }

    // Education Function -------------------------------------------------------------------------
    
    const submitEdu=(data)=>{
        setEduShow(false)
            let eduTemp=educationDetails
            eduTemp.push(data)
            setEducationDetails(eduTemp)
            alert(JSON.stringify(educationDetails))
            
            
    }
    const editEdu=(details)=>{
        let detailsTemp=educationDetails
        alert(detailsTemp)
        detailsTemp[eduIndex]=details;
        setEducationDetails(detailsTemp)
        setEduShow(false)
        
    }
    const addEducation=()=>{
        setEduShow(true);
        setEduIndex(-1)
        
    }

    const editEducation=(localIndex)=>{
        alert("hello")
        setEduIndex(localIndex)
        setEduShow(true);
    }
    const delEducation=(localIndex)=>{
        setEduIndex(localIndex) // Just to force change the state
        let detailsTemp=educationDetails
        detailsTemp.splice(localIndex,1)
        setEducationDetails(detailsTemp)
        alert(JSON.stringify(educationDetails))
    }

    //Experience Functions -------------------------------------------------------------------------
    const submitExp=(data)=>{
        setExpShow(false)
            let expTemp=experienceDetails
            expTemp.push(data)
            setExperienceDetails(expTemp)
            alert(JSON.stringify(experienceDetails))
            
            
    }
    const editExp=(details)=>{
        let detailsTemp=experienceDetails
        alert(detailsTemp)
        detailsTemp[expIndex]=details;
        setExperienceDetails(detailsTemp)
        setExpShow(false)
        
    }
    const addExperience=()=>{
        setExpShow(true);
        setExpIndex(-1)
        
    }

    const editExperience=(localIndex)=>{
        alert("hello")
        setExpIndex(localIndex)
        setExpShow(true);
    }
    const delExperience=(localIndex)=>{
        setExpIndex(localIndex) // Just to force change the state
        let detailsTemp=experienceDetails
        detailsTemp.splice(localIndex,1)
        setExperienceDetails(detailsTemp)
        alert(JSON.stringify(experienceDetails))
    }

    //----------------------------------------------------------------------------------------------
//Skills Functions

    
    const addSkill=(skill)=>{
        setShowSkill(false)
        setSkills([...skills,skill])
        alert(skills)
    }

    const deleteSkill=(localIndex)=>{
        let skillsTemp=skills
        setFlag(!flag)
        skillsTemp.splice(localIndex,1)
       // alert(JSON.stringify(skillsTemp))
        setSkills(skillsTemp)
        alert(skills)
        alert(skills.length)
    }

    // Switch Template

    const switchTemplate=(templateId)=>{
        switch (templateId) {
            case 1:
                return  <Template1 templateId={"1"} personalDetails={personalDetails} educationDetails={educationDetails} experienceDetails={experienceDetails} skills={skills} summary={summary} />
                break;
            case 2:
                return  <Template2 templateId={"2"} personalDetails={personalDetails} educationDetails={educationDetails} experienceDetails={experienceDetails} skills={skills} summary={summary} />
                break;
            default:
                break;
        }
    }

    


    return(
        <div className="mainDiv">
        <div className="resumeForm">
        {!isPerDetailsAdded?<>Personal Details  <button className="icon" onClick={()=>setPersonalShow(true)}><i class="fa fa-plus"></i> </button> </>:
       <>Personal Details <button className="icon" onClick={()=>setPersonalShow(true)}><i class="fa fa-edit"></i> </button> </>}
            <PersonalDetailsForm details={personalDetails} personalShow={personalShow} onClose={()=>{setPersonalShow(false)}} submitPersonalDetails={submitPersonalDetails} />
            
          {isPerDetailsAdded?<PersonalDetailsDiv details={personalDetails} editPersonalDetails={()=>{setPersonalShow(true)}} /> :""}
            <br />
            Education <button className="icon" onClick={addEducation}><i class="fa fa-plus"></i></button> <br />
            <div>
                { 
                educationDetails.map(data=>{
                   return(<EducationDiv details={data} tempplateId={1} isEdit={true} editEducation={()=> editEducation(educationDetails.indexOf(data))} deleteEducation={()=>{delEducation(educationDetails.indexOf(data))}}  />)
                
                })}
            </div>
           <EducationForm show={eduShow} onClose={()=>{setEduShow(false)}} details={educationDetails} index={eduIndex} submitEdu={submitEdu} editEdu={editEdu} />
           <ExperienceForm show={expShow} onClose={()=>{setExpShow(false)}} details={experienceDetails} index={expIndex} submitExp={submitExp} editExp={editExp} />
          <br />
          Skill <button className="icon" onClick={()=>{setShowSkill(true)}}><i class="fa fa-plus"></i></button> <br />

           <div className="card">
                {skills.map(skill=>{
                    return(<SkillDiv deleteSkill={()=>{deleteSkill(skills.indexOf(skill))}} skill={skill} /> ) } 
                )}
            </div>

            <SkillForm show={showSkill} onClose={()=>{setShowSkill(false)} } addSkill={addSkill}  />

          Experience <button className="icon" onClick={addExperience} ><i class="fa fa-plus"></i></button> <br />
          <div>
                { 
                experienceDetails.map(data=>{
                   return(<ExperienceDiv details={data} tempplateId={1} isEdit={true} editExperience={()=> editExperience(experienceDetails.indexOf(data))} deleteExperience={()=>{delExperience(experienceDetails.indexOf(data))}}  />)
                
                })}
            </div>

          
        </div>

       <div className="resume" id="resume">
        
        {switchTemplate(2)}
            {/* <Template1 templateId={"1"} personalDetails={personalDetails} educationDetails={educationDetails} experienceDetails={experienceDetails} skills={skills} summary={summary} /> */}

       </div>

       <div>
           <button>Print </button>
       </div>
        
        </div>
    )
}
export default ResumeForm