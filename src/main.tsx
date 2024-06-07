import { render } from 'preact';
import { App } from './app';


render(
  <App />,
  (() => {
    const app = document.createElement('div');
    document.body.append(app);
    return app;
  })(),
);
