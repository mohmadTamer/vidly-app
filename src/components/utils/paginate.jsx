import _ from 'lodash';

export default function Paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize
    return _(items) //lodash wrapper
        .slice(startIndex) //function that slice array start from start index
        .take(pageSize) // function that give us the number of items needed
        .value();

}
