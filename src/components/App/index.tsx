import React, {useState} from "react";
import NumberDisplay from "../NumberDisplay";
import { generateCells } from '../../utils/index';

import "./App.scss";
import Button from "../Button";




const App: React.FC = () => {
    const [cells, setCells] = useState(generateCells());

    const renderCells = (): React.ReactNode =>{
        return cells.map((row, rowIndex)=>
        row.map((cell, colIndex)=> <Button key={`${rowIndex}-${colIndex}`}/>)  
        ) 
    }

    console.log("cells :", cells)

    return (
        <div className="App">
            <div className="Header">
                <NumberDisplay value={0} />
                <div className="Face"> 
                    <span role="img" aria-label="face">
                        🙂
                    </span>
                 </div>
                <NumberDisplay value={23} />
            </div>
            <div className="Body">{renderCells()}</div>
        </div>
    )
} 

export default App;