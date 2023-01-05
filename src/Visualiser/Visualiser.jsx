import React from 'react';
import './Visualiser.css';
import {getMergeSort, getQuickSort, getBubbleSort, getHeapSort, getSelectionSort, getInsertionSort} from '../Algorithms/Algorithms.js';
import NavBar from './NavBar'
import DropdownMenu from './DropdownMenu';
import Buttons from './Buttons';


const ANIMATION_SPEED_MS = 3;
const NUMBER_OF_ARRAY_BARS = 200;
const PRIMARY_COLOUR = 'turquoise';
const SECONDARY_COLOUR = 'red';


// Generate random numbers for array
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export default class Visualiser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            original_array: [],
            array: [],
            generate_array_option: false,
            dropdown_option: false,
            sort_option: true,
            algorithm: '',
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    // Generate new array
    resetArray() {
        const original_array = [];
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            var random_int = randomIntFromInterval(5, 500)
            original_array.push(random_int);
            array.push(random_int);
        }
        this.setState({ original_array: original_array})
        this.setState({ array: array })
    }

    // Perform sort
    performSorting(animations) {
        function timeout() {
            const delay = animations.length * ANIMATION_SPEED_MS;
            return new Promise((resolve) => setTimeout(resolve, delay));
        }

        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            
            // Perform colour change
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

            // Perform location and size change to array bars
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    barTwoStyle.height = `${newHeight2}px`;
            }, i * ANIMATION_SPEED_MS);
            };
        };

        // Reactivate dropdown menu after sorting is completed
        timeout().then(() => 
            this.setState({generate_array_option: false})
        );
    }

    // Handle sorting 
    handleSorting() {
        
        // Disable all buttons during sort
        this.setState({generate_array_option: true})
        this.setState({dropdown_option: true})
        this.setState({sort_option: true})

        switch (this.state.algorithm) {
            case "mergeSort":
                var animations = getMergeSort(this.state.array);
                this.performSorting(animations);
                break;

            case "quickSort":
                var animations = getQuickSort(this.state.array, 0, this.state.array.length - 1);
                this.performSorting(animations);
                break;

            case "bubbleSort":
                var animations = getBubbleSort(this.state.array);
                this.performSorting(animations );
                break;

            case "heapSort":
                var animations = getHeapSort(this.state.array);
                this.performSorting(animations);
                break;

            case "selectionSort":
                var animations = getSelectionSort(this.state.array);
                this.performSorting(animations);
                break;

            case "insertionSort":
                var animations = getInsertionSort(this.state.array);
                this.performSorting(animations);
                break;

            default:
                break;
        }
    }





    render() {
        const {original_array} = this.state;
        return (
            <>
            <div className='navbar-container'>
                <NavBar/>
            </div>
            
            <div className='main-container'>

                <div className='button-container'> 
                    <Buttons 
                    text="Generate New Array"
                    onClick={() => this.setState({dropdown_option: false}, function () {
                        this.resetArray()
                    })}
                    disabled={this.state.generate_array_option}
                    />{' '}

                    <Buttons
                    text="Sort"
                    onClick={() => this.handleSorting()}
                    disabled={this.state.sort_option}
                    />{' '}

                    <DropdownMenu
                    onClick={(e) => this.setState({algorithm : e.target.id}, function () {
                        this.setState({sort_option: false});
                    })}
                    disabled={this.state.dropdown_option}
                    />
                </div> 

                <div className='array-container'>
                    {original_array.map((value, idx) => (
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

            </div>
            </>
        );
    }
}

