// import React, { useEffect, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';
// import { getLocalStorage, setLocalStorage } from './utils/local-storage';
// import { TodoLoader } from './components/TodoLoader';
// import { TodoList } from './components/TodoList';

//  const todo_ls_name = process.env.REACT_APP_TODO_LOCAL_STORAGE_NAME

// const App = () => {
//   const [loadingTodos, setLoadingTodos] =useState(true)
//   const [todos, setTodos] = useState([])
//   const [todoInput, setTodoInput] = useState("");
//   const [formError, setFormError] = useState({
//     isError: false,
//     errorMessage: null,
//     errorType:null
//   });

 

//   const createTodo = () => {
//   try {
//     if (!todoInput) {
//       setFormError({
//         isError: true,
//         errorMessage: "Todo title cannot be empty, please provide input",
//       });

//       setTimeout(() => {
//         setFormError({
//           isError: false,
//           errorMessage: null,
//         });
//       }, 2000);

//       return;
//     }
// console.log(process.env.REACT_APP_TODO_LOCAL_STORAGE_NAME)
//     const newTodo = {
//       id: uuidv4(),
//       title: todoInput, // Use todoInput directly, no need for todoInput.value
//       created_at: new Date().toLocaleDateString("en-us", {
//         weekday: "long",
//         year: "numeric",
//         month: "short",
//         day: "numeric",
//       }),
//     };

  
   
//     // check for ls
//     const todos =getLocalStorage(todo_ls_name);

//       // add new todo_db array
//       const new_todos = [...todos, newTodo];

//       // add to local storage
//       setLocalStorage(todo_ls_name, new_todos);
//       // fetchTodo();
//       // resetFormInput();
//   } catch (error) {
//     // showMessage(error.message)
//   };
// };
// // READ TODO Function
// const fetchTodos = () => {
//   const _todos = getLocalStorage(todo_ls_name);
//   setTodos(_todos);
//   setTimeout(() =>{
// setLoadingTodos(false)
//   }, 2000)
  
// };



// // const sortedTodos = sortedTodosByCreated_At(todo_db);

// useEffect(() => {
// fetchTodos();
// }, []);



// console.log(todos)

//   return (
//     <div>
//       <div className=" h-screen text-center p-5 bg-[#047857]">
//         <header className="px-5 py-4 border-b border-slate-800">
//           <h1 className="text-4xl font-medium text-white ">
//             Goal-Getter
//           </h1>
//           <p className="text-white p-2 m-2">
//             Building a great life by organising your day</p>
//         </header>
//         <main className="px-5 mt-10 max-w-lg mx-auto bg-[#ffffff] p-5 rounded-lg">
//           <form className=" flex flex-col justify-center sm:flex-row gap-4 p-5">
//             <input
//               placeholder="Enter your Task here"
//               className="p-2 rounded-lg border border-slate-800"
//               value={todoInput}
//               onChange={(e) => setTodoInput(e.target.value)}
//             />
//             <button className="bg-blue-600 rounded-lg px-2.5 text-sm text-white w-[100px]"
//               onClick={createTodo} 
//               type="button"
//               id="add_todo_btn">
//               Add todo
//             </button>
//             <button className="hidden bg-red-600 rounded-lg px-2.5 text-sm text-white w-[100px]"
//               // onClick={updateTodo}
//               type="button"
//               id="update_todo_btn">
//               Update
//             </button>
//           </form>
//           {formError && formError.isError && (
//             <span className='text-red-500'>{formError.errorMessage}</span>
//           )}
//           {!loadingTodos && todos.length === 0 && (
//             <p className="text-center text-slate-600">
//                Your todo will appear here</p>
//           )}

//            <section className="mt-5">
//           {loadingTodos ? ( 
//             <section className='flex flex-col gap-2'>
//             <TodoLoader />
//            <TodoLoader />
//             <TodoLoader />
//             </section>
//           ) : (
//           <>
//             {todos.map(({title, id, created_at})=>{
//               return(
//               <TodoList
//                title={title}
//                id={id} 
//                created_at={created_at} 
//                key={`todo-list-${id}`}
//                />
//                );
//             })}
//             </>
//             )}
//             </section>
//         </main>
//       </div>
//     </div>
//   )
// }
// export default App
