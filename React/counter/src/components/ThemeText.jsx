function ThemeText({ text, underline, font, color, children }) {
  return (
    <p
      className={` font-mono 
    ${underline ? "underline" : ""}
    ${font ? "font-" + font : "font-light"}
    ${color ? color : "text-gray-900"}`}
    >
      {text || children}
    </p>
  );
}

export default ThemeText;
