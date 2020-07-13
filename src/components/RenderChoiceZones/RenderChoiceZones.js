import React, { Component } from 'react';
import {  CSSTransition, TransitionGroup } from 'react-transition-group'
import ChoiceZoneItem from './ChoiceZoneItem'

class RenderChoiceZones extends Component {
    render() {
        const { listChoiceZones, handleRemove, saveZones } = this.props;
        let ListChoiceZones, SaveZones;
            if( listChoiceZones.length !== 0) {
                ListChoiceZones = listChoiceZones.map(({id, name}) => {
                    return (
                     <CSSTransition
                         key={`clock-${id}`}
                         timeout={500}
                         classNames="zone">
                         <ChoiceZoneItem handleRemove={handleRemove} id={id} key={`clock-${id}`} choiceZone={name} />
                     </CSSTransition>
                    )
                 })
            } else if(saveZones.length !== 0) {
                SaveZones = saveZones.map(({id, name, timezone, offset}) =>{
                    return (
                        <CSSTransition
                        key={`clock-${id}`}
                        timeout={500}
                        classNames="zone">
                        <ChoiceZoneItem handleRemove={handleRemove} id={id} key={`clock-${id}`} choiceZone={name} offset={offset} timezone={timezone} />
                    </CSSTransition>
                    )
            })
        }
        return (
            <TransitionGroup>
                {ListChoiceZones}
                {SaveZones}
            </TransitionGroup>
        );
      }
}

export default RenderChoiceZones;
