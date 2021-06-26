const EducationDiv=(props)=>{
    const templateId=props.templateId
    const details=props.details
    const isEdit=props.isEdit
    
    return(
        <div className={'education'+templateId} className="card">
            <div>
             School :   {details.school} <span>{isEdit? <> <button className="icon" onClick={props.editEducation}> <i class="fa fa-edit"> </i> </button> <button className="icon" onClick={props.deleteEducation} > <i class="fa fa-minus">  </i> </button> </>:"" }</span>
            </div> 
            <div>
             Qualification   {details.qualification}
            </div>
            <div>
             Specialization   {details.specialization}
            </div>
            
        </div>
    )



}
export default EducationDiv