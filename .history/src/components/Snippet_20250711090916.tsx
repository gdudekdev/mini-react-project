import { useState } from "react";

export default function Snippet({ snippet }: { snippet: any }) {
  const [value, setvalue] = useState(snippet);

  return <div className="">
      <p>{snippet.tiltle} -- {snippet.language}</p>
      <p></p>
  </div>;
}
