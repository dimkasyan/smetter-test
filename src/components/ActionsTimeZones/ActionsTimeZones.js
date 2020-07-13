import React, { Component } from "react";
import moment from "moment-timezone";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import saveIcon from "../../icons/diskette.svg";

class ActionsTimeZones extends Component {
  onSaveTimeZones = listChoiceZones => {
    const editList = listChoiceZones.map(({ id, name }) => {
      return {
        id,
        name,
        timezone: moment.tz(new Date(), name).format("HH:mm:ss"),
        offset: moment.tz(new Date(), name).format("Z"),
      };
    });
    localStorage.setItem("saveZones", JSON.stringify(editList));
    NotificationManager.success("Список сохранён");
  };

  onRemoveAll = () => {
    localStorage.setItem("saveZones", "");
    NotificationManager.warning("Удалено");
    this.props.setZones([], "saveZones");
  };

  onGetSaveZones = () => {
    this.props.setZones([], "listChoiceZones");
    this.props.setZones(
      JSON.parse(localStorage.getItem("saveZones")),
      "saveZones"
    );
  };

  render() {
    const { listChoiceZones } = this.props;

    return (
      <>
        <div className="buttons-action-block">
          <button
            className="button-action-with-zones"
            onClick={() => this.onGetSaveZones()}>
            Вывести сохранённые блоки
          </button>
          <button
            className="button-action-with-zones save-action"
            onClick={() => this.onSaveTimeZones(listChoiceZones)}>
            <img src={saveIcon} width="16px" height="16px" alt="" />
            Сохранить блоки
          </button>
          <button
            className="button-action-with-zones"
            onClick={() => this.onRemoveAll()}>
            Удалить сохранённые блоки
          </button>
        </div>
        <NotificationContainer />
      </>
    );
  }
}

export default ActionsTimeZones;
