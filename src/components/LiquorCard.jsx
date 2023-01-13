
function LiquorCard(props){



    return(
       <div className="liquor-card">


            <div className="liquor-card__buttons">
                 <button 
                 className="liquor-card__buttons__sub"
                 onClick={()=> props.handleClick("sub")}
                 >-</button>

                 <button 
                 className="liquor-card__buttons__add"
                 onClick={()=> props.handleClick("add")}
                 >+</button>
            </div>

            <img className="liquor-card__liquor-img" src={props.src} alt={props.alt} />
            <div className="liquor-card__info-card">
                <h1 className="liquor-card__info-card__liquor-title">{props.name}</h1>
                <h4 className="liquor-card__info-card__liquor-cal">Calories per shot: {props.cal}</h4>
            </div>
            
       </div>
    )
}




export default LiquorCard;