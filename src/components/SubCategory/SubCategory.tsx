import { SubCategoryProps } from './SubCategory.props'
import getSubCategoryTitleByLanguage from '../../helpers/functions/getSubCategoryTitleByLanguage'
import { Flex } from 'antd'
import styles from "./subcategory.module.scss"

function SubCategory({ subcategory }: SubCategoryProps) {

    return (
        <div>
            <Flex justify={'center'} align={'center'}>
                <hr className={styles.hr} />
                <h1 className={styles.tur_title}>{getSubCategoryTitleByLanguage(subcategory)}</h1>
                <hr className={styles.hr} />
            </Flex>
        </div>
    )
}

export default SubCategory
