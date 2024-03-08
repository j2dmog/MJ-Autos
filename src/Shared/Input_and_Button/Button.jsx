

const Button = ({className, Value, onClick}) => {
  return (
    <>
      <button 
      className={className} 
      onClick={onClick}
      // window={window} 
      // bottom={bottom}
      // behavior={behavior}
      >{Value}</button>
    </>
  );
};

export default Button;

