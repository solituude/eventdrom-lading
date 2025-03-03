import './components.css';
import '../style.css';
export const Block = ({number, text}) => {
    return(
        <div className={"block"}>
            <h1 className={"h1 dark"}>{number}</h1>
            <h4 className={"h4"}>{text}</h4>
        </div>
    )
}