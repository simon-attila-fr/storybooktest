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
    /** 
     * Choose a value to define the style of the border of your element:
    */
    border: PropTypes.oneOf(['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']),
    borderSize: PropTypes.string,
    borderColor: PropTypes.string,
};
Button.defaultProps = {
    text: "Default text"
}