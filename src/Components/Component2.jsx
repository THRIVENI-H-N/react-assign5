import React from 'react';
import NewComponent from './NewComponent';

function Component2(props) {
    let { count, method } = props;
  return (
    <div>
        <button className='btn btn-outline-primary' onClick={method}>button from component 2 clicked {count} times</button>
    </div>
  )
}

export default NewComponent(Component2);