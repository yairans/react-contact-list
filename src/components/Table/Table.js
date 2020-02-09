import React, {Component} from 'react';
import './Table.css'
import Contact from '../Contact/Contact';

class Table extends Component {
    constructor(props) {
        super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
        this.props = props;
    }

    renderTableData() {
        const filtered = this.props.items.filter(item => item.name.toLowerCase().indexOf(this.props.filter) > -1);
        return filtered.map((item) => {
            const { id } = item; //destructuring
            return (
                <Contact key={id} item={item}/>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="table">
                    {this.renderTableData()}
                </div>
            </div>
        )
    }}

export default Table
