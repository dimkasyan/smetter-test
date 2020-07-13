import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';

class SelectZones extends Component {

    choiceZones = event => {
        this.props.choiceZones({id: uuidv4(), name: event.target.value})
    }

    render() {
        const { zones } = this.props;
        return (
            <div className="select-timezone">
                <select onChange={this.choiceZones}>
                    {zones.map((zone, index) => <option key={index} value={zone}>{zone}</option>)}
                </select>
            </div>
        )
    }
}

export default SelectZones;
