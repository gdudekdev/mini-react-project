import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    language: "",
    content: "",
  });

  return (
    <form action="">
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
