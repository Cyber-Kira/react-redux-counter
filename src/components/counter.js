import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, increase, decrease, reset}) => {
    return (
        <div>
            <div className="wrapper">
                <div className="counter-block">
                <div className="counter">{counter}</div>
                </div>
                <div className="buttons-block">
                <div className="plus-block">
                    <button onClick={increase}><img src="./Plus.svg" width="40" alt="plus"></img></button>
                </div>
                <div className="minus-block">
                    <button onClick={decrease}><img src="./Minus.svg" width="40" alt="minus"></img></button>
                </div>
                <div className="reset-block">
                    <button onClick={reset}><img src="./Reset.svg" width="40" alt="reset"></img></button>
                </div>
                </div>
                <div className="cloud">
                    <div className="download-block">
                        <button><img src="./Download.png" width="65" height="65" alt="download"></img></button>
                    </div>
                    <div className="upload-block">
                        <button><img src="./Upload.png" width="65" height="65" alt="upload"></img></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({counter: state});

export default connect(mapStateToProps, actions)(Counter);