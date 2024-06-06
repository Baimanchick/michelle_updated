import React from "react";
import { List } from "antd";
import { DishListProps } from "./DishListProp.props";
import DishCard from "../DishCard/DishCard";
import { DishesType } from "../../helpers/interfaces/dishes.interface";

function DishList({ dish, grid }: DishListProps) {
    return (
        <List
            size={"small"}
            grid={grid}
            loading={!dish}
            dataSource={dish}
            renderItem={(item: DishesType) => (
                <List.Item
                    key={item.id}
                    style={{
                        background: "transparent",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        padding: 0,
                    }}
                >
                    <DishCard dish={item} />
                </List.Item>
            )}
        />
    );
}

export default React.memo(DishList);
