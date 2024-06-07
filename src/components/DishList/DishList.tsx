import React from "react";
import { Flex } from "antd";
import { DishListProps } from "./DishListProp.props";
import DishCard from "../DishCard/DishCard";
import { DishesType } from "../../helpers/interfaces/dishes.interface";

function DishList({ dish }: DishListProps) {
    return (
        <Flex style={{ flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }} gap={15}>
            {dish.map((item: DishesType, index: number) => (
                <DishCard key={index} dish={item} />
            ))}
        </Flex>
    );
}

export default React.memo(DishList);
