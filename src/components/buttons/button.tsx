import './Button.scss';
import 'material-icons'
import { ReactElement } from 'react';

type ButtonProps = {
    label: string;
    className: string;
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
    onClick?: () => void;
};

export const Button = (props :ButtonProps) => {
    return (
        <button
            className={`button ${props.className}`}
            onClick={props.onClick}
        >
            {props.rightIcon}
                {props.label}
            {props.leftIcon}
        </button>
    );
}