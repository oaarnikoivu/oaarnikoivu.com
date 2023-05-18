import Link from "next/link";

export default function UnderlineLink({ href, text }) {
  return (
    <Link href={href} target="_blank" className="underline hover:text-white">
      {text}
    </Link>
  );
}
