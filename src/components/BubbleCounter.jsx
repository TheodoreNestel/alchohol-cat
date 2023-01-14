


//this component is a display component it will only display data
function BubbleCounter(props){
//console.log("inside bubble" , cals)
    return (
        
            <div className="bubble-counter">
                <div className="bubble-counter__shots">
                {/* <h2 className="bubble-counter__shots__title"> Shots added: </h2>
                        {
                            Object.keys(props.shots).map((liquor)=>{
                                if(props.shots[liquor] !== 0){
                                   return <h3>{liquor}: {props.shots[liquor]}</h3>
                                }
                            })
                        } */}
                </div>
                <h2 className="bubble-counter__cal-count"> {props.cals.total} <span className="bubble-counter__cal-count__span">Cal</span></h2>
            </div>

            )

}



export default BubbleCounter