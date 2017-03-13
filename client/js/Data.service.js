'use strict';

const Data = ($resource, $http, $cookies) => {
  const Posts = $resource(`/api/posts/:pid`, { pid: `@pid` }, { update: { method: `PUT` }});
  const PostComments = $resource(`/api/posts/:pid/comments`, { pid: `@pid` }, { update: { method: `PUT` }});
  const Comments = $resource(`/api/comments/:cid`, { cid: `@cid` }, { update: { method: `PUT` }});
  const Users = $resource(`/api/users/:id`, { id: `@id` }, { update: { method: `PUT` }});

  const login = (user) => { return $http.post(`/api/auth`, user); };
  const join = (newUser) => { return $http.post(`/api/auth/new`, newUser); };
  const logout = () => { return $http.delete(`/api/auth`); };

  const getSession = () => {
    let session = $cookies.get(`session`);
    if (session) {
      session = JSON.parse(atob(session));
    }

    return session || false;
  };

  return { Posts, PostComments, Comments, Users, login, join, logout, getSession };
};
