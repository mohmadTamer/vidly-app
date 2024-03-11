import React, { Component } from 'react'
import Like from './commen/like';
import Table from './commen/table';


class MoviesTable extends Component {
    columns = [
        { path: "title", label: "Title" },
        { path: "genre.name", label: "Genra" },
        { path: "numberInStock", label: "Stock" },
        { path: "dailyRentalRate", label: "Rate" },
        {
            key: "like",
            content: movie => <Like liked={movie.like} onClick={() =>
                this.props.handleLike(movie)} />
        },
        {
            key: "delete", content: movie => <button
                onClick={(m) => this.props.handleDelete(movie)}
                className='btn btn-danger'
            >Delete
            </button>
        }
    ]
    render() {
        const { moviesPage, onSort, sortCol } = this.props

        return (
            <Table
                columns={this.columns}
                data={moviesPage}
                onSort={onSort}
                sortCol={sortCol}
            />
        );
    }
}



export default MoviesTable;