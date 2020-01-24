import React from 'react';
import './Form.css';
import Features from '../Features/Features';

export default class Form extends React.Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Features {...this.props} />
            </form>
        )
    }
}