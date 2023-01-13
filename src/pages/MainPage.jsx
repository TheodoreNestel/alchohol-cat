import { useState , useEffect } from "react";
import LiquorCard from "../components/LiquorCard"
import BubbleCounter from "../components/BubbleCounter";
import Carousel from "../components/Carousel";
function MainPage(){


  //state needed to track the various parts of the calculator

    //cal is based on a shot measurement
    const allDrinks = {
        Rum : {
          name : "Rum",
          cal : 97,
          src : "/bottle-assets/rum.png",
          alt : "bottle of rum",
          display : "Rum"
        },
        WhiteRum : {
            name : "WhiteRum",
            cal : 54,
            src : "/bottle-assets/whiterum.png",
            alt : "bottle of white rum",
            display : "White Rum"
          },
          TripleSec : {
            name : "TripleSec",
            cal : 225,
            src : "/bottle-assets/triplesec.png",
            alt : "bottle of triple sec",
            display : "Triple Sec"
          },
          Gin : {
            name : "Gin",
            cal : 110,
            src : "/bottle-assets/gin.png",
            alt : "bottle of gin",
            display : "Gin"
          },
          Whiskey : {
            name : "Whiskey",
            cal : 105,
            src : "/bottle-assets/whiskey.png",
            alt : "bottle of whiskey",
            display : "Whiskey"
          },
          WhiteTequila : {
            name : "WhiteTequila",
            cal : 98,
            src : "/bottle-assets/whitetequila.png",
            alt : "bottle of white tequila",
            display : "White Tequila"
          },
          Vodka : {
            name : "Vodka",
            cal : 97,
            src : "/bottle-assets/vodka.png",
            alt : "bottle of vodka",
            display : "Vodka"
          },
          Tequila : {
            name : "Tequila",
            cal : 98,
            src : "/bottle-assets/tequila.png",
            alt : "bottle of tequila",
            display : "Tequila"
          },
          Cognac : {
            name : "Cognac",
            cal : 98,
            src : "/bottle-assets/cognac.png",
            alt : "bottle of cognac",
            display : "Cognac"
          }
      }


     //The current Selected Liquor state. Updated Via the carousel component. It starts with the first item in the 
     //all drinks state object
      const [currentLiquor , setCurrentLiquor] = useState(allDrinks[Object.keys(allDrinks)[0]])


     //the amounts of shot consumed in total 
      const [GlobalShot , setGlobalShot] = useState(0)

      //total calories consumed - per alchohol and all together 
      const [totalCal , setTotalCal] = useState({
        Rum : 0,
        WhiteRum : 0,
        Vodka : 0, 
        Gin : 0,
        Whiskey : 0,
        TripleSec : 0,
        Cognac : 0 ,
        Tequila : 0,
        WhiteTequila : 0,
        total : 0

      })

      //this will keep track of all the types shots consumed individual liquor
      const [totalShotsConsumed , setTotalShotsConsumed] = useState({
        Rum : 0,
        WhiteRum : 0,
        Vodka : 0, 
        Gin : 0,
        Whiskey : 0,
        TripleSec : 0,
        Cognac : 0 ,
        Tequila : 0,
        WhiteTequila : 0

      })


      //This function handles all shot logic [TYPE , AMOUNT , CALORIES]
      function handleShots(liquor , operation){

        let newShotCount = {...totalShotsConsumed} //copies  our state object

        let newTotalCal = {...totalCal} //copies our calorie object  
        //**JUN show me da proper way pls  */
        newTotalCal["total"] = 0 //we set it to 0 so we can use reduce later 

        let newGlobalShot = 0

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//**MIGHT NEED REWORK &&& */

        //SHOT INCREMENTATION LOGIC 
        if(operation === "add"){
          //console.log("added a shot" ,liquor)
          newShotCount[liquor] = totalShotsConsumed[liquor] + 1 //we add one to the counter based on the liquor passed in
        }
        else if(totalShotsConsumed[liquor] !== 0){
          console.log("legal sub")
          newShotCount[liquor] = totalShotsConsumed[liquor] - 1 //we remove one to our counter based on liquor
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //CALORIES & SHOT AMOUNTS LOGIC 
        let keys = Object.keys(totalShotsConsumed) //gets all keys in the totalshots objects and returns an array 

      
        //add a caloric count for each type of drink 
        keys.forEach((liquori)=>{ //we iterate over each liquor and allShorts 
          //logic for individual liquor cal 
          newTotalCal[liquori] = newShotCount[liquori] * allDrinks[liquori]["cal"]

        })

         //we add up all the shots so we know how many shots we have total 
         newGlobalShot = Object.values(newShotCount).reduce((acc , cur)=> acc  + cur , 0)

         //we get our overall amount of calories ingested and add it back into our object
         newTotalCal["total"] = Object.values(newTotalCal).reduce((acc , cur) => acc + cur , 0) // we add all the calories




        


        
        //We now set state with all our new data 
        setTotalShotsConsumed(newShotCount) //we set our state with out updated object 
        setGlobalShot(newGlobalShot)
        setTotalCal(newTotalCal)

        //console.log(totalCal , GlobalShot , totalShotsConsumed , "new state")

      }



      

      //resets out liquor shot counts - amount of shots overall - calories
      function reset(){
        setTotalShotsConsumed(
            {
                rum : 0,
                whiteRum : 0,
                vodka : 0, 
                gin : 0,
                whiskey : 0,
                tripleSec : 0,
                cognac : 0 ,
                tequila : 0,
                whiteTequila : 0 
        
              }
        )

        setGlobalShot(0)

        setTotalCal({
        rum : 0,
        whiteRum : 0,
        vodka : 0, 
        gin : 0,
        whiskey : 0,
        tripleSec : 0,
        cognac : 0 ,
        tequila : 0,
        whiteTequila : 0 ,
        total : 0
        })
      }


    
      
      //this will handle shot incrementation / decrementation 
      const handleIncrement = (id)=> {

        if(id === "add"){
          handleShots(currentLiquor.name , id)
        }
        else{
          handleShots(currentLiquor.name , id)
        }

      }

      //curently used to test state changing functions and not break react 
      useEffect(()=>{
        //handleShots("rum" , "add")
      },[])



      
    
     
     

      



      //card needs props that have a liquor.src / liquor.alt / liquor.name

      //TODO 
        //add button functionality for increment here or create a component 
    return(
        <div className="main-page">

          <img className="main-page__logo" src="#" />

        <div className="main-page__liquor-bubble">

              <div className="main-page__liquor-bubble__info-container">
                    <LiquorCard
                    className="main-page__liquor-bubble__info-container__liquor-card" 
                    name={currentLiquor.display} 
                    src={currentLiquor.src} 
                    alt={currentLiquor.alt} 
                    cal={currentLiquor.cal}
                    handleClick={handleIncrement}
                    />

                  <div className="main-page__liquor-bubble__info-container__button-div">
                      

                    </div>
              </div>


                <BubbleCounter
                className="main-page__liquor-bubble__bubble-counter"
                cals={totalCal}
                shots={totalShotsConsumed}
                />

      </div>  

                <Carousel
                className="main-page__carousel"
                liquor={{...allDrinks}}
                stateChange ={setCurrentLiquor}
          
                />


               
        </div>
    )
}


export default MainPage;



//deprecated component since I integrated its main logic to BubbleCounter 
{/* <Summary 
shots={totalShotsConsumed}
cals={totalCal}
totalShots={GlobalShot}
 /> */}