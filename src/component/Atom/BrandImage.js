import PropTypes from 'prop-types'
const BrandImage = ({ width, height, addStyle}) => {
    return(
        <img alt="ur brand logo" src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" width={width} height={height} className={`d-inline-block align-text-top rounded-circle ${addStyle}`}/>
    )
}
export default BrandImage

BrandImage.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    addStyle: PropTypes.string,
}
BrandImage.defaultProps = {
    width: "30",
    height: "23",
    className: "d-inline-block align-text-top rounded-circle",
}