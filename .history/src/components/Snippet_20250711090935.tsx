export default function Snippet({ snippet }: { snippet: any }) {
  return (
    <div className="">
      <p>
        {snippet.tiltle} -- {snippet.language}
      </p>
      <p>{snippet.content}</p>
    </div>
  );
}
