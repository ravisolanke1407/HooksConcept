import React, { createContext, useState } from 'react'

export const ProductContext = createContext()

export const ProductProvider = props => {
    const [products, setProducts] = useState([
        {
            name: 'Item 1',
            quantity: 5
        },
        {
            name: 'Item 1',
            quantity: 6
        },
        {
            name: 'Item 1',
            quantity: 7
        }
    ])

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}
