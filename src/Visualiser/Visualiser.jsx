import React from 'react';
import './Visualiser.css';
import {getMergeSort, getQuickSort, getBubbleSort, getHeapSort, getSelectionSort, getInsertionSort} from '../Algorithms/Algorithms.js';

const ANIMATION_SPEED_MS = 3;
const NUMBER_OF_ARRAY_BARS = 200;
const PRIMARY_COLOUR = 'turquoise';
const SECONDARY_COLOUR = 'red';

export default class Visualiser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    // Generate new array
    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({array});
    }


    // MERGE SORT
    mergeSort() {
        const animations = getMergeSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColourChange = i % 3 !== 2;
            
            // Perform colour change
            if (isColourChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const colour = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
                
                setTimeout(() => {
                    barOneStyle.backgroundColor = colour;
                    barTwoStyle.backgroundColor = colour;
                }, i * ANIMATION_SPEED_MS);
            } 

            // Perform location and size change to array bars
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
            }
        }
    }


    // QUICK SORT
    quickSort() {
        const animations = getQuickSort(this.state.array, 0, this.state.array.length - 1);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            //const isColourChange = i % 3 !== 2;
            if (animations[i].length < 3) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const colour = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
                
                setTimeout(() => {
                    barOneStyle.backgroundColor = colour;
                    barTwoStyle.backgroundColor = colour;
                }, i * ANIMATION_SPEED_MS);
            } 
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    barTwoStyle.height = `${newHeight2}px`;
            }, i * ANIMATION_SPEED_MS);
            }

        }
    }


    // BUBBLE SORT
    bubbleSort() {
        const animations = getBubbleSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            //const isColourChange = i % 3 !== 2;
            if (animations[i].length < 3) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const colour = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
                
                setTimeout(() => {
                    barOneStyle.backgroundColor = colour;
                    barTwoStyle.backgroundColor = colour;
                }, i * ANIMATION_SPEED_MS);
            } 
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    barTwoStyle.height = `${newHeight2}px`;
            }, i * ANIMATION_SPEED_MS);
            }
        }
    }


    // HEAP SORT
    heapSort() {
        const animations = getHeapSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            //const isColourChange = i % 3 !== 2;
            if (animations[i].length < 3) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const colour = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
                
                setTimeout(() => {
                    barOneStyle.backgroundColor = colour;
                    barTwoStyle.backgroundColor = colour;
                }, i * ANIMATION_SPEED_MS);
            } 
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    barTwoStyle.height = `${newHeight2}px`;
            }, i * ANIMATION_SPEED_MS);
            }
        }
    }


    // SELECTION SORT
    selectionSort() {
        const animations = getSelectionSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            //const isColourChange = i % 3 !== 2;
            if (animations[i].length < 3) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const colour = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
                
                setTimeout(() => {
                    barOneStyle.backgroundColor = colour;
                    barTwoStyle.backgroundColor = colour;
                }, i * ANIMATION_SPEED_MS);
            } 
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    barTwoStyle.height = `${newHeight2}px`;
            }, i * ANIMATION_SPEED_MS);
            }
        }
    }


    // INSERTION SORT
    insertionSort() {
        const animations = getInsertionSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColourChange = i % 3 !== 2;
            if (isColourChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const colour = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
                
                setTimeout(() => {
                    barOneStyle.backgroundColor = colour;
                    barTwoStyle.backgroundColor = colour;
                }, i * ANIMATION_SPEED_MS);
            } 
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
            }
        }
    }





    render() {
        const {array} = this.state;
        return (
            <div className='main-container'>
                <div className='array-container'>
                    {array.map((value, idx) => (
                        <div 
                        className='array-bar' 
                        key={idx} 
                        style={{
                            backgroundColor: PRIMARY_COLOUR,
                            height: `${value}px`,
                        }}>
                        </div>
                    ))}
                </div>
 
                <div className='button-container'>   
                    <button onClick={() => this.resetArray()}>Generate New Array</button>{' '}
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>{' '}
                    <button onClick={() => this.quickSort()}>Quick Sort</button>{' '}
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>{' '}
                    <button onClick={() => this.heapSort()}>Heap Sort</button>{' '}
                    <button onClick={() => this.selectionSort()}>Selection Sort</button>{' '}
                    <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                </div> 
            </div>
        );
    }
}


// Random Array Generator
// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}