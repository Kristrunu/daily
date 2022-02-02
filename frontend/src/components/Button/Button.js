import "./Button.css"

const Button = ({ btnClass, text, onClick, type, disabled }) => {
    return (
        <button className={`btn ${btnClass}`} onClick={onClick} type={type} disabled={disabled}>{text}</button>
    )
}

export default Button
