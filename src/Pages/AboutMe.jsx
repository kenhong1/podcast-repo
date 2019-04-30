import React, {Component} from "react"
import Footer from "../Components/Footer"


class AboutMe extends Component{
   render(){
      return(
         <div className="aboutMeBox">
            <h1> About Me </h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, expedita quia fugit, unde vero sapiente laudantium aperiam neque, nihil libero temporibus possimus iure saepe. Quos beatae sit dolorem optio ullam! </p> 
            <Footer /> 
         </div>
      )
   }
} 


export default AboutMe; 