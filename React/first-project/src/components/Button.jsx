function Button({onPress ,bgColor , title }) {
  return (
    <button 
    onClick={onPress}
    style={{ backgroundColor: 
    bgColor }}>
        {title}</button>
  );
}

export default Button;
