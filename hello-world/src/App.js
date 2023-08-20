import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from "./components/homePage/Homepage";
import Loginpage from "./components/loginPage/LoginPage";
import MyPage from "./components/myPage/MyPage"
import PostDetail from './components/postDetail/PostDetail';
import SignupPage from './components/signupPage/SignupPage';
import WritePage from './components/writePage/WritePage';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/postdetail/:kind" element={<PostDetail />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/write" element={<WritePage />} />
          </Routes>
        </div>
      </BrowserRouter>
      
      
  );
}

export default App;
