import React from "react";
const uuidv4 = require("uuid/v4");
/**
 1->  Store Context is the global context that is managed by reducers.
 2-> Le Contexte offre un moyen de faire passer des données à travers l’arborescence
   du composant sans avoir à passer manuellement les props à chaque niveau.
 3-> Dans une application React typique, les données sont passées de haut en bas (du parent à l’enfant)
  via les props
 4-> Exemple de context :  les préférences régionales, le thème de l’interface utilisateur
 5-> Le Contexte est conçu pour partager des données qui peuvent être considérées comme « globales »
    (l’utilisateur actuellement authentifié, le thème, ou la préférence de langue.)
 6-> En résumé :
     * Le Contexte nous permet de transmettre une prop profondément dans l’arbre des
         composants sans la faire passer explicitement à travers tous les composants.
 */

const Store = React.createContext({
  // Local-Data
  usersData: [
    //  Initial Data
    { id: uuidv4(), name: "DIALLO", username: "Mamadou" },
    { id: uuidv4(), name: "BARRY", username: "Samba" },
    { id: uuidv4(), name: "SOW", username: "Moustapha" },
    { id: uuidv4(), name: "BAH", username: "Mohamed" },
  ],
});

export default Store;
