import { useContext, useState } from "react";
import { MyStore } from "../context/MyContext";

export default function TodoApp() {
    const {todo,setTodo,addTodo,todos,deleteTodo,toggleTodo,clearCompletedTodo,editTodo} = useContext(MyStore)
    const remainingTodo = todos.filter((todo) => !todo.completed).length
    const [filter, setFilter] = useState("all");
    const filteredTodos = todos.filter((todo) => {
        if(filter === "active") return !todo.completed
        if(filter === "completed") return todo.completed
        return true
    })
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");
    const handleEdit = (todo) => {
  setEditingId(todo.id);
  setEditText(todo.text);
};
const handleSave = () => {
  if (!editText.trim()) return;

  editTodo(editingId, editText.trim());
  setEditingId(null);
  setEditText("");
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-900 px-8 py-6">
          <h1 className="text-3xl font-bold text-white">Todo App</h1>
          <p className="text-slate-300 mt-1">Organize your tasks efficiently</p>
        </div>

        {/* Input Section */}
        <div className="p-6 border-b border-slate-200">
          <div className="flex gap-3">
            <input
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
              type="text"
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
            />
            <button onClick={()=>addTodo(todo)} className="px-6 py-3 cursor-pointer bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 active:scale-95 transition-all duration-200">
              Add
            </button>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="px-6 py-4 border-b border-slate-200">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setFilter("all")} className={`px-4 py-2 cursor-pointer rounded-lg ${filter === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}  font-medium`}>
              All
            </button>
            <button onClick={() => setFilter("active")} className={`px-4 py-2 cursor-pointer rounded-lg ${filter === "active" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"} font-medium transition-colors`}>
              Active
            </button>
            <button onClick={() => setFilter("completed")} className={`px-4 py-2 cursor-pointer rounded-lg ${filter === "completed" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"} font-medium transition-colors`}>
              Completed
            </button>
          </div>
        </div>

        {/* Todo List */}
        <div className="p-6 space-y-4 max-h-[400px] overflow-y-auto">
          

          {/* Todo Item 3 */}
          {filteredTodos.map((todo) => {
            return <div className="group cursor-pointer flex items-center gap-4 p-4 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200">
            <input
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              type="checkbox"
              className="w-5 h-5 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
            />

            <div className="flex-1 min-w-0">
              <p className={`text-slate-900 font-medium truncate ${todo.completed && 'line-through'}`}>
                {todo.text}
              </p>
              <p className="text-sm text-slate-500 mt-1">
                {todo.completed ? "Completed" : "Pending"}
              </p>
            </div>

            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button className="p-2 cursor-pointer rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                ✏️
              </button>
              <button onClick={() => deleteTodo(todo.id)} className="p-2 cursor-pointer rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
                🗑️
              </button>
            </div>
          </div>
          })}

          {/* Empty State Example (remove when using real data) */}
          <div className="hidden flex-col items-center justify-center py-12 text-center">
            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <span className="text-3xl">📝</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">No tasks yet</h3>
            <p className="text-slate-500 mt-1">Add your first task to get started.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            <span className="text-slate-600">
              <span className="font-semibold text-slate-900">{remainingTodo}</span> {remainingTodo === 1 ? "item" : "items"} left
            </span>

            <button onClick={clearCompletedTodo} className="text-red-600 hover:text-red-700 font-medium transition-colors">
              Clear completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}