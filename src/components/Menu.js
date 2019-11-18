import React from 'react';
import { Route, Link } from 'react-router-dom'
import './layout/menu.css'
const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Phone',
        to: '/phone',
        exact: false
    },
    {
        name: 'Laptop',
        to: '/laptop',
        exact: false
    },
    {
        name: 'Admin',
        to: '/admin',
        exact: true
    },
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : ''
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};
class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <ul className='collapse navbar-collapse navbar-ex1-collapse' >
                            <ul className="nav navbar-nav">
                                {this.showMenu(menus)}
                            </ul>
                            <form className="navbar-form navbar-left" role="search">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Product, catagories ... " />
                                </div>
                                <button type="submit" className="btn btn-default">Search</button>
                            </form>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/Register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                                <li><Link to="/Login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                                <li>
                                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatarIcon" />
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            })
        }
        return result;
    }
}

export default Menu;
