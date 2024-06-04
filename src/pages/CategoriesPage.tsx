import React, { useEffect } from 'react';
import { RootState } from '../store/store';
import { fetchCategory } from '../store/features/category/categoriesSlice';
import { CategoryType } from '../helpers/interfaces/categories.interface';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getSelectedLanguage } from '../helpers/functions/getSelectedLanguage';

const CategoriesPage = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state: RootState) => state.category.category);
    const selectedLanguage = getSelectedLanguage();
    // const categoriesWithSelectedLanguage = data.map((category: any) => ({
    //     ...category,
    //     title: category[`title_${selectedLanguage}`],
    // }));

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);

    console.log(categories);
    console.log(selectedLanguage);



    return (
        <div>
            {categories.map((category: CategoryType) => (
                <div key={category.id}>
                    {/* <img src={category.image} alt={category.title} /> */}
                    {/* <h1>{category.title}</h1> */}
                    <h1>{`${category.title_}${selectedLanguage}`}</h1>
                </div>
            ))}
        </div>
    );
};

export default CategoriesPage;
