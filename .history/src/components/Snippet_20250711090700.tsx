import { useState } from "react";

export default function Snippet(){
      const [snippets, setSnippets] = useState<any[]>([]);


      return (

            <ul>
                  {snippets.map(snippet=>{
                        return(
                              <li>
                                  <Snippet />  
                              </li>
                        )
                  })}
            </ul>
      )
}