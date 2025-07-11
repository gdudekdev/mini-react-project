export default function Snippet({ snippet }: { snippet: any }) {
  return (
    <div className="flex flex-col gap-2 bg-gray-700">
      <p className="text-gray-400">
        {snippet.title} -- {snippet.language}
      </p>
      <p className="bg-white text-black text-s">{snippet.content}</p>
    </div>
  );
}
