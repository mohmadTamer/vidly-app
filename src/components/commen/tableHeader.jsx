import React, { Component } from 'react';


class TableHeader extends Component {
    raiseSort = path => {
        const sortCol = { ...this.props.sortCol }
        if (sortCol.path === path)
            sortCol.order = (sortCol.order === "asc") ? "desc" : "asc"
        else {
            sortCol.path = path;
            sortCol.order = 'asc'
        }
        this.props.onSort(sortCol)
    }
    renderSortIcon = () => {

    }

    render() {
        return (
            <thead>
                <tr>{this.props.columns.map(column => (
                    <th
                        className='clickable'
                        key={column.key || column.path}
                        onClick={() => this.raiseSort(column.path)}>
                        {column.label} {this.renderSortIcon(column)}
                    </th>
                ))}
                </tr>
            </thead>
        );
    }
}

export default TableHeader;