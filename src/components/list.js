import React from 'react';

const List = (props) => {
  const {renderItem, items} = props;
  return (
    <>
      {items.map(renderItem)}
    </>
  );
};

export default List;