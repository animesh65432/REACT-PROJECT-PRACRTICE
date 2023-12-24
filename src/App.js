import { useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [number, numberallowed] = useState(false);
  const [char, charallowes] = useState(false);
  const [pass, setpassword] = useState("");
  return (
    <>
      <div className="w-full max-w-md mx-auto  shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">PASSWORD - GENARATER</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          ></input>
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            COPY
          </button>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setlength(e.target.value)}
          />
          <label htmlFor="length">length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={number}
            onChange={() => {
              numberallowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="Number">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            onChange={() => {
              numberallowed((char) => !char);
            }}
            name=""
            id=""
          />
          <label htmlFor="char">CHARACTER</label>
        </div>
      </div>
    </>
  );
}

export default App;
