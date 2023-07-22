
const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-8 col-span-125">
          {/* Content for the first two columns */}
          <h1 className="text-2xl font-bold">Column 1 & 2</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-gray-200 p-8">
          {/* Content for the third column */}
          <h1 className="text-2xl font-bold">Column 3</h1>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="bg-gray-300 p-8 col-span-1">
          {/* Content for the fourth column */}
          <h1 className="text-2xl font-bold">Column 4</h1>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
