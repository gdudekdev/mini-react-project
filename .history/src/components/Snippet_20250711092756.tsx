export default function Snippet({ snippet }: { snippet: any }) {
  return (
    <div className="flex flex-col gap-4 bg-gray-700">
      <p className="text-gray">
        {snippet.title} -- {snippet.language}
      </p>
      <p>{snippet.content}</p>
    </div>
  );
}
