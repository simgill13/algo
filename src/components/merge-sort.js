/* eslint-disable */
export const mergeSort = array => {
    if (array.length <= 1) return array

    const middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle, array.length)

    left = mergeSort(left)
    right = mergeSort(right)

    return merge(left, right, array)
}

const merge = (left, right, array) => {
    let leftIndex = 0
    let rightIndex = 0
    let outputIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++]
        }
        else {
            array[outputIndex++] = right[rightIndex++]
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i]
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i]
    }
    return array;
}

export const nSort = (arr, low, high) => {
  const indexArray = new Array(high - low + 1);
  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i] - low
    if(indexArray[diff]) {
      indexArray[diff] = indexArray[diff] + 1
    }
    else {
      indexArray[diff] = 1
    }
  }
  let output = []
  for (let i = 0; i < indexArray.length; i++) {
      if(indexArray[i]){
        for (let j = 0; j < indexArray[i]; j++) {
          output.push(i + 1)
        }
      }
  }
  return output
}
