export default function Snippet({ snippet }: { snippet: any }) {
  return (
    <div className="flex flex-col gap-2 bg-gray-900 text-gray-100">
      <div className="relative min-h-[60px]">
        <p className="text-gray-400">
          {snippet.title} -- {snippet.language}
        </p>
        <button className="bg-red-500 absolute right-0 top-0 ">Supprimer</button>
      </div>
      <p className="bg-white text-black text-start p-4">{snippet.content}</p>
    </div>
  );
}
