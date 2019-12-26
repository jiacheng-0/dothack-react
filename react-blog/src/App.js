import React from 'react';
import Card from './components/Card';
import BlogPost from './components/BlogPost';

class App extends React.Component {

  state = {
    users: [],
    posts: [],
    selectedUser: null,
  }

  // React component lifecycle - https://reactjs.org/docs/react-component.html
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ users }))

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => this.setState({ posts }))
  }

  render() {
    return (
      <div className="App">
        <h1>🚀 .Hack Blog</h1>
        
        <div class="columns">

          <div class="users">
          {
            this.state.users.map(user => (
              <Card 
                title={user.username}
                onClick={() => this.setState({selectedUser: user.id})}
                body={
                  <pre>
                    {JSON.stringify(user.address, null, 2)}
                  </pre>
                }/>
            ))
          }
          </div>

          <div class="user-posts">
          { 
            this.state.selectedUser
            ? this.state.posts.map(post => (
                post.userId == this.state.selectedUser && ( // Syntactic sugar -- https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored
                  <BlogPost title={post.title} body={post.body}></BlogPost>
                )
              ))
            : <h1>Select a user!</h1>
          }
          </div>

        </div>
      </div>
    )
  };
}

export default App;
