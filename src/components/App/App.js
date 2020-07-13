import React, { Component } from "react";
import moment from "moment-timezone";
import SelectZones from "../SelectZones";
import RenderChoiceZones from "../RenderChoiceZones";
import ActionsTimeZones from "../ActionsTimeZones";
import Loader from "../Loader";

class App extends Component {
  state = {
    listZones: [],
    listChoiceZones: [],
    saveZones: [],
  };

  setChoiceZones = value => {
    this.setState((state) => ({
      listChoiceZones: [...state.listChoiceZones, value],
    }));
  };

  setZones = (array, zones) => {
    this.setState((state) => ({ [`${zones}`]: (state[zones] = array) }));
  };

  handleRemove = (removeId, zones) => {
    this.setState((state) => ({
      [`${zones}`]: state[zones].filter(
        ({ id }) => id !== removeId
      ),
    }));
  };

  componentDidMount() {
    this.setState((state) => ({
      listZone: (state.listZones = moment.tz.names()),
    }));
  }

  render() {
    const { listZones, listChoiceZones, saveZones } = this.state;
    return (
      <div className="main">
        {listZones.length === 0 ?
          <Loader />
         : (
          <>
            <h1>Время на бирже</h1>
            <SelectZones choiceZones={this.setChoiceZones} zones={listZones} />
            <ActionsTimeZones
              listChoiceZones={listChoiceZones}
              setZones={this.setZones}
            />
            <div className="choice-zones">
              <RenderChoiceZones
                handleRemove={this.handleRemove}
                listChoiceZones={listChoiceZones}
                saveZones={saveZones}
              />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
