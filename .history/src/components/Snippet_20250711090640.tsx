import { useState } from "react";

export default function Sn(){
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