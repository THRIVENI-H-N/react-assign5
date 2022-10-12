import React from 'react';
import NewComponent from './NewComponent';

function Component1(props) {
    let { count, method } = props;
  return (
    <div>
        <button className='btn btn-outline-primary' onClick={method}>button from component 1 clicked {count} times</button>
    </div>
  )
}

export default NewComponent(Component1);