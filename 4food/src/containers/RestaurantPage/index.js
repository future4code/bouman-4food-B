import React from "react"
import RestaurantDetails from "../../components/RestaurantDetails"
import RestaurantMenu from "../../components/RestaurantMenu"


function RestaurantPage(props){

    return(
        <>
            <RestaurantDetails />
            <RestaurantMenu />
        </>
    )
}

export default RestaurantPage