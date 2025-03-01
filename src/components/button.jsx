import './components.css';
import rightArrow from '../assets/tabler-icon-arrow-narrow-right.svg';
export const Button = ({size, label, type}) => {

    const handleClick = () => {
        if (type === 'to-main') {
            window.location.href = 'https://doka.guide/css/combined-selectors/';
        } else {

        }
    }

    return(
        <button onClick={handleClick} className={`button ${size}`}>
            <span className={`button__label ${size}`}>{label}</span>
            <img src={rightArrow} alt={'right-arrow'} width={size === 'small' ? 24 : 48} />
        </button>
    )
}