import PropTypes from 'prop-types'
const ListHighlight = ({highlightList}) => {
    return (
        <>
            <div className="mb-1">
                <span>- {highlightList}</span>
            </div>
        </>
    )
}
export default ListHighlight
ListHighlight.propTypes = {
    highlightList: PropTypes.string
}