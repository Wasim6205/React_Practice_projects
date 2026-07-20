function Test() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Todo App
        </h1>

        {/* Input Section */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg font-medium transition">
            Add
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-6">
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white">
            All
          </button>

          <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
            Active
          </button>

          <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
            Completed
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {/* Todo Item */}
          <div className="flex items-center justify-between bg-gray-50 border rounded-lg p-4">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-5 w-5 accent-blue-500"
              />
              <span className="text-gray-800">
                Learn React Hooks
              </span>
            </div>

            <div className="flex gap-2">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md">
                Edit
              </button>

              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">
                Delete
              </button>
            </div>
          </div>

          {/* Completed Item */}
          <div className="flex items-center justify-between bg-green-50 border rounded-lg p-4">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked
                readOnly
                className="h-5 w-5 accent-green-500"
              />
              <span className="line-through text-gray-500">
                Build Todo UI
              </span>
            </div>

            <div className="flex gap-2">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md">
                Edit
              </button>

              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6 text-gray-600 text-sm">
          <p>2 Tasks Left</p>

          <button className="text-red-500 hover:text-red-600 font-medium">
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;