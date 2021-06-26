const PersonalDetailsDiv=(props)=>{

    return(
        <div className={"PersonalDetails"+props.templateId} className="card">

            <div>
                {props.details.name}
            </div>
            <div>
                {props.details.designation}
            </div>
            <div>
                {props.details.email}
            </div>
            <div>
                {props.details.mobile}
            </div>
        
        </div>
    )
}
export default PersonalDetailsDiv