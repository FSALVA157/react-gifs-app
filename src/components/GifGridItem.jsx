import PropTypes from 'prop-types'


export const GifGridItem = ({image}) => {
  return (
    <div className='card'>
    <img src={image.url} alt={image.title} />
    <p>{image.title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
  image: PropTypes.object.isRequired
}
