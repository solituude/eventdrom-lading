import './components.css';

export const Button = ({size, label, type}) => {

    const handleClick = () => {
        if (type === 'to-main') {
            window.location.href = 'https://doka.guide/css/combined-selectors/';
        } else {

        }
    }
    const sizeNumber = size === 'small' ? 24 : 48;

    return(
        <button onClick={handleClick} className={`button ${size}`}>
            <span className={`button__label ${size}`}>{label}</span>
            <svg width={sizeNumber} height={sizeNumber} viewBox={`0 0 48 49`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24.5H38M38 24.5L30 32.5M38 24.5L30 16.5"
                      className={size} stroke-width="4" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>
        </button>
    )
}