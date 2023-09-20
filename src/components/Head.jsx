import React from 'react';

const Head = (props) => {
  return React.useEffect(() => {
    document.title = 'Skilloo | ' + props.title;
  }, [props]);
};

export default Head;
