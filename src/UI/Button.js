const Button = (props) => {
  return <button className={props.className} onClick={props.buttonFunction}>{props.buttonLabel}</button>
};

export default Button;
