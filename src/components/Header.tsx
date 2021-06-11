type User = {
  name: string;
}

type Props = {
  title: string;      // Required
  isActive?: boolean; // Optional Props
  typeGeneric?: Array<string>;
  sameAsAboveType?: string[];
  /* Basic Types:
    number: number;
    status: 'loading' | 'loaded';
    emptyObject: {};
    object: {
      name: string;
    };
    func: () => void;
    */
  user: User;
}

export const Header = ({ title, isActive = false, user }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
      <h3>Current User: {user.name}</h3>
    </div>
  )
}
