/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg'
import { StackList } from './components/stacks'
import { BinarySearchTree, findThirdLargest, treeBalance } from './components/binary-tree'
import { mergeSort, nSort } from './components/merge-sort'
import LinkedList  from './components/linked-list'
import { zeroColumns, summingPairs } from './components/interview-algos'

class App extends Component {
render(){
//-------------------------Put code Here-------------------------//
//[1, 2, 3, 4 ,5], 6 -> [[4,2], [5,1]]

const data = [1, 2, 3, 4, 5]
console.log(summingPairs(data, 6));


//-------------------------Don't put code here-------------------------//
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </div>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App
