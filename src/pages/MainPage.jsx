import { useState , useEffect } from "react";
import LiquorCard from "../components/LiquorCard"

function MainPage(){

//IDEA state machine to track currently selected liquor ?


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


     //the amounts of shot consumed in total 
      const [GlobalShot , setGlobalShot] = useState(0)

      //total calories consumed - per alchohol and all together 
      const [totalCal , setTotalCal] = useState({
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

      //this will keep track of all the types shots consumed individual liquor
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
          newShotCount[liquor] = totalShotsConsumed[liquor] + 1 //we add one to the counter based on the liquor passed in
        }
        else{
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




        //debug 
        console.log("total cal" ,newTotalCal , "shots total" , newGlobalShot , "shots indi" , newShotCount)


        //We now set state with all our new data 
        setTotalShotsConsumed(newShotCount) //we set our state with out updated object 
        setGlobalShot(newGlobalShot)
        setTotalCal(totalCal)

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
      //onClick={handleIncrement(this)}

      //https://stackoverflow.com/questions/20030162/getting-data-attribute-for-onclick-event-for-an-html-element
      //for the logic to do this wowowow poggers 
      function handleIncrement(id){

      }

      //curently used to test state changing functions and not break react 
      useEffect(()=>{
        handleShots("rum" , "add")
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