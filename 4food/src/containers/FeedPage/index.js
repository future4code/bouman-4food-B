import React from "react";
import { connect } from "react-redux";
import NavMenu from "../../components/NavMenu";
import PageNav from "../../components/PageNav";
import FooterNav from "../../components/FooterNav";
import RestaurantCard from "../../components/RestaurantCard";
import { SearchForm } from '../../style/feed';
import SearchIcon from '../../resources/search.svg';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';



export class FeedPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {},
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ form: { ...this.state.form, [name]: value } });
  };


  render() {
    return (
      <div>
        <PageNav/>
        <SearchForm onSubmit={this.handleOnSubmit}>
            <FormControl fullWidth variant="outlined">
                <OutlinedInput
                    placeholder='Restaurante'
                    name='restaurant'
                    value={this.state.form.day}
                    onChange={this.handleInputChange}
                    startAdornment={<InputAdornment position="start"><img src={SearchIcon}/></InputAdornment>}
                />
            </FormControl>
        </SearchForm>
        <NavMenu/>
        <RestaurantCard/>
        <FooterNav/>
      </div>
    )
  }
}


export default connect(null, null)(FeedPage);