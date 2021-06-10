import React, { Component } from 'react';

type Props = {
  title: string;
};
type State = {
  status: string;
};

class ClassComponent extends Component<Props, State> {
  render() {
    return (
      <div>
        I am a Class Component.
      </div>
    );
  }
}

export default ClassComponent;