import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./commen/like";

export default class Movies extends Component {
  state = {
    movies: getMovies()
  }
  handleDelete = (delMovie) => {
    this.setState({
      movies: this.state.movies.filter((m) => m._id !== delMovie._id)
    })
  }
  handleLike = (movie) => {
    const m = [...this.state.movies]
    const index = m.indexOf(movie)
    m[index].like = !m[index].like
    this.setState({ Movies: m })
  }

  render() {
    const { length: count } = this.state.movies;
    return (
      <div className="m-3">
        {count === 0
          ? (
            <div className="container">
              <h2>No items to show</h2>
            </div>
          )
          : (
            <>
              <h2>Showing {count} items from the list</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genra</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.movies.map(elMovie => (
                    <tr key={elMovie._id}>
                      <th scope="row">{elMovie.title}</th>
                      <td>{elMovie.genre.name}</td>
                      <td>{elMovie.numberInStock}</td>
                      <td>{elMovie.dailyRentalRate}</td>
                      <td>
                        <Like liked={elMovie.like} onClick={() => this.handleLike(elMovie)} />
                      </td>
                      <td>
                        <button
                          onClick={(m) => this.handleDelete(elMovie)}
                          className='btn btn-danger'
                        >Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )
        }
      </div>
    )

  }
}

// example for render list

// renderTage() {
//     return this.props.counter.tags.length === 0 ? <h2>No items to show</h2>
//         : this.props.counter.tags.map(tag => <li key={tag}> {tag} </li>)
//     // {/* <ul>
//     //     {this.renderTage()}
//     // </ul> */}
// }

