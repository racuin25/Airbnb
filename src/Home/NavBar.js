import React from "react";
import Header from "../Header";
import "./NavBar.css";

class NavBar extends React.Component {
    listener = null;
    state = {
        nav: false
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > 70) {
            if (!this.state.nav) {
                this.setState({ nav: true });
            }
        } else {
            if (this.state.nav) {
                this.setState({ nav: false });
            }
        }
    };

    render() {
        return (
            <div>
                <div className={`Nav ${this.state.nav && "Nav__black"}`}>
                    <Header />
                </div>
            </div>
        );
    }
}

export default NavBar;