import React, {useEffect, useState} from 'react';
import ModalFormCreate from "../../components/catalog/ModalFormCreate/ModalFormCreate";
import CatalogList from "../../components/catalog/CatalogList/CatalogList";

const LOCAL_STORAGE_KEY = "catalog";

const Catalog = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageItems) {
            setItems(storageItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    function addItem(item) {
        setItems([item, ...items]);
    }

    function removeItem(id) {
        setItems(items.filter(item => item.id !== id));
    }


    return (
        <>
                <div className="row">
                    <ModalFormCreate addItem={addItem} />
                </div>
                <CatalogList
                    items={items}
                    removeItem={removeItem}
                />
        </>

    );
};

export default Catalog;