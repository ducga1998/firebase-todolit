import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class DatePickerComponent extends React.Component {
    state = {
        startDate : new Date(this.props.date)  ||  null,
        isOpen : false

    }
    componentDidUpdate(){
        console.log('sacasc',this.state.startDate)
    }
  handleChange = date =>  {
    this.setState({ startDate: date });
    this.toggleCalendar();
  }

  toggleCalendar = e => {
    e && e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const {onChange , trigger }  = this.props
    return (
      <div>
       {React.cloneElement(this.props.trigger , {
           onClick :   this.toggleCalendar
       })}
        {this.state.isOpen && (
          <DatePicker
            selected={new Date(this.props.date)}
            onChange={(e) => {
                onChange(convertDate(e)); 
                this.toggleCalendar()
            }}
            withPortal
            inline
            onClickOutside={this.toggleCalendar}
          />
        )}
      </div>
    );
  }
}

export function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [ pad(d.getMonth() + 1), pad(d.getDate()),d.getFullYear()].join('/');
  }