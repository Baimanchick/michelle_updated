import { Carousel } from "antd";
import styles from "./sldieMenu.module.scss";

export default function SliderMenu() {
    const categories = [
        { id: 1, title: "Category 1" },
        { id: 2, title: "Category 2" },
        { id: 3, title: "Category 3" },
        { id: 4, title: "Category 4" },
        { id: 5, title: "Category 5" },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.main_container}>
                <Carousel
                    dots={false}
                    centerMode={true}
                    infinite={true}
                    slidesToShow={3}
                    speed={500}
                    centerPadding="0"
                    style=
                    {{
                        backgroundColor: '#f9ede6',
                        // backgroundColor: '#000',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    {categories.map((categoryM) => (
                        <div key={categoryM.id} className={styles.slider_items}>
                            <h3>{categoryM.title}</h3>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>

    );
}
