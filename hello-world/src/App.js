import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from "./components/homePage/Homepage";
// import Loginpage from "./components/loginPage/LoginPage";
import MyPage from "./components/myPage/MyPage"
import PostDetail from './components/postDetail/PostDetail';
// import SignupPage from './components/signupPage/SignupPage';
// import WritePage from './components/writePage/WritePage';


function App() {
  return (
      <BrowserRouter>
        
          <Switch>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/login" element={<Loginpage />} /> */}
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/postdetail/:kind" element={<PostDetail />} />
            {/* <Route path="/signup" element={<SignupPage />} /> */}
            {/* <Route path="/write" element={<WritePage />} /> */}
          </Switch>
        
      </BrowserRouter>
      
      
  );
}

export default App;