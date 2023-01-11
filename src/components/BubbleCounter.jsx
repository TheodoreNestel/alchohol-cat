


//this component is a display component it will only display data
function BubbleCounter(props){
//console.log("inside bubble" , cals)
    return (
        
            <div className="bubble-counter">
                <h3 className="bubble-counter__cal-count">{props.cals.total}</h3>

                <div className="bubble-counter__shots">
                        {
                            Object.keys(props.shots).map((liquor)=>{
                                if(props.shots[liquor] !== 0){
                                   return <h3>{liquor}: {props.shots[liquor]}</h3>
                                }
                            })
                        }
                         <h2 className="bubble-counter__shots__title"> Shots added </h2>
                </div>
            </div>

            )

}



export default BubbleCounter