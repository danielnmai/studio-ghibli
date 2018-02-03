import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchFilm} from '../../actions';
import Item from '../../common/Item';
import FilmInfo from './FilmInfo'

class FilmDetail extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchFilm(id);
  }
  render() {
    const {film} = this.props.films
    console.log(this.props.films)
    if (film) {
      return (<div className='container'>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>
                <div className='row'>
                  <div className='col-sm-6'>
                    <strong>Film</strong>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <FilmInfo info={film}/>
          </tbody>
        </table>
      </div>)
    }
    return <div>Loading</div>
  }
}

function mapStateToProps({films}) {
  return {films}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchFilm
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail);
