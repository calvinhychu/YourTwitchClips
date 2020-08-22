import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class PeriodButton extends React.Component {
    
    render(){
    return (
        <div>
        <button type="button" class="btn btn-secondary mr-1" onClick={this.props.action('all')}>All</button>
        <button type="button" class="btn btn-secondary mr-1" onClick={this.props.action('month')}>Month</button>
        <button type="button" class="btn btn-secondary mr-1" onClick={this.props.action('week')}>Week</button>
        <button type="button" class="btn btn-secondary mr-1" onClick={this.props.action('day')}>24H</button>
        </div>
    )
};
}

export default PeriodButton;

