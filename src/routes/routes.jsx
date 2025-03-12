import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Settings } from '../pages/Settings';
import { Categories } from '../pages/Categories';
import { ComingSoon } from '../pages/ComingSoon';
import { ProtectedRoutes } from '../hooks/ProtectedRoutes';
import { UserAuth } from '../context/AuthContext';

export function MyRoutes() {
    const { user } = UserAuth();
    return (

        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes user={user} redirectTo="/login" />}>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories/>} />
                <Route path="/movements" element={<ComingSoon/>} />
                <Route path="/information" element={<ComingSoon/>} />
                <Route path="/dashboard" element={<ComingSoon/>} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/about" element={<ComingSoon/>} />
                
            </Route>
        </Routes>

    );
}
