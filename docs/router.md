```
import {
  BrowserRouter as Router,
  Switch,
  Route   
} from "react-router-dom";
```

```
<Switch>
  <Route path="/" component={Intro} />
  <Route path="/lesson/:lessonId/:exerciseId?" component={Lesson} />
  <Route path="/trainer/:trainerId" component={Trainer} />
</Switch>
```