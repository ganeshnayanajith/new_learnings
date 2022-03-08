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

                <div className="card">
                  <div className="card-header">
                    <h3>New Post</h3>
                  </div>
                  <div className="card-body">
                    <form>
                      <div>
                        <input type="text" className="form-control" placeholder="Title" />
                      </div>
                      <div>
                        <input type="text" className="form-control  mt-2" placeholder="Description" />
                      </div>
                      <div>
                        <div className="row  mt-3">
                          <div className="col-md-4">
                            <p>Select Image</p>
                          </div>
                          <div className="col-md-3">
                            <input type="button" className="btn btn-outline-dark" value="Select" />
                          </div>
                          <div className="col-md-5">
                            <input type="button" className="btn btn-primary" value="Post" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row mt-4">
                  <MyPostList />
                </div>

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