/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types'
import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const { noOfElement, sizeOfPage, onPageChange, currentPage } = props;

    const pagesNumbers = Math.ceil(noOfElement / sizeOfPage);
    if (pagesNumbers === 1) return null;
    const pages = _.range(1, pagesNumbers + 1)

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page}
                        className={page === currentPage
                            ? "page-item active"
                            : "page-item"}
                    >
                        <a
                            onClick={() => onPageChange(page)}
                            className="page-link">{page}</a></li>
                ))}
            </ul>
        </nav>
    )
}

// type cheking and handle wrong props sent by main component
Pagination.propTypes = {
    noOfElement: PropTypes.number.isRequired,
    sizeOfPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;