import React from 'react';
import { Route, Link } from 'react-router-dom'
import './layout/menu.css'
import './layout/Search.css'
import axios from 'axios';
import Loader from './../loader.gif';
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
        name: 'Cart',
        to: '/cart',
        exact: false
    },
    // {
    //     name: 'Admin',
    //     to: '/admin',
    //     exact: true
    // },
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
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            loading: false,
            message: '',
        };
        // this.cancel = '';
    }
    fetchSearchResults = (query) => {
        const searchUrl = `http://localhost:3000/products/?name_like=${query}`;
        if (this.cancel) {
            // Cancel the previous request before making a new request
            this.cancel.cancel();
        }
        // Create a new CancelToken
        this.cancel = axios.CancelToken.source();
        axios
            .get(searchUrl, {
                cancelToken: this.cancel.token,
            })
            .then((res) => {
                const resultNotFoundMsg = !res.data.length
                    ? 'There are no more search results. Please try a new search.'
                    : '';
                this.setState({
                    results: res.data,
                    message: resultNotFoundMsg,
                    loading: false,
                });
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch results.Please check network',
                    });
                }
            });
    };
    handleOnInputChange = (event) => {
        const query = event.target.value;
        if (!query) {
            this.setState({ query, results: {}, message: '' });
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResults(query);
            });
        }
    };
    renderSearchResults = () => {
        const { results } = this.state;
        if (results) {
            if (Object.keys(results).length && results.length) {
                return (
                    <div className ="live" >
                        <ul className ="live">
                            {results.map((result) => {
                                return (
                                    <Link to={`/product/${result.id}`}>
                                    <li key={result.id} className ="live">
                                        <img src={result.image} className ="live" />
                                        <h3 className ="live">{result.name} </h3>
                                        <p className ="live">$ {result.price/20000}</p>
                                    </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                );
            }
        }
    };
    render() {
        let style = {
            display: "inline-block",
            width: "100%",
        }
        let styleP = {
            marginLeft: "20px",
            marginTop: "15px",
        }
        let styleNav = {
            marginRight: "0px",
        }
        let styleNavv = {
            marginTop: "0px ",
            marginBottom: "0px"
        }
        var { user, authentication } = this.props;
        const { query } = this.state;
        const { message, loading } = this.state;
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header" style = {style}>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <ul className='collapse navbar-collapse navbar-ex1-collapse' style = {styleNavv}>
                            <ul className="nav navbar-nav">
                                {this.showMenu(menus)}
                                {user.isAdmin === 1 && <li><Link to='/admin' exact >Admin</Link></li>}
                            </ul>
                            <form className="navbar-form navbar-left" role="search" style = {styleNavv}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Product, catagories ... "
                                        type="text"
                                        value={query}
                                        id="search-input"
                                        placeholder="Search..."
                                        onChange={this.handleOnInputChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-default">Search</button>

                            </form>

                            <ul className="nav navbar-nav navbar-right" style ={styleNav}>
                                {authentication === false &&
                                    <>
                                        <li><Link to="/Register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                                        <li><Link to="/Login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                                    </>
                                }

                                <li>
                                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatarIcon" onClick={this.onLogOut} 
                                    width = "50px"/>
                                    
                                </li>
                                <li>
                                    <p style={styleP}>{user.email}</p>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
                {/*Error Message*/}
                {message && <p className="message">{message}</p>}
                {/*Loader*/}
                <img src={Loader} className={`search-loading ${loading ? 'show' : 'hide'}`} alt="loader" />
                {/*Result*/}
                {this.renderSearchResults()}
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
    onLogOut = () => {
        this.props.onLogOut();
    }
}

export default Menu;
