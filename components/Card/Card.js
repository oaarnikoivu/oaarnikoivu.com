import Link from "next/link";

function Card({ title, description, link }) {
  return (
    <div className="border border-zinc-800 hover:bg-zinc-800 rounded-lg p-4 w-fit cursor-pointer hover:transition ease-in-out duration-300">
      <div className="flex flex-col gap-2 items-start">
        <h2 className="text-lg text-zinc-100 font-medium">{title}</h2>
        <p className="text-sm text-zinc-300">{description}</p>
        <Link className="text-sm text-zinc-100 mt-2" href={link}>
          View
        </Link>
      </div>
    </div>
  );
}

export default Card;
