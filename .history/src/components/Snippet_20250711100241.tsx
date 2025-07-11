import { useSnippets } from "../context/useSnippets";

export default function Snippet({ snippet }: { snippet: any }) {
      const {deleteSnippet} = useSnippets();
  return (
    <div className="flex flex-col gap-2 bg-gray-900 text-gray-100">
      <div className="relative min-h-[60px] flex items-center justify-center">
        <p className="text-gray-400">
          {snippet.title} -- {snippet.language}
        </p>
        <div className="bg-red-100 absolute right-1 top-1/2 -translate-y-1/2 hover:cursor-pointer" onClick={()=>deleteSnippet(snippet.id)}>Supprimer</div>
      </div>
      <p className="bg-white text-black text-start p-4">{snippet.content}</p>
    </div>
  );
}
