import './components.css';
export const Card = ({text}) => {
    return(
        <div className="card">
            <h4 className="h4">
                {text}
            </h4>
        </div>
    )
}