import { Component } from 'react';

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
  users: User[]
}

interface StateInterface {
  name: string;
  user: User | undefined
};

export class ClassComponentInterface extends Component<PropsInterface, StateInterface> {
  state: StateInterface = {
    name: '',
    user: undefined
  }
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value })
  }
  handleClick = () => {
    const { users } = this.props;
    const { name  } = this.state;
    const foundUser = users.find(user => user.name === name);

    this.setState({ user: foundUser });
  }
  render() {
    const { name, user } = this.state;
    return (
      <div>
        <h3>User Search Class Component</h3>
        <input value={name} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Find User</button>
        <div>Name: {user?.name}</div>
        <div>Age: {user?.age}</div>
      </div>
    );
  }
};

class ClassComponent extends Component<Props, State> {
  render() {
    return (
      <div>
        I am a Class Component with {this.props.title}
      </div>
    );
  }
}

export default ClassComponent;