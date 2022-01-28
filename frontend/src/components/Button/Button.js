import "./Button.css"

const Button = ({ btnClass, text }) => {
    return (
           <button className={`btn ${btnClass}`}>{text}</button>
        
    )
}

export default Button
