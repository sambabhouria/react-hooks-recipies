import React, {Component} from "react"
 
class Introduction extends Component {
       
       

   render() {
  
    return (
           < >
               <p>Introduction aux Hooks</p>
               <div>
                     Les Hooks sont arrivés avec React 16.8. Ils vous permettent de bénéficier d’un état local
                      et d’autres fonctionnalités de React sans avoir à écrire une classe.<br/>
                      Les Hooks sont rétro-compatibles <br/>
                     <span  style={{color: "red" ,fontWeight: 900}}> Mais qu’est ce qu’un Hook ? </span><br/>
                      Les Hooks sont des fonctions qui permettent de « se brancher » sur la gestion d’état local et de cycle de vie 
                      de React depuis des fonctions composants.<br/>
                       Les Hooks ne fonctionnent pas dans des classes : ils vous permettent d’utiliser React sans classes.
                      
               </div>
            </ >
       )  
  }
}
export default Introduction;