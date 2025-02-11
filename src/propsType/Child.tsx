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
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export const ValidChild = ({ color, onClick, children }: ValidChildProps) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click</button>
    </div>
  );
};

// Better Practices:
export const ChildFC: React.FC<ChildFCProps> = ({ color, onClickFC }) => {
  return (
    <div>
      {color}
      <button onClick={onClickFC}>Click</button>
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
      <button onClick={onClickFC}>Click</button>
    </div>
  );
};
