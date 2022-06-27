import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
function App() {
  return (
    <Switch>
      <div>
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/product/:id">
          {/* :id에는 숫자를 자유롭게 입력할 수 있게 됌 그리고 ProductPage에서 받을 수 있음 */}
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
