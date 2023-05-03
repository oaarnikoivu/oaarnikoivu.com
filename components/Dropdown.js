import { CaretDownIcon, CheckIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";

function Dropdown({ options, onSelectOption, selectedOption }) {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (event) => {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !btnRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative">
      <button
        ref={btnRef}
        className={`rounded-md ${
          open ? "bg-zinc-800" : "bg-zinc-700"
        } hover:bg-zinc-800 p-2`}
        onClick={handleOpen}
      >
        <div className="flex items-center gap-2">
          <span className="font-bold">Topic</span>
          <CaretDownIcon width={24} height={24} />
        </div>
      </button>
      {open ? (
        <ul
          ref={dropdownRef}
          className="absolute w-72 max-h-80 overflow-scroll bg-zinc-800 border border-zinc-700 mt-2 rounded-md right-0"
        >
          {options.map((option) => (
            <li
              key={option}
              className="border-0 border-b border-solid border-zinc-700 hover:bg-zinc-600 cursor-pointer"
              onClick={() => {
                onSelectOption(option);
                setOpen(false);
              }}
            >
              <div className="flex items-center gap-2 pl-3 pb-2 pt-2 pr-8">
                {selectedOption === option ? (
                  <CheckIcon width={20} height={20} />
                ) : (
                  <div className="w-5"></div>
                )}

                <p>{option}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Dropdown;
