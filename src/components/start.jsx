import { useRef } from "react";

export default function Start({ setUsername }) {
  const InputRef = useRef();
  function handleClick() {
    InputRef.current.value && setUsername(InputRef.current.value);
  }
  return (
    <div className="start">
      <input
        placeholder="enter your name"
        type="text"
        className="startInput"
        ref={InputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
