import React, { useEffect, useState } from 'react';
import { LoremPicSumPostService } from '../../services/LoremPicSumPostService';
import Spinner from '../Spinner/Spinner';

let LoremPicSumPostList = () => {

  let [state, setState] = useState({
    loading: false,
    posts: [],
    errorMessage: ''
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setState({
          ...state,
          loading: true
        });
        let response = await LoremPicSumPostService.getAllPosts();
        console.log(response.data);
        setState({
          ...state,
          loading: false,
          posts: response.data
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

  let { loading, posts, errorMessage } = state;

  return (
    <React.Fragment>
      {
        loading ? <Spinner /> : <React.Fragment>
          <section className="lorem-pic-sum-post-list">
            <div className="container-fluid">
              <div className="row">
                <h2>Lorem Pic Sum Posts</h2>
                {
                  posts.length > 0 &&
                  posts.map(post => {
                    return (
                      <div className="col-md-12" key={post.id}>
                        <a href={post.url}>
                          <div className="card my-2">
                            <div className="card-body">
                              <div className="row align-items-center d-flex justify-content-around">
                                <div className="col-md-12">
                                  <ul className="list-group">
                                    <li className="list-group-item list-group-item-action">
                                      <img src={post.download_url} alt={post.url}
                                           className="lorem-pic-sum-post-image" />
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                      {post.author}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
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

export default LoremPicSumPostList;