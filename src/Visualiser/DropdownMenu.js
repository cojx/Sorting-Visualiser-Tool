import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



function DropdownMenu( { onClick, disabled })  {
	const [value, setValue]=useState("Select Algorithm...");
	const handleSelect = (e) => {
		console.log(e)
		setValue(e);  
	}

	return (
		<DropdownButton 
		className="w-100"
		container="body"
		id="dropdown-basic-button" 
		variant="secondary" 
		title={value}
		onSelect={handleSelect}
		disabled={disabled}
		>
			<Dropdown.Item eventKey="Merge Sort" id="mergeSort" onClick={onClick}>Merge Sort</Dropdown.Item>
			<Dropdown.Item eventKey="Quick Sort" id="quickSort" onClick={onClick}>Quick Sort</Dropdown.Item>
			<Dropdown.Item eventKey="Bubble Sort" id="bubbleSort" onClick={onClick}>Bubble Sort</Dropdown.Item>
			<Dropdown.Item eventKey="Heap Sort" id="heapSort" onClick={onClick}>Heap Sort</Dropdown.Item>
			<Dropdown.Item eventKey="Selection Sort" id="selectionSort" onClick={onClick}>Selection Sort</Dropdown.Item>
			<Dropdown.Item eventKey="Insertion Sort" id="insertionSort" onClick={onClick}>Insertion Sort</Dropdown.Item>
		</DropdownButton>
  );
}

export default DropdownMenu;
