import { List } from "@material-ui/core";
import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import './catalog-list.css'

function CatalogList({ items, removeItem}) {

    return (
        <>
            <List>
                {items.map(item => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        removeItem={removeItem}
                    />
                ))}
            </List>
            {items.length === 0 ? <h3 className="catalog-list_h3">Your list is empty</h3> : null}
        </>

    );
}

export default CatalogList;