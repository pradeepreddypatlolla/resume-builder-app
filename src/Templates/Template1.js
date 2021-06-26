
const Template1=(props)=>{
    const personalDetails=props.personalDetails
    const educationDetails=props.educationDetails
    const experienceDetails=props.experienceDetails
    const skills=props.skills
    const id=props.templateId
    

    return(
        <div className={"resume"+id}>
           <div className={"headerDiv"+id}>
                <div className={"nameDiv"+id}> 
                    {personalDetails.name.toUpperCase()}
                </div>
                <div className={"contactDiv"+id}>
                    <div className={"addressDiv"+id}>
                       <b> Address </b> : {personalDetails.address}
                    </div>
                    <div className={"phoneDiv"+id}>
                      <b>Phone : </b> {personalDetails.mobile}
                    </div>
                    <div className={"emailDiv"+id}>
                       <b> Email </b> : {personalDetails.email}
                    </div>
                </div>
           </div>
        <div className={"bodyDiv"+id}>
            <div className={"summaryDiv"+id}>
                <div className={"summaryTitle"+id}>
                    Summary
                </div>
                <div className={"summaryBody"+id}>
                    {props.summary}
                </div>
            </div>

            <div className={"skillsDiv"+id}>
                <div className={"skillsTitle"+id}>
                Skills Highlights
                </div>
                <div className={"skillsBody"+id}>
               <ul> {skills.map(skill=>{
                    return(
                        <li>
                            {skill}
                        </li>
                    )
                })}
                </ul>
                </div>

            <div className={"experienceDiv"+id}>
                <div className={"experienceTitle"+id}>
                Experience 
                </div>
               

                    {experienceDetails.map(experience=>{
                        return(
                            <div className={"experienceBody"+id}>
                                <div>
                                    <span> {experience.role} </span> <span> {experience.startDate} - {experience.endDate} </span>
                                </div>
                                <div>
                                    {experience.location}
                                </div>
                                <div>
                                    {experience.description}
                                </div>
                            </div>
                        )
                    })}

                
                </div>
            </div>
        <div className={"educationDiv"+id}>
            <div className={"educationTitle"+id}>
                    Education
            </div>
            {educationDetails.map(education=>{
                return(
                    <div className={"educationBody"+id}>
                        <div>
                            <span>{education.qualification}</span> <span>{education.specialization}</span> <span>{education.yearOfPass}</span>
                        </div>
                        <div>
                            {education.school}
                        </div>
                    </div>

                )
            })}
        </div>

        <div>

        </div>

            </div>
        </div>

        
    )
}
export default Template1