import { useHighlight } from "../context/useHighlight";

export default function Highlighter() {
  const { highlight, changeHighlight, choices } = useHighlight();
  
  return (
    <select
      onChange={(e) => changeHighlight(e.target.value)}
      defaultValue={highlight}
    >
      {choices.map((choice,index) => (
        <option key={index} value={choice} className="bg-gray-500 text-white">{choice}</option>
      ))}
    </select>
  );
}
