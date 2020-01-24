import React from 'react';
import './Summary.css';
import Total from '../Total/Total';
import Cart from '../Cart/Cart';


export default class Summary extends React.Component {
    render() {

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Cart {...this.props} />

                <Total {...this.props} />

          </section>
        )
    }
}



