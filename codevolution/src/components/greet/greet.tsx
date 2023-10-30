type GreetProps = {
  name?: string;
};

export const Greet = (props: GreetProps) => {
  return (
    //   <div>Hello</div>;
    <div>Hello {props.name}</div>
  );
};
