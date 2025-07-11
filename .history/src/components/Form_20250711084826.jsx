import { useState } from "react";

export default function Form(){
      const [formData, setFormData ] = useState({
            title : "",
            language : "",
            content : "",
      })


      return (
            <form action="">

                  <input type="text" onChange={(e)=>setFormData(prev=>)}/>

            </form>
      )
}