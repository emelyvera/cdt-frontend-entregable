import React, { Component } from 'react'

export class Boton extends Component {



    render() {
        
        const { handleClick, opcionA, opcionB } = this.props;

        return (
            <div className='opciones'>
                <div className='opcion'>
                    <button

                        id='A'
                        className='botones'
                        onClick={() => handleClick('A')}
                    >
                        A
                    </button>
                    <h2>{opcionA}</h2>
                </div>
                <div className='opcion'>
                    <button

                        id='B'
                        className='botones'
                        onClick={() => handleClick('B')}
                    >
                        B
                    </button>
                    <h2>{opcionB}</h2>
                </div>
            </div>
        )
    }
}
