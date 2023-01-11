

//QUESTIOn why is the return necessary to get them to show when I know previously it wasnt 
function Carousel(props){

    //console.log(liquors)

    //needs imgs that can be clicked on that will switch the currentLiquor state 


    //props has the allDrinks object and the currentLiquor state changer function 

    return(


        <div className="carousel-container">

        {
            Object.keys(props.liquor).map((drink)=>{


             return ( <div
                        className="carousel-container__drink-option"
                        key={`${drink}${Date.now()}`}
                >

                        <h2 className="carousel-container__title">{props.liquor[drink].display}</h2>

                        <a href="#"
                        className="carousel-container__liquor-container"
                        onClick={()=>props.stateChange(props.liquor[drink])}
                        >

                            <img 
                            className="carousel-container__liquor-container__img" 
                            src={props.liquor[drink].src} 
                            />

                        </a>

               </div>)

            })
        }

            

        </div>
       

    )
}


export default Carousel