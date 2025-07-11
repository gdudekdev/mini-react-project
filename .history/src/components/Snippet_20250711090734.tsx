import { useState } from "react";

export default function Snippet({snippet}){
      const [snippets, setSnippets] = useState<any[]>([]);


      return (

            <ul>
                  {snippets.map(snippet=>{
                        return(
                              <li>
                              </li>
                        )
                  })}
            </ul>
      )
}