import React, { useEffect, useState } from "react";

export function ItemsList({ getItems }) {
    const [items, setitems] = useState([])

    useEffect(() => {
        const newItems = getItems()
        setitems(newItems)
        console.log('list render')
    }, [getItems])

    return (
        <ul>
            { items.map(i => <li key={i}>{i}</li>) }
        </ul>
    )
}