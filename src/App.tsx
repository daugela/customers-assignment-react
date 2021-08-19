import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { Customers, Error404 } from './pages';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './helpers';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <React.StrictMode>
                    <Router>
                        <Switch>

                            <Route exact path="/">
                                <Redirect to="/customers" />
                            </Route>

                            <Route exact path="/customers" component={Customers} />
                            <Route exact path="/customers/:customerUNID" component={Error404} />
                            <Route exact path="/500" component={Error404} />
                            <Route component={Error404} />

                        </Switch>
                    </Router>
                </React.StrictMode>
            </PersistGate>
        </Provider>
    );
}

export default App;
