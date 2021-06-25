//  Notes: https://trello.com/c/pQWwSUvZ
import { 
  // Child,
  ValidChild,
  ChildFC,
  ChildrenFC } from './Child';

const Parent: React.FC = () => {
  // return <Child color='red' onClick={() => console.log('Just Clicked!')}>Not Valid</Child>
  return <ValidChild color='red' onClick={() => console.log('Just Clicked!')}>Valid with children Props added</ValidChild> ||
  (<ChildFC color='red' onClickFC={() => console.log('Just Clicked!')}>Valid, React.FC includes 'children' Prop</ChildFC> ||
  <ChildrenFC color='red' onClickFC={() => console.log('Just Clicked!')}>children is optional</ChildrenFC>) 
};

export default Parent;
