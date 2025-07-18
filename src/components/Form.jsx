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
    isEditing,
    setIsEditing,
  } = useSnippets();

  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [formData.content]);

  useEffect(() => {
    if (isEditing) {
      setFormData(getSnippetById(isEditing));
    }
  }, [isEditing]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      updateSnippet(formData.id, formData);
    } else {
      console.log("Snippet added");
      addSnippet(formData);
    }
    setFormData({ title: "", language: "", content: "" });
    setIsEditing(0);
  };
  const cancelUpdate = () => {
    setFormData({
      title: "",
      language: "",
      content: "",
    });
    setIsEditing(false);
  };
  return (
    <form className="flex flex-col gap-4 w-[700px]" onSubmit={onSubmit}>
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
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="content">Snippet</label>
        <textarea
          id="content"
          ref={textareaRef}
          placeholder="Place your snippet here ..."
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, content: e.target.value }))
          }
          rows={1}
          value={formData.content}
          required
          className="w-full p-2 border rounded resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <div className=" rounded-sm p-2 hover:cursor-pointer">
        <input
          type="submit"
          value={isEditing ? "Modifier" : "Ajouter"}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors cursor-pointer"
        />
      </div>
      {isEditing && (
        <div className="  rounded-sm p-2 hover:cursor-pointer ">
          <input
            defaultValue="Annuler"
            className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-700 transition-colors cursor-pointer text-center"
            onClick={cancelUpdate}
          />
        </div>
      )}
    </form>
  );
}
