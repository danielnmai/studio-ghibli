import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCharacter } from '../../actions';
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
    this.setState({searchText: searchText});
  };

  handleNewRequest = (name) => {
    const { characters } = this.props.characters;
    let character = characters.find(item => item.name === name)
    this.props.fetchCharacter(character.id);
    this.setState({
      searchText: '',
    });
  };


  render() {
    const { characters } = this.props.characters;
    if(characters) {
      return (
        <MuiThemeProvider>
          <AutoComplete
            hintText='Type in Your Favorite Character Names'
            dataSource={characters.map((info) => info.name)}
            onUpdateInput={this.handleUpdateInput}
            onNewRequest={this.handleNewRequest}
            filter={AutoComplete.caseInsensitiveFilter}
            fullWidth={true}
            />
        </MuiThemeProvider>
      )
    }
    return null

  }
}
function mapStateToProps({characters}) {
  return {characters}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCharacter
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
