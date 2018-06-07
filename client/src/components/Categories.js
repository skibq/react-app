import React from 'react'
import { SingleCategory } from './SingleCategory'
import AddCategory from './AddCategory'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
})

const Categories = ({categories, reorder}) => {
  const onDragEnd = (result) => {
    if (!result.destination) {
      return
    }
    reorder(result)
  }
  return (
    <Grid container spacing={16} className={'categories'} alignItems={'center'} justify={'center'} >
      <Grid item xs={12} md={6} >
        <Paper>
          <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} >
                    <List>
                      { categories.map((category, index) =>
                          <SingleCategory category={category} index={index} category_ID={category.category_ID} key={category.category_ID}/>
                      )}
                    </List>
                  </div>
                )}
              </Droppable>
          </DragDropContext>
        </Paper>
        <AddCategory />
      </Grid>
    </Grid>
  )
}
export default withStyles(styles)(Categories)

