import React, { Component } from 'react';
import Board from './Board';


export default class Game extends Component{
    constructor(props)
    {
        super(props)
        this.state=
        {
            IsNext:true,
            stepsNumber:0 ,
            history: [{squares:Array(9).fill(null)}]
         }
    }

    jumpTo(step)
    {
        this.setState({
            stepsNumber:step,
            IsNext:(step%2)===0
        })
    }

    handleClick(i)
    {
            const history=this.state.history.slice(0,this.state.stepsNumber+1);
            const current=history[history.length-1];
            const squares=current.squares.slice();
            const winner=calculatewinner(squares)
            if(winner|| squares[i])
            {
                return;
            }
            squares[i]=this.state.IsNext?'X':'o';
            this.setState({
                history:history.concat({
                    squares: squares
                }),
                IsNext:!this.state.IsNext,
                stepsNumber:history.length

            })
    }
    render()
    {
            const history=this.state.history;
            const current=history[this.state.stepsNumber];

            const winner=calculatewinner(current.squares);
            const moves=history.map((step,move)=>{
                const desc= move?'Go to #'+move:'Reset the Game'
                return(
                    
                    <li key={move}>
                    <button onClick={()=>{this.jumpTo(move)}}>
                    {desc}
                    </button>
                    </li>
                )
            });
            let status;
            if(winner)
            {
                status='Winner is '+winner
            }
            else
            {
                status="Next Move is "+(this.state.IsNext?'x':'o')
            }
            
                
           return( <div className="game">
                <div className="game-board">
                    <Board onClick={(i)=>this.handleClick(i)}
                    squares={current.squares} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ul>{moves}</ul>
                </div>
            
            </div>);

    }
}

function calculatewinner(square)
{
    const lines=[

        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ];

    for(let i=0;i<lines.length;i++)
    {
        const[a,b,c]=lines[i]
        if(square[a]&& square[a]==square[b]&&square[b]==square[c])
        {
            return square [a];

        }
    }
    return null;
}