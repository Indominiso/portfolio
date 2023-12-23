import { ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
}

function ButtonContainer({ name, children }: Props) {
  return (
    <div>
      <h2 className="text-left text-[2rem] font-metrobold">{name}</h2>
      {children}
    </div>
  );
}

export default ButtonContainer;
