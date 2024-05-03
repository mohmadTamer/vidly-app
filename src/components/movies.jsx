import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import ListGroup from "./commen/listGroup";
import Pagination from "./commen/pagination";
import Paginate from "./utils/paginate";
import _ from "lodash";


export default class Movies extends Component {
  state = {
    movies: [],
    genre: [],
    sortCol: { path: "title", order: "asc" },
    currentPage: 1,
    currentGenra: 'All Genres',
    pageSize: 4
  }

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genre: getGenres()
    })

  }

  getPagedData = () => {
    const {
      currentPage,
      pageSize,
      movies: allmovies,
      sortCol,
      currentGenra } = this.state;
    const filterdGenra = currentGenra && currentGenra._id
      ? allmovies.filter((movies) => movies.genre._id === currentGenra._id)
      : allmovies;

    const sorted = _.orderBy(filterdGenra, [sortCol.path], [sortCol.order])
    const moviesPage = Paginate(sorted, currentPage, pageSize) //paginate function
    return { data: moviesPage, totalcount: filterdGenra.length };
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
    this.setState({ movies: m })
  }

  handlePages = page => {
    this.setState({ currentPage: page })
  }

  handleGenre = genra => {
    this.setState({ currentGenra: genra, currentPage: 1 })
  }

  handelSort = sortCol => {
    this.setState({ sortCol })
  }

  render() {
    const { length: count } = this.state.movies;
    const { currentPage, pageSize, sortCol } = this.state;
    const { totalcount, data: movies } = this.getPagedData()

    if (count === 0)
      return <div className="container"><h2>No items to show</h2></div>

    return (
      <>
        <div className="m-3 container">
          <div className="row">
            <div className="col-3 ">

              <ListGroup
                genraList={this.state.genre}
                onCatChange={this.handleGenre}
                currentGenra={this.state.currentGenra}
              />
            </div>

            <div className="col">
              <h2>Showing {totalcount} items from the list</h2>

              <MoviesTable
                // filterdGenra={totalcount}
                moviesPage={movies}
                sortCol={sortCol}
                handleDelete={this.handleDelete}
                handleLike={this.handleLike}
                onSort={this.handelSort}
              />

              <Pagination
                noOfElement={totalcount}
                currentPage={currentPage}
                sizeOfPage={pageSize}
                onPageChange={this.handlePages}
              />
            </div>

          </div>
        </div>
      </>
    )

  }
}

