import React, { Component } from 'react';
import Square from './Square'

export default class Board extends Component{

    rendeSquare(i){
        return <Square value={this.props.squares[i]}
            onClick={()=>this.props.onClick(i)}
        />

    }

    render()
    {
        return(
        <div>
                <div className="border-row">
                    {this.rendeSquare(0)}
                    {this.rendeSquare(1)}
                    {this.rendeSquare(2)}
                </div>
                <div className="border-row">
                    {this.rendeSquare(3)}
                    {this.rendeSquare(4)}
                    {this.rendeSquare(5)}
                </div>
                <div className="border-row">
                    {this.rendeSquare(6)}
                    {this.rendeSquare(7)}
                    {this.rendeSquare(8)}
                </div>

        </div>)
    }

}