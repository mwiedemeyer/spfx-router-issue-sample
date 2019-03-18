import * as React from 'react';
import { Route, HashRouter } from "react-router-dom";
import { Switch, RouteComponentProps } from "react-router";
import styles from './SpfxRouterTest.module.scss';
import { ISpfxRouterTestProps } from './ISpfxRouterTestProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpfxRouterTest extends React.Component<ISpfxRouterTestProps, {}> {
  public render(): React.ReactElement<ISpfxRouterTestProps> {
    return (
      <div>
        <h2>Welcome to HashRouter Demo WebPart</h2>
        <br />
        <div>
          <ul>
            <li><a href="#/myroute/A">Click for Route A</a></li>
            <li><a href="#/myroute/B">Click for Route B</a></li>
            <li><a href="#/myroute/C">Click for Route C</a></li>
          </ul>
        </div>
        <HashRouter>
          <Switch>
            <Route exact={true} path="/" render={() =>
              <div>
                <div>Please select a route from the links above</div>
              </div>
            } />
            <Route exact={true} path="/myroute/:id" render={(props: RouteComponentProps<any>) =>
              <div>
                <h4>Selected route: {props.match.params.id}</h4>
              </div>
            } />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
