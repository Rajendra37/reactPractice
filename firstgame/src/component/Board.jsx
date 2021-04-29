import React from 'react';
import Cell from './Board-cell'


class Board extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            next:'o',
            cells:[null,null,null,null,null,null,null,null,null]
        };

    }

    handleCellClick=(id)=>{
       let currentValue=this.state.cells[id];
       if(currentValue)
        return;

        let newCell=[...this.state.cells];
        newCell[id]=this.state.next;

        let newNext=this.state.next==='o'?'x':'o';

        this.setState({cells:newCell,next:newNext})

        console.log("cells ",newCell);
        console.log("next ",newNext);

    }

    render()
    {
        return(
                 <div className="board">
                         <Cell id={0} value={this.state.cells[0]} onCellClick={this.handleCellClick}/>
                         <Cell id={1} value={this.state.cells[1]} onCellClick={this.handleCellClick}/>
                         <Cell id={2} value={this.state.cells[2]} onCellClick={this.handleCellClick}/>
                         <Cell id={3} value={this.state.cells[3]} onCellClick={this.handleCellClick}/>
                         <Cell id={4} value={this.state.cells[4]} onCellClick={this.handleCellClick}/>
                         <Cell id={5} value={this.state.cells[5]} onCellClick={this.handleCellClick}/>
                         <Cell id={6} value={this.state.cells[6]} onCellClick={this.handleCellClick}/>
                         <Cell id={7} value={this.state.cells[7]} onCellClick={this.handleCellClick}/>
                         <Cell id={8} value={this.state.cells[8]} onCellClick={this.handleCellClick}/>
                 </div>
             );
    }
}





export default Board;