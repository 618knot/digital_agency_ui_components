import './Button.scss';

type ButtonProps = {
    label: string;
    className: string;
    onClick?: () => void;
};

export const Button = (props :ButtonProps) => {
    return (
        <button
            className={props.className}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
}