import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DisqusComponent from "./pages/DisqusComponent";
import FacebookComponent from "./pages/FacebookComponent";
import SharePage from "./pages/SharePage";
import TestSharePage from "./pages/TestSharePage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FacebookComponent} />
        <Route path="/disqus" exact component={DisqusComponent} />
        <Route path="/share" exact component={SharePage} />
        <Route path="/test" exact component={TestSharePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
