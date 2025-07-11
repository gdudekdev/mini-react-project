import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    language: "",
    content: "",
  });

  return (
    <form action="">
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
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, language: e.target.value }))
          }
        />
      </div>
      <div className="">

      </div>
    </form>
  );
}
