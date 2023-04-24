import './index.css'
import StyledButtonImage from './styledButtonImage'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickThumbnail}>
        <StyledButtonImage
          src={thumbnailUrl}
          alt={thumbnailAltText}
          active={isActive}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
