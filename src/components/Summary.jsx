

function Summary(props){



    //This component serves as a total summary breakdown of the type of shot consumed as well as 
    //the caloric amount of each alchohol consumed 

    return(
        <div className="summary-container">
            <div className="summary-container__shots-breakdown-container">

                <div className="summary-container__shots-breakdown-container__shot-types">
                    {
                        Object.keys(props.shots).map((drinkType)=>{

                            return(
                            <h4 className="summary-container__shots-breakdown-container__shot-types__shot-count">
                            {drinkType}: {props.shots[drinkType]}
                            </h4>
                            )

                        })
                    }
                </div>



                <div className="summary-container__shots-breakdown-container__cals-types">
                    {
                        Object.keys(props.cals).map((drinkType)=>{
                            return(
                                <h4 className="summary-container__shots-breakdown-container__cals-types__cal-count">
                                    {drinkType}: {props.cals[drinkType]}
                                </h4>
                            )
                        })
                    }
                </div>
               
            </div>
        </div>
    )
}


export default Summary