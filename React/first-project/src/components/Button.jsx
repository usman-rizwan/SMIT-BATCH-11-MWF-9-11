function Button(props) {
  return (
    <button 
    onClick={props.onPress}
    style={{ backgroundColor: 
    props.bgColor }}>
        {props.title}</button>
  );
}

export default Button;
