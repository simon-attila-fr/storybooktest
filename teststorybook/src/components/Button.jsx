import PropTypes from 'prop-types';

export default function Button({
    text,
    textColor,
    backgroundColor,
    border,
    borderSize,
    borderColor,
}) {
    return(
        <button
            style={{
                color: textColor,
                backgroundColor: backgroundColor,
                border: `${border} ${borderSize} ${borderColor}`
            }}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    border: PropTypes.string,
    borderSize: PropTypes.string,
    borderColor: PropTypes.string,
};