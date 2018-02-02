import React from 'react';
import FilmInfo from './FilmInfo'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchAllFilms} from '../../actions'

class FilmList extends React.Component {

  componentDidMount() {
    this.props.fetchAllFilms();
  }

  renderFilmInfo(data) {
    return <FilmInfo key={data.id} info={data}/>
  }

  render() {
    const {films} = this.props.films;
    console.log(this.props)
    if (films) {

      return (<table className="table table-hover">
        <thead>
          <tr>
            <th>
              Films
            </th>
          </tr>
        </thead>
        <tbody>
          {films.map(data => this.renderFilmInfo(data))}
        </tbody>
      </table>)

    }
    return <div>Loading</div>
  }

}

function mapStateToProps({films}) {
  return {films}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAllFilms
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmList)
