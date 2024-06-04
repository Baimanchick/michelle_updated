import { Card, Flex, Typography } from "antd"
import getCategoryTitleByLanguage from "../../helpers/functions/getCategoryTitleByLanguage"
import { CategoryCardProps } from "./CategoryCard.props"
import styles from "./categoryCard.module.scss"

const { Title } = Typography

function CategoryCard({ category }: CategoryCardProps) {
    return (
        <Card
            cover={
                <img className={styles.image} src={category.image} alt={category.title_en} />
            }
            classNames={{ cover: styles.CustomCover, body: styles.CustomBody }}
            className={styles.CardCustom}
        >
            <Flex className={styles.TitleFlex} >
                <div className={styles.CustomTitle}>{getCategoryTitleByLanguage(category)}</div>
            </Flex>
        </Card>
    )
}

export default CategoryCard