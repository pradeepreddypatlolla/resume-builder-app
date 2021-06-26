
const ExperienceDiv=(props)=>{

   const templateId=props.templateId
    const details=props.details
    const isEdit=props.isEdit
    
    return(
        <div className={'experience'+templateId} className="card" >
            <div>
                {details.company} <span> {isEdit? <> <button className="icon" onClick={props.editExperience}><i class="fa fa-edit"></i></button> <button className="icon" onClick={props.deleteExperience} ><i class="fa fa-minus"></i></button> </>:"" } </span>
            </div>
            <div>
                {details.startDate}
            </div>
            <div>
                {details.endDate}
            </div>
            <div>
                {details.role}
            </div>
            <div>
                {details.description}
            </div>
            
        </div>
    )
}
export default ExperienceDiv