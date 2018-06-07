import { connect } from 'react-redux'
import Categories from '../components/Categories'
import { reorder } from '../actions'

const mapStateToProps = state => ({categories: state.categories})

const mapDispatchToProps = dispatch => ({
  reorder: result => dispatch(reorder(result))
})



export default connect(mapStateToProps, mapDispatchToProps)(Categories)