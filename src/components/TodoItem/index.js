// Write your code here
import './index.css'

const TodoItems = props => {
  const {todos, deleteTodo} = props
  const {id, title} = todos
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="container-todo">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItems
