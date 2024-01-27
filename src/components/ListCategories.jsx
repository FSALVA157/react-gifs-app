import PropTypes from 'prop-types'
import { GifGrid } from './GifGrid';


export const ListCategories = ({categories}) => {
  return (
<>
    {
      categories.map(category => <GifGrid key={category} category={category} />        
      )
    }      
</>


  )
}

ListCategories.propTypes = {
  categories: PropTypes.array.isRequired
}


