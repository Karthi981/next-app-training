import { atom, createStore } from "jotai";

export interface Todo {
    id: number;
    text: string;
    done: boolean;
  }

  export const myStore= createStore();
  
  export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
    todos.map((todo) => ({
      ...todo,
      text: todo.id === id ? text : todo.text,
    }));
  
  export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
    todos.map((todo) => ({
      ...todo,
      done: todo.id === id ? !todo.done : todo.done,
    }));
  
  export const removeTodo = (todos: Todo[], id: number): Todo[] =>
    todos.filter((todo) => todo.id !== id);
  
  export const addTodo = (todos: Todo[], text: string): Todo[] => [
    ...todos,
    {
      id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
      text,
      done: false,
    },
  ];
 export const newToDoAtom = atom("");
 export const  todosAtom = atom<Todo[]>([]);
 export const addToDoAtom = atom(()=>"",((get,set)=>{
    set(todosAtom,addTodo(get(todosAtom),get(newToDoAtom)))
    set(newToDoAtom,"");
    
 }));

 export const updateTodoAtom = atom(
    ()=>"",
    ((get,set,{id,text}:{id:number,text:string})=>{
    set(todosAtom,updateTodo(get(todosAtom),id,text));
 }));

 export const removeTodoAtom = atom(
    ()=>"",
    ((get,set,id:number)=>{
    set(todosAtom,removeTodo(get(todosAtom),id));
 }));

 export const toggleTodoAtom = atom(
    ()=>"",
    ((get,set,id:number)=>{
    set(todosAtom,toggleTodo(get(todosAtom),id));
 }));

 const cartAtom = atom({
   id: 0,
   quantity: 0,
 })
 export { cartAtom }

 const profileDataAtom = atom({firstName:"",
lastName:"",
email:"",
bio:""});

export{profileDataAtom}


const initialFormData = {
  email: '',
  password: '',
  confirmPassword: '',
  phoneNumber:''
};

// Create a Jotai atom for the form data
const formDataAtom = atom(initialFormData);

export {formDataAtom}
