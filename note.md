RTK bao gồm:

- configureStore():
  Nếu chưa có RTK thì sử dụng createStore() để bọc bên ngoài rootReducer
    import rootReducer from './reducers';
    // Use redux-thunk as a redux middleware
    const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));  
    const store = createStore(rootReducer, {}, enhancer);
    export default store;

  Khi có RTK: sử dụng hàm configureStore()
    // store.js
    import { configureStore } from '@reduxjs/toolkit'
    import rootReducer from './reducers'
    const store = configureStore({ reducer: rootReducer })

- createReducer():
  Nếu chưa có RTK thì sử dụng 1 hàm reducer nhận vào 2 tham số là state (truyền vào 1 initalState) và action, sau đó sử dụng switch case để xác định từng action trong reducer và return về 1 state (đối với dạng object và array thì phải clone ra rồi mới xử lý)
    // Không có Redux Toolkit
    function counterReducer(state = 0, action) {
    switch (action.type) {
      case 'increment':
        return state + action.payload
      case 'decrement':
        return state - action.payload
      default:
        return state
      }
    }

// Có Redux Toolkit: sử dụng 1 action key, không có key default vì mặc định tự handle
// - Mỗi key là một case
// - Không cần handle default case
  const counterReducer = createReducer(0, {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload
  })

// Một điểm hay nữa là reducer có thể mutate data trực tiếp
// Bản chất bên dưới họ sử dụng thư viện Immerjs
  const todoReducer = createReducer([], {
    addTodo: (state, action) => {
    // 1. Có thể mutate data trực tiếp
      state.push(action.payload)
    },
    removeTodo: (state, action) => {
    // 2. Hoặc phải trả về state mới
    // CHỨ KO ĐƯỢC cả 1 và 2 nha 😎
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    }
  })

- createAction():
  // Không có redux toolkit
  const INCREMENT = 'counter/increment'
  function increment(amount) {
    return {
      type: INCREMENT,
      payload: amount
      }
    }
  const action = increment(3)
  // { type: 'counter/increment', payload: 3 }

  // Có redux toolkit
  const increment = createAction('counter/increment')
  const action = increment(3)
  // returns { type: 'counter/increment', payload: 3 }
  console.log(increment.toString())
  // 'counter/increment

- createSlice(): thay vì khai báo reducer và action riêng thì createSlice sẽ tự động generate cả reducer và action, nhận vào 3 params: name, initialState, reducers (ngoài ra còn có extraReducer):

// 1. Setup todo slice
// todoSlice.js
const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
    removePost(state, action) {
      state.splice(action.payload, 1)
    }
  }
  });
const { actions, reducer } = todoSlice;
export const { addPost, removePost } = actions;
export default reducer;

// 2. Setup redux store
// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoSlice from 'features/todos/todoSlice';
//Nếu có nhiều reducers thì tạo thành 1 rootReducer và truyền tất cả các reducers vào rootReducer sau đó thêm vào reducer ở configureStore
const store = configureStore({
  reducer: {
    todos: todoSlice
  },
});

// 3. Bind Redux Provider to App
// src/index.js
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

// 4. Using redux in component
// todo.jsx
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from 'features/todos/todoSlice';
function Todo() {
  const dispatch = useDispatch(); //dispatch 1 action lên redux
  const todoList = useSelector(state => state.todos); //lấy state của redux store
  const handleTodoClick = (todo, idx) => {
    const action = removeTodo(idx);
    dispatch(action);
  }
  return (
    <ul>
      {todoList.map((todo, idx) => (
    <li key={todo.id} onClick={() => handleTodoClick(todo, idx)}>
      {todo.title}
    </li>
      ))}
    </ul>
  )
}
