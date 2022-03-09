import React, { useEffect, useState } from 'react';
import { PostService } from '../../services/PostService';
import Spinner from '../Spinner/Spinner';

let MyPostList = () => {

  let [state, setState] = useState({
    loading: false,
    posts: [],
    post: {
      title: '',
      description: ''
    },
    errorMessage: ''
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setState({
          ...state,
          loading: true
        });
        let response = await PostService.getAllPosts();
        console.log(response.data);
        setState({
          ...state,
          loading: false,
          posts: response.data.data.posts
        });
      } catch (e) {
        setState({
          ...state,
          loading: false,
          errorMessage: e.message
        })
      }
    }

    fetchData();
  }, []);

  let updateInput = (event) => {
    setState({
      ...state,
      post: {
        ...state.post,
        [event.target.name]: event.target.value
      }
    });
  };

  let submitForm = async (event) => {
    event.preventDefault();

    try {
      let responseCreate = await PostService.createPost(state.post);
      if (responseCreate) {
        console.log('454545')
        setState({
          ...state,
          post: { title: '', description: '' },
          loading: true
        });
        let responseGetAll = await PostService.getAllPosts();
        console.log(responseGetAll.data);
        setState({
          ...state,
          loading: false,
          post: { title: '', description: '' },
          posts: responseGetAll.data.data.posts
        });
      }
    } catch (e) {
      setState({ ...state, post: { title: '', description: '' }, errorMessage: e.message })
    }
  };

  let clickDelete = async (id) => {
    try {
      let response = await PostService.deletePost(id);
      if (response) {
        setState({
          ...state,
          loading: true
        });
        let response = await PostService.getAllPosts();
        console.log(response.data);
        setState({
          ...state,
          loading: false,
          posts: response.data.data.posts
        });
      }
    } catch (e) {
      setState({
        ...state,
        loading: false,
        errorMessage: e.message
      });
    }
  };

  let { loading, posts, post, errorMessage } = state;

  return (
    <React.Fragment>
      {
        loading ? <Spinner /> : <React.Fragment>
          <section className="my-post">
            <div className="container-fluid">

              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h3>New Post</h3>
                    </div>
                    <div className="card-body">
                      <form onSubmit={submitForm}>
                        <div>
                          <input required={true} name="title" value={post.title} onChange={updateInput} type="text"
                                 className="form-control" placeholder="Title" />
                        </div>
                        <div>
                          <input required={true} name="description" value={post.description} onChange={updateInput}
                                 type="text"
                                 className="form-control  mt-2" placeholder="Description" />
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
                              <input type="submit" className="btn btn-primary" value="Post" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-4">
                <h2>My Posts</h2>
                {
                  posts.length > 0 &&
                  posts.map(post => {
                    return (
                      <div className="col-md-12" key={post._id}>
                        <div className="card my-2">
                          <div className="card-body">
                            <div className="row align-items-center d-flex justify-content-around">
                              <div className="col-md-12">
                                <ul className="list-group">
                                  <li className="list-group-item list-group-item-action">
                                    {post.title}
                                  </li>
                                  <li className="list-group-item list-group-item-action">
                                    {post.description}
                                  </li>
                                  <li className="list-group-item list-group-item-action">
                                    {post.likes}
                                  </li>
                                  <li className="list-group-item list-group-item-action">
                                    {post.dislikes}
                                  </li>
                                  <li className="list-group-item list-group-item-action">
                                    <button className="btn btn-danger my-1" onClick={() => clickDelete(post._id)}>
                                      <i className="fa fa-trash" /> Remove
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

            </div>
          </section>
        </React.Fragment>
      }


    </React.Fragment>
  );
};

export default MyPostList;