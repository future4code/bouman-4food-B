import React, { Component } from "react"
import RestaurantDetails from "../../components/RestaurantDetails/RestaurantDetails"
import RestaurantMenu from "../../components/RestaurantMenu/RestaurantMenu"
import RestaurantMenuTitle from "../../components/RestaurantMenuTitle/RestaurantMenuTitle"
import { getPostDetails } from "../../actions/restaurant"
import { connect } from "react-redux"


class RestaurantPage extends Component {

    componentDidMount() {
        this.props.getPostDetails("1")
    }

    render() {

        const { details } = this.props

        let categories = []

        if (details && details.products) {
            details.products.forEach(item => {
                categories.push(item.category)
            })
            categories = [...new Set(categories)]
        }
        console.log(categories)

       


        return (
            <>
                <RestaurantDetails
                    logo={details.logoUrl}
                    title={details.name}
                    category={details.category}
                    deliveryTime={details.deliveryTime}
                    shipping={details.shipping}
                    address={details.address}
                />

                {categories && categories.map(category => (
                    <RestaurantMenuTitle products={details.products} categoryTitle={category}/>
                ))}

            </>
        )
    }
}

const mapStateToProps = state => ({
    details: state.restaurant.allDetailsRestaurant,
})

const mapDispatchToProps = dispatch => ({
    getPostDetails: restaurantId => dispatch(getPostDetails(restaurantId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage)