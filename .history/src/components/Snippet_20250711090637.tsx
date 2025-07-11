import { useState } from "react";

export default function SnippetList(){
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