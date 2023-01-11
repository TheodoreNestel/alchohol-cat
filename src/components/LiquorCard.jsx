
function LiquorCard(liquor){



    //this component is for data display only 

    return(
       <div className="liquor-card">

            <div className="liquor-card__info-card">
                <h1 className="liquor-card__info-card__liquor-title">{liquor.name}</h1>
                <h4 className="liquor-card__info-card__liquor-cal">Calories per shot: {liquor.cal}</h4>
            </div>
            <img className="liquor-card__liquor-img" src={liquor.src} alt={liquor.alt} />
            
       </div>
    )
}




export default LiquorCard;