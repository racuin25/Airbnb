import React from "react";
import { ResultContent } from "./MainContents";
import Nav from "./Nav";
import "./App.css";
import { Link } from "react-router-dom";

class Result extends React.Component {
    state = {
        resultContent: ResultContent,
        clicked: false
    };

    fav = (item) => {
        this.setState({
            clicked: !this.state.clicked
        });
    };

    render() {
        return(
            <div>
                <Nav />
                <div className="result">
                    <h4>{this.state.resultContent.length} stays</h4>
                    <h2>Stays NearBy</h2>
                    <button>Cancellation Flexibility</button>
                    <button>Type Of Place</button>
                    <button>Rooms & Beds</button>
                    <button>More Filters</button>
                </div>
                {this.state.resultContent.map((item) => {
                    return(
                        <div key={item.id}>
                            <Link to={`/result/${item.id}`} className="link">
                                <div className="resultcontent">
                                    <img src={item.img} width="35%" alt="home" />
                                    <div className="resultcontent__info">
                                        <h4>
                                            {item.type} in {item.location}
                                        </h4>
                                        <h3>{item.title}</h3>
                                        <div className="resultconent__body">
                                            <br />
                                            <i style={{ opacity: "0.2" }} > ----- </i>
                                            <br />
                                            <br />
                                            <h4 style={{ paddingBottom: "10px" }}>
                                                {item.smalldescription}
                                            </h4>
                                            <h4>{item.amenities}</h4>
                                        </div>
                                    </div>
                                    <button
                                        className={`resultcontent__heart ${
                                            this.state.clicked && "heart"
                                        }`}
                                        onClick={() => {
                                            this.fav(item);
                                        }}
                                    ></button>
                                    <div className="resultcontent__price">
                                        <span>{item.price}</span> / night
                                    </div>
                                    <div className="resultcontent__star">
                                        ★
                                        <span
                                            style={{
                                                fontSize: "15px",
                                                color: "black",
                                                fontWeight: "normal",
                                            }}
                                            >
                                            {item.rating}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Result;