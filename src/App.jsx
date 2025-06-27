import { Routes, Route } from "react-router";
import CommonLayout from "./components/CommonLayouts/CommonLayout";
import NewsFeedPage from "./pages/NewsFeedPage";
import VideosPage from "./pages/VideosPage";
import PhotosPage from "./pages/PhotosPage";
import GroupsPage from "./pages/GroupsPage";
import FriendsPage from "./pages/FriendsPage";
import FriendRequestPage from "./pages/FriendRequestPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="/" element={<NewsFeedPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/friend-request" element={<FriendRequestPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
