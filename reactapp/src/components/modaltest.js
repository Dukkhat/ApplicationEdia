import React, { useState } from 'react';

import './test.css';
import './modaltest.css';

function Apptest(props){



    const [rollDice, setRollDice] = useState('')
    
    
    
    var rollingClic = ()=> {
        var tirage = (Math.floor( Math.random() * 10 ) +1);
        if (tirage==1){setRollDice("un")}
        else if(tirage==2) {setRollDice("deux")}
        else if(tirage==3) {setRollDice("trois")}
        else if(tirage==4) {setRollDice("quatre")}
        else if(tirage==5) {setRollDice("cinq")}
        else if(tirage==6) {setRollDice("six")}
        else if(tirage==7) {setRollDice("sept")}
        else if(tirage==8) {setRollDice("huit")}
        else if(tirage==9) {setRollDice("neuf")}
        else if(tirage==10) {setRollDice("dix")}
        else if(tirage==11) {setRollDice("onze")}

        
        console.log(rollDice)
      
     }

    return (

        <div className='Sidebar'>

            <ul className='SidebarList'>
            
                <li className='Row'><img src='../images/euro.png' id="IconeTri" /><div id="Title">Montant</div></li>
                <li className='Row'><img src='../images/administrateur.png' id="IconeTri" /><div id="Title">Financeur</div></li>
                <li className='Row'><img src='../images/geographie.png' id="IconeTri" /><div id="Title">Niveau de l'aide</div></li>
                <li className='Row'><img src='../images/difficulty.png' id="IconeTri" /><div id="Title">Difficulté</div></li>
                <li className='Row'><img src='../images/delais.png' id="IconeTri" /><div id="Title">Délais d'obtention</div></li>
            </ul>

            {/* <button onClick={ ()=>rollingClic() }>Clic</button>
<p>{rollDice}</p> */}
 </div>







       
    )


}

export default Apptest