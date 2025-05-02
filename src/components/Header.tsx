type User = {
  name: string;
};

type Props = {
  title: string; // Required
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
};

export const Header = ({ title, isActive = false, user }: Props) => {
  return (
    <section className="p-3 pl-0 text-center">
      <h1 className="font-bold">{title}</h1>
      {}
      <h3 className="font-bold">
        <span>{isActive ? "Active" : "Inactive"}</span> User: {user.name}
      </h3>
    </section>
  );
};
