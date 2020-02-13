import React from "react";
import { connect } from "react-redux";
import NavMenu from "../../components/NavMenu";
import FooterNav from "../../components/FooterNav";
import RestaurantCard from "../../components/RestaurantCard";
import { SearchForm } from '../../style/feed';
import SearchIcon from '../../resources/search.svg'
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import OrderCard from "../../components/OrderCard"
import { getAllRestaurants, setSelectedCategory } from '../../actions/restaurant';
import { push } from "connected-react-router";
import { routes } from "../Router";



export class FeedPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {},
    }
  }


  componentDidMount() {
    const token = window.localStorage.getItem("token")
    const { getAllRestaurants } = this.props

    if(token === null) {
      this.props.goToLogin()
    } 
    getAllRestaurants()
  }


  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ form: { ...this.state.form, [name]: value } });
  };


  fetchRestarantByName = (filteredRestaurants) => {
    const { form } = this.state
    
    if (form.restaurant !== undefined) {
      return filteredRestaurants.filter( restaurant => {
        const restaurantName = restaurant.name.toLowerCase();
        const searchedName = form.restaurant.toLowerCase();
      
        return restaurantName.includes(searchedName)
      })
    } else {
      return filteredRestaurants
    }
  }


  selectCategory = (event) => {
    const category = event.target.getAttribute('name')
    this.props.setSelectedCategory(category)
  }


  fetchRestaurantOfCategory = () => {
    const { allRestaurants, selectedCategory } = this.props 

    if (selectedCategory) {
      return allRestaurants.filter( restaurant => {
        return restaurant.category === selectedCategory
      })
    } else {
      return allRestaurants
    }
  }

  changePageOnClickIcon = (event) => {
    const page = event.target.getAttribute('name')
    switch(page){
      case 'Feed':
        this.props.goToFeed()
        break
      case 'Cart':
        this.props.goToCart()
        break
      case 'Profile':
        this.props.goToProfile()
        break
    }
  }


  render() {
    const restaurantOfCategory = this.fetchRestaurantOfCategory();
    const filteredRestaurant = this.fetchRestarantByName(restaurantOfCategory);
    const { activeOrder } = this.props
    
    return (
      <div>
        <SearchForm>
            <FormControl fullWidth variant="outlined">
                <OutlinedInput
                  placeholder='Restaurante'
                  name='restaurant'
                  value={this.state.form.restaurant || ""}
                  onChange={this.handleInputChange}
                  startAdornment={<InputAdornment position="start"><img src={SearchIcon}/></InputAdornment>}
                />
            </FormControl>
        </SearchForm>
        <NavMenu selectCategory={this.selectCategory}/>
        <RestaurantCard restaurants={filteredRestaurant}/>
        {activeOrder !== null ? <OrderCard order={activeOrder}/> : null}
        <FooterNav changePage={this.changePageOnClickIcon}/>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  allRestaurants: state.restaurant.allRestaurants,
  selectedCategory: state.restaurant.selectedCategory,
  activeOrder: state.restaurant.activeOrder,
});

  
const mapDispatchToProps = dispatch => ({
  goToLogin: () => dispatch(push(routes.Login)),
  goToCart: () => dispatch(push(routes.Cart)),
  goToProfile: () => dispatch(push(routes.Profile)),
  getAllRestaurants: () => dispatch(getAllRestaurants()),
  setSelectedCategory: (category) => dispatch(setSelectedCategory(category))
})


export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);