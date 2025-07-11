export default function Snippet({ snippet }: { snippet: any }) {
  return (
    <div className="flex flex-col gap-2 bg-gray-900 text-gray-100">
      <div className="relative min-h-[60px] flex items-center justify-center">
        <p className="text-gray-400">
          {snippet.title} -- {snippet.language}
        </p>
        <button className="bg-red absolute right-1 top-1/2 -translate-y-1/2 ">Supprimer</button>
      </div>
      <p className="bg-white text-black text-start p-4">{snippet.content}</p>
    </div>
  );
}
