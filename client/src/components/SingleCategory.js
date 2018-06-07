import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import FolderIcon from '@material-ui/icons/Folder'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'


class SingleCategory extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickDelete = this.handleClickDelete.bind(this)
  }

  handleClickDelete() {
    console.log(this.props.category_ID)
  }
  render() {
    return(
      <Draggable key={this.props.index} draggableId={this.props.index} index={this.props.index}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={'categories__single-category single-category'}
          key={this.props.category.category_id}>
            <ListItem divider button>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
              <ListItemText primary={this.props.category.category_name} />
              <ListItemSecondaryAction>
                <IconButton className={'single-category__delete'} aria-label="Delete" onClick={this.handleClickDelete}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </div>
        )}
      </Draggable>
      )
  }
}
export { SingleCategory }