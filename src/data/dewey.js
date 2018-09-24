/* eslint-disable */

export const deweyData = [
        {key: 0, 'history': []},
        {key: 1, 'bread': []},
        {key: 2, 'flowers': []},
        {key: 3, 'science': [
            {key: 0, 'biology': []},
            {key: 1, 'physics': []},
            {key: 2, 'tectonics': []},
            {key: 3, 'forensics': [
                {key: 0, 'fingerprints': []},
                {key: 1, 'CSI Miami': []},
                {key: 2, 'CSI New York': []},
                {key: 3, 'Dexter': []},
                {key: 4, 'bloodspatteranalysis': []},
                {key: 5, 'Black Light': []},
                {key: 6, 'ballistics': []},
                {key: 7, 'handwriting': []},
                {key: 8, 'DNA': []},
                {key: 9, 'psychopathology': []},
            ]},
            {key: 4,'anatomy': []},
            {key: 5,'genetics': []},
            {key: 6,'quantum mech': []},
            {key: 7,'neurodynamism': []},
            {key: 8,'oceanography': []},
            {key: 9,'maths': []},
        ]},

        {key: 4, 'comedy': []},
        {key: 5, 'geography': []},
        {key: 6, 'time': []},
        {key: 7, 'matter': []},
    ]


// search dewey(333) -> {Science, Forensics, Dexter}

export const findDewey = (number, collection, state={n:0, result: []}, start, end) => {
    start = start === undefined ? 0 : start;
    end = end === undefined ? collection.length : end;

    if (start > end) {
    return -1;
    }

    let keys
    let newTopic
    let index = Math.floor((start + end) / 2)
    let itemKey = collection[index].key
    let target = number[state.n]



    if(itemKey == target) {
        keys = Object.keys(collection[index]);
        newTopic = keys[1]
        state.result.push(newTopic)
        state.n++
        collection = collection[index][newTopic]
        if (state.n == 3) {
            return state.result;
        }
        return findDewey(number, collection, state)
    }
    else if (itemKey < target) {
        start = index + 1;
        return findDewey(number, collection, state, start, end)
    }
    else if (itemKey > target) {
        end = index - 1;
        return findDewey(number, collection, state, start, end)
    }

}
