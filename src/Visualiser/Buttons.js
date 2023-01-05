import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';



function Buttons({ text, onClick, disabled }) {

    return (
        <Button 
		variant="primary" 
		disabled={disabled}
		onClick={onClick}
		>
			{text}
		</Button>
    );
}

export default Buttons;
