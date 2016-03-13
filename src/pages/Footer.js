import React from 'react';

const footerContainer = {
    textAlign: 'center'
};

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={footerContainer}>
                <h5>&copy; 2016 reactjs-id</h5>
            </div>
        )
    }
}