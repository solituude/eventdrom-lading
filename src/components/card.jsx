import './components.css';
export const Card = ({text, isStatic=false}) => {
    return(
        <div className={`card ${isStatic ? "static" : ''}`}>
            <h4 className="h4">
                {text}
            </h4>
        </div>
    )
}