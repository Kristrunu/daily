import "./Button.css"

const Button = ({ btnClass, text, onClick }) => {
    return (
        <button className={`btn ${btnClass}`} onClick={onClick}>{text}</button>
    )
}

export default Button
