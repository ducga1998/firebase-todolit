import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
export default class DatePickerComponent extends React.Component {
  state = {
    startDate: new Date(this.props.date) || null,
    isOpen: false
  };
  componentDidUpdate() {
    console.log("sacasc", this.state.startDate);
  }
  handleChange = date => {
    this.setState({ startDate: date });
    this.toggleCalendar();
  };

  toggleCalendar = e => {
    e && e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };
  checkDueTime = () => {
    const { date } = this.props;

    if (date && date.length) {
      const distanceTime = new Date(date) - new Date();
      if (distanceTime < 0) {
        return "red";
      }
      if (distanceTime > 0) {
        return "green";
      }
    } else {
      return "black";
    }
  };
  render() {
    const { onChange, date } = this.props;
    return (
      <Wrapper background={this.checkDueTime()}>
        {React.cloneElement(this.props.trigger, {
          onClick: this.toggleCalendar
        })}
        {this.state.isOpen && (
          <DatePicker
            selected={date.length ? new Date(date) : null}
            onChange={e => {
              onChange(convertDate(e));
              this.toggleCalendar();
            }}
            withPortal
            inline
            onClickOutside={this.toggleCalendar}
          />
        )}
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  path {
    fill: ${props => props.background};
  }
`;
export function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getMonth() + 1), pad(d.getDate()), d.getFullYear()].join("/");
}
