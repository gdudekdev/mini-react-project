import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    language: "",
    content: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    const saved = window.localStorage.getItem("snippets") ?? "");
    window.localStorage.setItem(
      "snippets",
      JSON.stringify([...saved, formData])
    );
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => onSubmit(e)}>
      <div className="flex flex-col gap-2">
        <label htmlFor="title">Titre</label>
        <input
          id="title"
          type="text"
          placeholder="Titre"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
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
        ></textarea>
      </div>
      <div className="border-1 border-white rounded-sm p-2 hover:cursor-pointer">
        <input type="submit" value="Ajouter" />
      </div>
    </form>
  );
}
