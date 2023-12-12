import { useTodo } from '../../providers/TodoProvider'

import './todolist.scss'

function TodoList() {
  const { items, deleteItem } = useTodo()

  return (
    <div className="TodoList">
      {items.map((item, index) => (
        <div className="TodoListItem" key={index}>
          <span className="TodoListItemTitle">{item.title}</span>
          <span className="TodoListItemDelete" onClick={() => deleteItem(index)}>
            &#10005;
          </span>
        </div>
      ))}
    </div>
  )
}

export default TodoList
