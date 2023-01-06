
function LiquorCard(liquor){



    //this component is for art display onry

    return(
       <div>
            <img src={liquor.src} alt={liquor.alt} />
            <h4>{liquor.name}</h4>
       </div>
    )
}




export default LiquorCard;