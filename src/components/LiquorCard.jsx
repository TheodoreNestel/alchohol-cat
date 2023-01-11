
function LiquorCard(liquor){



    //this component is for data display only 

    return(
       <div className="liquor-card">
            <img className="liquor-card__liquor-img" src={liquor.src} alt={liquor.alt} />
            <h1 className="liquor-card__liquor-title">{liquor.name}</h1>
            <h4 className="liquor-card__liquor-cal">{liquor.cal}</h4>
            
       </div>
    )
}




export default LiquorCard;