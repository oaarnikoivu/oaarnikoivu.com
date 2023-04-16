import Link from "next/link";

function Card({ title, description, link }) {
  return (
    <div className="border border-zinc-800 hover:bg-zinc-800 rounded-lg p-4 w-full cursor-pointer hover:transition ease-in-out duration-300">
      <Link href={link} target="_blank">
        <div className="flex flex-col gap-2 items-start">
          <h2 className="text-lg text-zinc-100 font-medium">{title}</h2>
          <p className="text-sm text-zinc-300">{description}</p>

          <div className="flex gap-2 items-center mt-2">
            <p className="text-sm text-zinc-100">View project</p>
            <svg
              width="18"
              height="18"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="white"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
