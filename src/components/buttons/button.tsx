import './Button.scss';
import 'material-icons'

type ButtonProps = {
    label: string;
    className: string;
    onClick?: () => void;
};

export const Button = (props :ButtonProps) => {
    return (
        <button
            className={`button ${props.className}`}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
}