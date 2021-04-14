import React, { Component } from "react";
import { BigContents, Content, MainContents } from "./MainContents";
import Banner from "./Home/Banner";
import Contents from "./Home/Contents";
import { Link } from "react-router-dom";
import "./Home/Contents.css";

class Home extends Component {
    state = {
        mainContent: MainContents,
        bigContent: BigContents,
        contents: Content
    };
    render() {
        return (
            <div>
                <Banner></Banner>
                <div className="home__cont">
                    {this.state.mainContent.map((item) => {
                        return (
                            <div key={item.id}>
                                <Contents
                                    id={item.id}
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}>
                                </Contents>
                            </div>
                        );
                    })}
                </div>
                <div className="bighome">
                    <h2>Broadway Online Experiences</h2>
                    <p>
                        Join live, interactive performances and conversations with people
                        from Broadway and beyond. Without leaving home.
                    </p>
                    <div className="home__cont">
                        {this.state.bigContent.map((item) => {
                        return (
                            <div key={item.id}>
                            <Contents
                                big={true}
                                id={item.id}
                                img={item.img}
                                styles={item.styles}
                                description={item.description}
                            />
                            </div>
                        );
                        })}
                    </div>
                    <button className="E__btn">Explore all</button>
                    </div>
                    <div className="home__cont">
                    {this.state.contents.map((item) => {
                        return (
                        <div key={item.id}>
                            <Link to={`/result/${item.id}`} className="link">
                            <Contents
                                id={item.id}
                                img={item.img}
                                title={item.title}
                                amount={item.price}
                                description={item.description}
                            />
                            </Link>
                        </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Home;