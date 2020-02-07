import React from "react"
import styled from 'styled-components'
import RestaurantMenu from "../RestaurantMenu/RestaurantMenu"

const CategoryTitle = styled.h1`
    width: 95.12%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
    margin: 8px auto;
    padding: 8px 0;
    border-bottom: 1px solid black;
`

const Card = styled.div`
    width: 95.12%;
    margin: 0 auto;
    margin-top: 8px;
`

function RestaurantMenuTitle(props) {

    function productOfCategory(item) {
        return item.category === props.categoryTitle;
    }

    return (
        <Card>
            <CategoryTitle>{props.categoryTitle}</CategoryTitle>
            {props.products.filter(productOfCategory).map(product => (<RestaurantMenu
                product={product}
            />) )}
        </Card>
    )
}

export default RestaurantMenuTitle