import { SubCategoryProps } from './SubCategory.props'
import getSubCategoryTitleByLanguage from '../../helpers/functions/getSubCategoryTitleByLanguage'

function SubCategory({ subcategory }: SubCategoryProps) {



    return (
        <div>
            <h1>{getSubCategoryTitleByLanguage(subcategory)}</h1>

        </div>
    )
}

export default SubCategory
