import { Component } from "react";

type Props = {
  title: string;
};
type State = {
  status: string;
};

interface User {
  name: string;
  age: number;
}

interface PropsInterface {
  users: User[];
}

interface StateInterface {
  name: string;
  user: User | undefined;
}

export class ClassComponentInterface extends Component<
  PropsInterface,
  StateInterface
> {
  state: StateInterface = {
    name: "",
    user: undefined,
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };
  handleClick = () => {
    const { users } = this.props;
    const { name } = this.state;
    const foundUser = users.find((user) => user.name === name);

    this.setState({ user: foundUser });
  };
  render() {
    const { name, user } = this.state;
    return (
      <section className="p-3 pl-0">
        <h3 className="font-bold">User Search Class Component</h3>
        <div className="flex justify-center">
          <div className="flex items-center m-2 w-md rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input
              type="text"
              className="block min-w-0 grow py-3 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              value={name}
              onChange={this.handleChange}
            />
          </div>

          <button
            className="flex items-center bg-blue-500 px-3 py-1 m-2 rounded-md text-white hover:bg-blue-400"
            onClick={this.handleClick}
          >
            Find User
          </button>
        </div>
        {user && (
          <div>
            Name: {user.name} - Age: {user.age}
          </div>
        )}
      </section>
    );
  }
}

class ClassComponent extends Component<Props, State> {
  render() {
    return (
      <section className="p-3 pl-0">
        I am a Class Component with <code>{this.props.title}</code>
      </section>
    );
  }
}

export default ClassComponent;
