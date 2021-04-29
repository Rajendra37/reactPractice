import React from 'react';


const BoardCell = (props) => {


        let style = 
        {
                color: props.value ? 'black' : 'transparent'
        }
        let value = props.value || '-';
        
        return (
                <button onClick={() => { props.onCellClick(props.id) }}
                        style={style} className="cell">
                        {value}</button>

        );

}

export default BoardCell;