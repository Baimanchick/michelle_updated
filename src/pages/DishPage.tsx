import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect, useState } from "react";
import { fetchOneSubCateogory, setOneSubCategory } from "../store/features/category/oneSubCategory";
import { fetchDish, resetDishes } from "../store/features/dish/dishesSlice";
import SubCategory from "../components/SubCategory/SubCategory";
import DishList from "../components/DishList/DishList";
import DishCard from "../components/DishCard/DishCard";

function DishPage() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const subcategories = useAppSelector((state) => state.oneSubCategory.oneSubCategory);
    const dishesBySubcategory = useAppSelector((state) => state.dish.dishesBySubcategory);
    const [loading, setLoading] = useState(true);

    const numberId = Number(id);

    useEffect(() => {
        const fetchSubcategoriesAndDishes = async () => {
            setLoading(true);
            try {
                const subcategoryResponse = await dispatch(fetchOneSubCateogory(numberId)).unwrap();
                const subcategoryPromises = subcategoryResponse.oneSubCategory.map((subcategory) => {
                    return dispatch(fetchDish(subcategory.id));
                });
                await Promise.all(subcategoryPromises);
            } finally {
                setLoading(false);
            }
        };

        fetchSubcategoriesAndDishes();

        return () => {
            dispatch(setOneSubCategory({ oneSubCategory: [] }));
            dispatch(resetDishes());
        };
    }, [dispatch, numberId]);

    return (
        <div style={{ padding: 20 }}>
            {loading ? (
                <div>Loading...</div>
            ) : (
                subcategories.map((subcategory, index) => (
                    <div key={index}>
                        <SubCategory subcategory={subcategory} />
                        {dishesBySubcategory[subcategory.id] && (
                            <>
                                <DishList
                                    dish={dishesBySubcategory[subcategory.id]}
                                    grid={{
                                        gutter: 10,
                                        column: 2,
                                        xxl: 2,
                                        xl: 2,
                                        lg: 2,
                                        md: 2,
                                        sm: 2,
                                        xs: 2,
                                    }}
                                />
                            </>
                        )}
                    </div>
                ))
            )}
        </div>
    );
}

export default DishPage;
