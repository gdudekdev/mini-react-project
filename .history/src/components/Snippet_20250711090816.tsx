import { useState } from "react";

export default function Snippet({ snippet }: { snippet: any }) {
  const [value, setvalue] = useState<any[]>([]);

  return (
    <ul>
      {values.map((value) => {
        return <li></li>;
      })}
    </ul>
  );
}
