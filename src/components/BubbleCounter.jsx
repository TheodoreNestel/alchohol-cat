


//this component is a display component it will only display data
function BubbleCounter(cals){
//console.log("inside bubble" , cals)
    return (
        
            <div className="bubble-counter">
                <h3 className="bubble-counter__cal-count">{cals.cals.total}</h3>
            </div>

            )

}



export default BubbleCounter