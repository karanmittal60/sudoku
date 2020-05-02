import React, {useState} from 'react';
import NumberInput from "./NumberInput";

const Sudoku = () => {
    const [number, setNumber] = useState();

    const initialState = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    ];

    const [suValue, setSuValue] = useState(initialState)


    const setCellValues = (num, row, col) => {
        setSuValue(su => {
            let cloneSu = [...su]
            cloneSu[row][col]  = num
            return cloneSu
        })
    };

    const createRow = (row) => {
        let rows = []
        for(let col = 0; col < 9; col++){
            rows.push(
                <td className={`su-cell ${((row+1)%3 === 0) ? "cbb": ""} ${((col+1)%3 === 0) ? "cbr" : ""} `}
                    key={`col-${col}`}
                >
                    <NumberInput
                        number={suValue[row][col]}
                        onChange={(num) => setCellValues(num, row, col)}
                        key={`input-${col}`}
                    />
                </td>

            )
        }
        return rows
    }
    const renderRow = () => {
        let rows = []
        for(let i = 0; i < 9; i++){
            rows.push(<tr key={`row-${i}`}>
                {createRow(i)}
            </tr>)
        }
        return rows
    }

    return (
        <div className="container">
            <div className="text-center">
                <h1>Sudoku</h1>
            </div>

            <div className="su-wrapper">
                <div className="su-content">
                    <table>
                        <tbody>
                        {renderRow()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Sudoku;