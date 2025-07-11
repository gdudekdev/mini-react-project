import { useEffect, useRef, useState } from "react";
import { useSnippets } from "../context/useSnippets";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    language: "",
    content: "",
  });
  const {
    addSnippet,
    updateSnippet,
    getSnippetById,
    isChangeMode,
    setIsChangeMode,
  } = useSnippets();

  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.height}px`;
    }
  }, [formData.content]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (isChangeMode) {
      console.log(formData);
      updateSnippet(formData.id, formData);
    } else {
      addSnippet(formData);
    }
    setFormData({ title: "", language: "", content: "" });
    setIsChangeMode(0);
  };
  useEffect(() => {
    if (isChangeMode) {
      setFormData(getSnippetById(isChangeMode));
    }
  }, [isChangeMode]);
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
          rows={1}
          className="w-full p-2 border rounded resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.content}
          required
        ></textarea>
      </div>
      <div className="border-1 border-white rounded-sm p-2 hover:cursor-pointer">
        <input type="submit" value={isChangeMode ? "Modifier" : "Ajouter"} />
      </div>
    </form>
  );
}
