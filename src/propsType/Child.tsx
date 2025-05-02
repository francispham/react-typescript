interface ChildProps {
  color: string;
  onClick: () => void;
}

interface ValidChildProps {
  color: string;
  onClick: () => void;
  children: string;
}

interface ChildFCProps {
  color: string;
  onClickFC: () => void;
  children: string; // Optional
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button
        className="flex items-center bg-blue-500 px-4 py-3 m-1 rounded-2xl text-white hover:bg-blue-400"
        onClick={onClick}
      >
        Click
      </button>
    </div>
  );
};

export const ValidChild = ({ color, onClick, children }: ValidChildProps) => {
  return (
    <div>
      {color}
      {children}
      <button
        className="flex items-center bg-blue-500 px-4 py-3 m-1 rounded-2xl text-white hover:bg-blue-400"
        onClick={onClick}
      >
        Click
      </button>
    </div>
  );
};

// Better Practices:
export const ChildFC: React.FC<ChildFCProps> = ({ color, onClickFC }) => {
  return (
    <div>
      {color}
      <button
        className="flex items-center bg-blue-500 px-4 py-3 m-1 rounded-2xl text-white hover:bg-blue-400"
        onClick={onClickFC}
      >
        Click
      </button>
    </div>
  );
};

export const ChildrenFC: React.FC<ChildFCProps> = ({
  color,
  onClickFC,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button
        className="flex items-center bg-blue-500 px-4 py-3 m-1 rounded-2xl text-white hover:bg-blue-400"
        onClick={onClickFC}
      >
        Click
      </button>
    </div>
  );
};
