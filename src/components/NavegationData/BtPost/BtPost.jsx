import React, { useState } from 'react';
import { Button } from './style';
import { AiFillPlusCircle } from 'react-icons/ai';
import PopUpPost from '../../../components/View/PopUpPost';

function BtPost({ url, onReload, fields }) {
  //states da popup de add
  const [openViewPost, setOpenViewPost] = useState(false);

  const toggleView = () => {
    setOpenViewPost(!openViewPost);
  };
  return (
    <>
      <Button>
        <AiFillPlusCircle onClick={toggleView} />
      </Button>

      {openViewPost && (
        <PopUpPost
          fields={fields}
          onClose={toggleView}
          reloadController={onReload}
          url={url}
        ></PopUpPost>
      )}
    </>
  );
}

export default BtPost;
