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
            
      </div>
      <label htmlFor="title">Titre</label>
      <input
        id="title"
        type="text"
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <label htmlFor="title">Titre</label>
      <input
        id="title"
        type="text"
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, title: e.target.value }))
        }
      />
    </form>
  );
}
