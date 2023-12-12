import React, { createContext, useContext, useState, PropsWithChildren } from 'react'

export type TodoItem = {
  title: string
}

export type TodoContextType = {
  items: TodoItem[]
  addItem: (title: string) => void
  deleteItem: (index: number) => void
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export const TodoProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [items, setItems] = useState<TodoItem[]>([])

  function addItem(title: string) {
    setItems((prevState) => [{ title }, ...prevState])
  }

  function deleteItem(index: number) {
    setItems((prevState) => prevState.filter((item, index2) => index2 !== index))
  }

  const contextValue: TodoContextType = { items, addItem, deleteItem }

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
}

export const useTodo = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }
  return context
}
