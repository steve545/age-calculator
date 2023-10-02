import { AgeInput } from "./AgeInput";

function App() {
  return (
    <div className="bg-guide-off-white w-screen h-screen flex justify-items-center text-guide-off-black font-poppins text-guide-font font-regular">
      <div className="bg-guide-white shadow-md w-[43rem] max-md:w-[39rem] max-sm:w-[25rem] h-[35rem] m-auto rounded-2xl rounded-br-[10.625rem]">
        <AgeInput />
      </div>
    </div>
  );
}

export default App;
