import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    language: "",
    content: "",
  });

  return (
    <form className="flex">
      <div>
        <label htmlFor="title">Titre</label>
        <input
          id="title"
          type="text"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <div>
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
      <div>
        <label htmlFor="content">Snippet</label>
        <input
          id="content"
          placeholder="Place your snippet here ..."
          type="textarea"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, content: e.target.value }))
          }
        />
      </div>
    </form>
  );
}
