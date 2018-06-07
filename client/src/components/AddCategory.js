import React from 'react'
import { addCategory } from '../actions/index'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

class AddCategory extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClickAdd = this.handleClickAdd.bind(this)
    this.state = {
      add_category_name: ''
    }
  }
  handleClickAdd() {
    if (this.state.add_category_name !== '') {
      this.props.dispatch(addCategory(this.state.add_category_name))
      this.setState({
        add_category_name: ''
      })
    }
  }
  handleChange(e) {
    this.setState({
      add_category_name: e.target.value
    })
  }
  render() {
    return (
      <div className={'add-category'}>
        <label className={'categories__add-label'}>Add Category</label>
        <input
          type="text"
          placeholder={'New Category Name'}
          className={'categories__add-input'}
          value={this.state.add_category_name}
          onChange={this.handleChange}
        />
        <hr/>
        <Button color={"primary"} variant={'outlined'} className={'categories__add-btn'} onClick={this.handleClickAdd}>Add Category</Button>
      </div>
    )
  }
}
export default connect()(AddCategory)