import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SubredditPage from './pages/SubredditPage';
import ProfilePage from './pages/ProfilePage';
import CreatePost from './pages/CreatePost';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/subreddit/:name" element={<SubredditPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/create-post" element={<CreatePost />} />
            </Routes>
        </Router>
    );
};

export default App;
