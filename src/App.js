import logo from './logo.svg';
import './App.css';

import BlogGroup from './components/BlogGroup';
import BlogPostCover from './components/BlogPostCover';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Group from './components/Group';

function App() {
  return (
    <div className="App">
      <NavBar className='App__navbar' />
      <Group className='App__foryou'>
        <Header type='h1' center>For You</Header>
        <BlogGroup columns='3' rows='2' className='App__foryou__blogs'>
          <BlogPostCover 
            topic='For You' 
            usernameClassName='App__foryou__blogs__large__username' 
            profilePicClassName='App__foryou__blogs__large__profile-pic' 
            topicClassName='App__foryou__blogs__large__topic' 
            columnSpace='2' 
            rowSpace='2' 
            className='App__foryou__blogs__large'>
              Studies show that playing a musical instrument has a big impact on mental health
            </BlogPostCover>
          <BlogPostCover 
            topic='For You' 
            usernameClassName='App__foryou__blogs__small-top__username' 
            profilePicClassName='App__foryou__blogs__small-top__profile-pic' 
            topicClassName='App__foryou__blogs__small-top__topic' 
            columnSpace='1' 
            rowSpace='1' 
            className='App__foryou__blogs__small-top'>
              This is why you should start using an electric car
            </BlogPostCover>
          <BlogPostCover 
            topic='For You' 
            usernameClassName='App__foryou__blogs__small-bottom__username'
            profilePicClassName='App__foryou__blogs__small-bottom__profile-pic' 
            topicClassName='App__foryou__blogs__small-bottom__topic' 
            columnSpace='1' 
            rowSpace='1' 
            className='App__foryou__blogs__small-bottom'>
              Here is the perfect salad recipe
            </BlogPostCover>
        </BlogGroup>
      </Group>
    </div>
  );
}

export default App;
