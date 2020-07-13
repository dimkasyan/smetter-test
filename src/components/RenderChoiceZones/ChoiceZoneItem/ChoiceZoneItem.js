import React, { Component } from "react";
import moment from "moment-timezone";

class ChoiceZoneItem extends Component {
  state = {
    timezone: "",
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(this.props.choiceZone), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = choiceZone => {
    this.setState({
      timezone: moment.tz(new Date(), choiceZone).format("HH:mm:ss"),
    });
  };

  render() {
    const { choiceZone, handleRemove, id, offset, timezone } = this.props;
    const timezoneChoice = moment.tz(new Date(), choiceZone).format("HH:mm:ss");
    const offsetChoice = moment.tz(new Date(), choiceZone).format("Z");

    return (
      <div className="choice-zones__element">
        <div className="choice-zones__element-offset">
          {offset ? offset : offsetChoice}
        </div>
        <div className="choice-zones__element-block">
          <div className="choice-zones__element-name">{choiceZone}</div>
          <div className="choice-zones__element-time">
            {timezone ? timezone : timezoneChoice}
          </div>
        </div>
        <div
          className="choice-zones__element-remove"
          onClick={() => handleRemove(id, offset && timezone ? 'saveZones': 'listChoiceZones')}
        ></div>
      </div>
    );
  }
}

export default ChoiceZoneItem;
