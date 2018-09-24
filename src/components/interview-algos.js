/* eslint-disable */
export const zeroColumns = array => {
    let zeroI = [], zeroJ = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][j] == 0) zeroI.push(i), zeroJ.push(j)
        }
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (zeroI.includes(i)) array[i][j] = 0
            if (zeroJ.includes(j)) array[i][j] = 0
        }
    }
    return array;
}

export const seqSum = array => {
    let finalSum = 0, currentSum = 0;
    for (let i = 0; i < array.length; i++) {
        let item = array[i]
        if (i === 0 || array[i] == array[i - 1] + 1) {
            currentSum += array[i]
            if (currentSum > finalSum) finalSum = currentSum
        }
        else currentSum = array[i]
    }
    return finalSum
}

//Write an algorithm which will find all pairs of number in an array which sum to a certain value.
// const sumPairs = (array, target) => {
//     const output = [];
//
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (i !== j) {
//                 let sum = array[i] + array[j]
//                 if (sum === target) {
//                     output.push([array[i], array[j]])
//                 }
//             }
//         }
//     }
//     return output;
// }

// tf solution
var summingPairs = (arr, value) => {
    var pairs = [];
    var map = {};
    for (var i=0; i<arr.length; i++) {
        var item = arr[i];
        if ((item) in map) {
            pairs.push([item, map[item]]);
        }
        else {
            map[value - item] = item;
        }
    }
    return pairs;
};
//-------------------------Zero 2D Array-------------------------//
export const zeroRowsColumns = mat => {
   const zeroRows = [];
   const zeroCols = [];

   for (var i=0; i<mat.length; i++) {
       var row = mat[i];
       for (var j=0; j<row.length; j++) {
           var item = row[j];
           if (item === 0) {
               zeroRows[i] = true;
               zeroCols[j] = true;
           }
       }
   }

   for (var i=0; i<mat.length; i++) {
       var row = mat[i];
       for (var j=0; j<row.length; j++) {
           if (zeroRows[i] || zeroCols[j]) {
               row[j] = 0;
           }
       }
   }
   return mat;
};

//----------------------Summing Pairs-------------------------//
export const summingPairs = (arr, value) => {
   const pairs = [];
   const map = {};
   for (var i=0; i<arr.length; i++) {
       var item = arr[i];
       console.log(map);
       if ((item) in map) {
           pairs.push([item, map[item]]);
       }
       else {
           map[value - item] = item;
       }
   }
   return pairs;
};

//-------------------------Balancing tree-------------------//
//My answer: pushes height up towards the root
export const treeBalance = bst => {
    if (bst == null) return 0

    const leftHeight = treeBalance(bst.left)
    if(leftHeight == - 1) return - 1

    const rightHeight = treeBalance(bst.right)
    if(rightHeight == - 1) return - 1

    if(Math.abs(leftHeight - rightHeight) > 1) return - 1

    return (1 + Math.max(leftHeight, rightHeight))

}
// Thinkful answer: checks each tree to see if it has 2 branches on either side of an empty branch, if so it's not balanced
export const isTreeBalanced = function(tree) {
    if (!tree.left) {
        return !(tree.right && (tree.right.left || tree.right.right));
    }

    if (!tree.right) {
        return !(tree.left && (tree.left.left || tree.left.right));
    }

    return isTreeBalanced(tree.left) && isTreeBalanced(tree.right);
};

//---------------------Rectangle Overlap-------------------//
export const findRangeOverlap = (point1, length1, point2, length2) => {
    const highestStartPoint = Math.max(point1, point2);
    const lowestEndPoint = Math.min(point1 + length1, point2 + length2);

    if (highestStartPoint >= lowestEndPoint) {
        return {
            startPoint: null,
            overlapLength: null
        };
    }

    const overlapLength = lowestEndPoint - highestStartPoint;

    return {
        startPoint: highestStartPoint,
        overlapLength: overlapLength
    };
}

export const intersectionOfRectangles = (rect1, rect2) => {
    const xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
    const yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

    if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
        return {
            leftX: null,
            bottomY: null,
            width: null,
            height: null,
        };
    }

    return {
        leftX: xOverlap.startPoint,
        bottomY: yOverlap.startPoint,
        width: xOverlap.overlapLength,
        height: yOverlap.overlapLength,
    };
}
