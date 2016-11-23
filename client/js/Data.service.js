/**
 * APP SERVICES FILE
 */
'use strict';

const Data = ($resource, $http, $cookies) => {
  const Posts = $resource('/posts/:id', {
    id: '@id'
  }, {
    update: {
      method: 'PUT'
    }
  });
  const PostComments = $resource('/posts/:id/comments', {
    id: '@id'
  }, {
    update: {
      method: 'PUT'
    }
  });
  const Comments = $resource('/comments/:id', {
    id: '@id'
  }, {
    update: {
      method: 'PUT'
    }
  });
  const Users = $resource('/users/:id', {
    id: '@id'
  }, {
    update: {
      method: 'PUT'
    }
  });

  const Login = (user) => {
    return $http.post('/auth', user);
  };
  const Join = (newUser) => {
    return $http.post('/auth/new', newUser);
  };

  const hasSession = () => {
    let session = $cookies.get('session');
    if (session) {
      session = JSON.parse(atob(session));
    }

    return session;
  };

  return {
    Posts,
    PostComments,
    Comments,
    Users,
    Login,
    Join,
    hasSession
  };
};
