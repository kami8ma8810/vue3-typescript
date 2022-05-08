import {ref,InjectionKey} from 'vue'

// provide/injectするための定数・関数
type Todo ={
	id:number,
	title:string
}
const defaultTodos = [{id:0,title:'first'},{id:1,title:'second'}];

// export const todos = ref<Todo[]>(defaultTodos)
// // 既に存在する配列Todoに新しくnewTodoというオブジェクトを追加する関数
// export const addTodo = (title:string)=>{
// 	const newTodo={
// 		id:Math.random(),
// 		title,
// 	}
// 	todos.value.push(newTodo)
// }

// ↓まとめる場合（injectもprovideもひとつにしたいとき）
export const todos = (()=>{
	const todos = ref<Todo[]>(defaultTodos);
	const addTodo = (title:string)=>{
		const newTodo={
			id:Math.random(),
			title,
		}
		todos.value.push(newTodo)
	}
	return { todos,addTodo}
})()

type TodosType = typeof todos;
// todoKeyをTodoTypeという型でインジェクションキーにする。todoKeyの中身は'useTodos'という名前で引っ張ってこれるという宣言。InjectionKeyはsymbolしか受け取られない。
export const todoKey: InjectionKey<TodosType> = Symbol('useTodos');