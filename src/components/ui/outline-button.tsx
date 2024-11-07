import Link from "next/link";

export default function OutlineButton({
  text,
  url,
}: {
  text: string;
  url: string;
}) {
  return (
    <Link href={url}>
      <button className="relative p-[3px]">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
        <div className="group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent">
          {text}
        </div>
      </button>
    </Link>
  );
}
