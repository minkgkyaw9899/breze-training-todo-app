// Square.tsx

import { FC } from "react";

type Props = {
  value: string;
  onClick: () => void;
};

const Square: FC<Props> = ({ value, onClick }) => {
  return (
    <button
      className={"border px-2 rounded h-[50px] w-[50px]"}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
