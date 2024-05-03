import React, { Component } from 'react';
// import { useParams } from 'react-router-dom';

export default class MovieFrom extends Component {
    handleSave = () => {
        this.props.history.replace("/movies")
    };
    render() {
        const { _id } = this.props.match.params;
        return (
            <div className='container'>
                <h1> Movie Form {_id}</h1>
                <button className='btn btn-success'
                    onClick={this.handleSave} >Save</button>
            </div>
        );
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
// export default (props) => (
//     <MovieFrom
//         {...props}
//         params={useParams()}
//     />
// );
// export default MovieFrom;