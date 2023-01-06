import { useState , useEffect } from "react";
import LiquorCard from "../components/LiquorCard"

function MainPage(){

//FUNCTIONALITY 
// 


  // -rum 
	// -white rum 
	// -vodka 
	// -gin 
	// -whiskey 
	// -tripple sec 
	// -cognac 
	// -tequila 
	// -white tequila 


    //cal is based on a shot measurement
    const allDrinks = {
        rum : {
          name : "Rum",
          cal : 97,
          src : "/bottle-assets/rum.png",
          alt : "bottle of rum"
        },
        whiteRum : {
            name : "WhiteRum",
            cal : 54,
            src : "/bottle-assets/whiterum.png",
            alt : "bottle of white rum"
          },
          tripleSec : {
            name : "Triple Sec",
            cal : 225,
            src : "/bottle-assets/triplesec.png",
            alt : "bottle of triple sec"
          },
          gin : {
            name : "Gin",
            cal : 110,
            src : "/bottle-assets/gin.png",
            alt : "bottle of gin"
          },
          whiskey : {
            name : "Whiskey",
            cal : 105,
            src : "/bottle-assets/whiskey.png",
            alt : "bottle of whiskey"
          },
          whiteTequila : {
            name : "WhiteTequila",
            cal : 98,
            src : "/bottle-assets/whitetequila.png",
            alt : "bottle of white tequila"
          },
          vodka : {
            name : "Vodka",
            cal : 97,
            src : "/bottle-assets/vodka.png",
            alt : "bottle of vodka"
          },
          tequila : {
            name : "Tequila",
            cal : 98,
            src : "/bottle-assets/tequila.png",
            alt : "bottle of tequila"
          },
          cognac : {
            name : "Cognac",
            cal : 98,
            src : "/bottle-assets/cognac.png",
            alt : "bottle of cognac"
          }
      }


      //this will be set to allDrinks.something and be updated by the carousel 
      //by default itll be set to the first item in the allDrinks object
      const [currentLiquor , setCurrentLiquor] = useState(allDrinks[Object.keys(allDrinks)[0]])



      //this will track the amount of shots consumed (this will be reset to 0 by carousel or a useref looking at currentLiquor)
      const [shotCount , setShotCount] = useState(0)

      //total calories consumed
      const [totalCal , setTotalCal] = useState(0)



      //this will keep track of all the types shots consumed 
      const [totalShotsConsumed , setTotalShotsConsumed] = useState({
        rum : 0,
        whiteRum : 0,
        vodka : 0, 
        gin : 0,
        whiskey : 0,
        tripleSec : 0,
        cognac : 0 ,
        tequila : 0,
        whiteTequila : 0 

      })


      //this function updates our total shots object in state 
      function handleShots(liquor){

        let newShotCount = {...totalShotsConsumed} //copies  our state object

        newShotCount[liquor] = totalShotsConsumed[liquor] + 1 //we add one to the counter based on the liquor passed in

        console.log(newShotCount , "in the shot updater")

        setTotalShotsConsumed(newShotCount) //we set our state with out updated object 

        //**BUG ? when called three times will only add 2  */
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

        setShotCount(0)

        setTotalCal(0)
      }


    
      //functionality for calorie calculator 

      function onChange(){//this is just to track total shots as is for cosmetic value only 
        //here on change will look at a shot counter and will update when that value is changed 
        
        //this adds a shot 
        setShotCount((count)=> count + 1)

      }


      //this useEffect will calculate the total consumed 
      useEffect(()=>{

      },[])



      
    
     
     

      



      //card needs props that have a liquor.src / liquor.alt / liquor.name
    return(
        <div>
                <h1>Main page place holder</h1>
                <LiquorCard name={currentLiquor.name} src={currentLiquor.src} alt={currentLiquor.alt}/>


        </div>
    )
}


export default MainPage;