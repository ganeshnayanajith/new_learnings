import React from 'react';
import ContactList from './ContactList';
import LoremPicSumPostList from './LoremPicsumPostList';
import MyPostList from './MyPostList';

let PostWall = () => {
  return (
    <React.Fragment>
      <section className="post-wall p-3">
        <div className="container-fluid">
          <div className="grid">
            <div className="row">

              <div className="col-md-3">
                <ContactList />
              </div>

              <div className="col-md-5">
                <MyPostList />
              </div>

              <div className="col-md-4">
                <LoremPicSumPostList />
              </div>

            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PostWall;