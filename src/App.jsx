import { Routes, Route } from "react-router";
import CommonLayout from "./components/CommonLayouts/CommonLayout";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          {/* <Route index element={<Home />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
