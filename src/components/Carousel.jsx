import { useRef } from "react"

//QUESTIOn why is the return necessary to get them to show when I know previously it wasnt 
function Carousel(props){

    //console.log(liquors)

    //needs imgs that can be clicked on that will switch the currentLiquor state 


    //props has the allDrinks object and the currentLiquor state changer function 


    const isAnimation = useRef(false)



    //animation exit logic !! add check to make sure this cant run if the current liquor is the same
   async function handleChange(drink){

    if(isAnimation.current || props.currentDrink.name === drink.name) return
    isAnimation.current = true
        props.exitAnim.current.play()
        await props.exitAnim.current.finished
    isAnimation.current = false

        props.stateChange(drink)
    }

    return(


<div className="carousel">

        <div className="carousel-container">


            

            

                    {
                        Object.keys(props.liquor).map((drink)=>{


                        return ( <div
                                    className="carousel-container__drink-option"
                                    key={`${drink}${Date.now()}`}
                            >

                               

                               

                               
                                    <div className="carousel-container__drink-option__shot-container">
                                        <span className="carousel-container__drink-option__shot-container__shots" >
                                            {props.totalShots[drink]}
                                        </span>
                                    </div>
                        
                                    <a href="#"
                                    className="carousel-container__drink-option__liquor-container"
                                    onClick={()=>handleChange(props.liquor[drink])}
                                    >
                                    
                                        <img 
                                        className="carousel-container__drink-option__liquor-container__img" 
                                        src={props.liquor[drink].src} 
                                        />

                                        <h2 
                                        className="carousel-container__drink-option__liquor-container__title">
                                            {props.liquor[drink].display}
                                        </h2>

                                    </a>

                        </div>)

                        })
                    }

               

            

        </div>

        </div>
       

    )
}


export default Carousel