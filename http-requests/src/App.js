import "./App.css";
import EditForm from "./components/EditForm/EditForm";
import { Component } from "react";
import TodosList from "./components/TodosList";
import * as API from "./services/api";

class App extends Component {
  state = {
    todos: [],
    isLoading: false,
    error: null,
  };

  addTodo = async (values) => {
    try {
      this.setState({ isLoading: true });
      const todo = await API.addTodo(values);
      this.setState((prevSt) => ({
        todos: [...prevSt.todos, todo],
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  deleteTodo = async (id) => {
    try {
      this.setState({ isLoading: true });
      const deletedTodo = await API.deletTodo(id);
      this.setState((prevState) => ({
        todos: prevState.todos.filter((el) => el.id !== deletedTodo.id),
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  updateTodo = async (fields) => {
    console.log(fields);
    try {
      this.setState({ isLoading: true });
      const updatedTodo = await API.updateTodo(fields);

      this.setState((prevSt) => ({
        todos: prevSt.todos.map((todo) => {
          console.log(todo.id === updatedTodo.id);
          return todo.id === updatedTodo.id ? updatedTodo : todo;
        }),
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const todos = await API.getTodos();
      this.setState({ todos: todos });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { todos, isLoading, error } = this.state;
    console.log(todos);
    return (
      <>
        <EditForm onSubmit={this.addTodo} />
        {isLoading ? (
          <h2>LOADING!!!!!</h2>
        ) : (
          <TodosList
            todos={todos}
            deleteTodo={this.deleteTodo}
            onUpdate={this.updateTodo}
          />
        )}
        {error && <h2>{"Щось пішло не так :((("}</h2>}
      </>
    );
  }
}

export default App;
