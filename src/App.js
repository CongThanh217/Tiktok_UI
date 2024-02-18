import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './Components/Layout';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Page = route.element;
                    let Layout = DefaultLayout
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page></Page>
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
