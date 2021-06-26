

const SkillDiv=(props)=>{

    return(
        <div>
            <div>
            {props.skill} <span><button className="icon" onClick={props.deleteSkill}><i class="fa fa-minus"></i></button></span>
            </div>
        </div>
    )

}
export default SkillDiv