import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    // const categories = ['One Punch', 'Dragon Ball'];

    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'New']);
    //     setCategories(cats => [...cats, 'New']); // cats === estado anterior
    // };

    return (
        <>
            <h2> GifExpert </h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((category) => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    );
}