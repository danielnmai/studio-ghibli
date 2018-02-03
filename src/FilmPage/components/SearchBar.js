import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilm, filterFilms } from '../../actions';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  handleUpdateInput = (searchText) => {
    console.log(searchText)
    const { films } = this.props.films;
    const filterFilms = films.filter(film => film.title.includes(searchText))
    this.props.filterFilms(filterFilms)
    this.setState({searchText: searchText});
  };

  handleNewRequest = (title) => {
    const { films } = this.props.films;
    let film = films.find(item => item.title === title)
    this.props.fetchFilm(film.id);
    this.setState({
      searchText: '',
    });
  };

  render() {
    const { films } = this.props.films;
    if(films) {
      return (
        <MuiThemeProvider>
          <AutoComplete
            hintText='Type in Your Favorite Film Titles'
            dataSource={films.map((info) => info.title)}
            searchText={this.state.searchText}
            onUpdateInput={this.handleUpdateInput}
            onNewRequest={this.handleNewRequest}
            filter={AutoComplete.caseInsensitiveFilter}
            maxSearchResults={10}
            fullWidth={true}
            />
        </MuiThemeProvider>
      )
    }
    return null
  }
}
function mapStateToProps({films}) {
  return {films}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchFilm, filterFilms
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
