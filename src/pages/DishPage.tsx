import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { fetchOneSubCateogory } from "../store/features/category/oneSubCategory";
import SubCategory from "../components/SubCategory/SubCategory";

function DishPage() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const subcategory = useAppSelector((state) => state.oneSubCategory.oneSubCategory);
    const numberId = Number(id);

    useEffect(() => {
        dispatch(fetchOneSubCateogory(numberId));
    }, [dispatch, numberId]);

    console.log(subcategory);


    return (
        <div>
            {subcategory.map((item: any, index: number) => (
                <SubCategory key={index} subcategory={item} />
            ))}
        </div>
    );
}

export default DishPage;
