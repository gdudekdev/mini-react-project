import { useEffect, useState } from "react";
import { useSnippets } from "../context/useSnippets";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    language: "",
    content: "",
  });
  const { addSnippet, isChangeMode, setIsChangeMode } = useSnippets();
  const onSubmit = (e) => {
    e.preventDefault();
    addSnippet(formData);
    setFormData({title : "", language : "", content :""});
    setIsChangeMode(0);
  };
  useEffect(()=>{
    console.log(isChangeMode);
    const snippetId = isChangeMode;
    // if(isChangeMode){
    //   const snippetId = isChangeMode;
    //   setFormData(useSnippets(snippetId));
    // }
  },[isChangeMode]);
  return (
    <form
      className="flex flex-col gap-4 w-[400px]"
      onSubmit={(e) => onSubmit(e)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="title">Titre</label>
        <input
          id="title"
          type="text"
          placeholder="Titre"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
          value={formData.title}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="language">Langage</label>
        <input
          id="language"
          type="text"
          placeholder="Ex : php, javascript ..."
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, language: e.target.value }))
          }
          value={formData.language}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="content">Snippet</label>
        <textarea
          id="content"
          placeholder="Place your snippet here ..."
          type="textarea"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, content: e.target.value }))
          }
          className="min-h-14"
          value={formData.content}
          required
        ></textarea>
      </div>
      <div className="border-1 border-white rounded-sm p-2 hover:cursor-pointer">
        <input type="submit" value="Ajouter" />
      </div>
    </form>
  );
}
