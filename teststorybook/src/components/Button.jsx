import PropTypes from 'prop-types';

export default function Button( {text, buttonTextColor, buttonBackgroundColor, buttonBorder, buttonBorderSize, buttonBorderColor} ) {

    return(
        <button style={{color: buttonTextColor,
        backgroundColor: buttonBackgroundColor,
        border: `${buttonBorder} ${buttonBorderSize} ${buttonBorderColor}`}}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    buttonTextColor: PropTypes.string,
    buttonBackgroundColor: PropTypes.string,
    buttonBorder: PropTypes.string,
    buttonBorderSize: PropTypes.string,
    buttonBorderColor: PropTypes.string,
};