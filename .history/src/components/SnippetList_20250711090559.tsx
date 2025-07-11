import { useState } from "react";

export default function SnippetList(){
      const [snippets, setSnippets] = useState([]);


      return (

            <ul>
                  {snippets.map(snippet=>{

                  })}
            </ul>
      )
}