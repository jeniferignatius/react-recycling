import '../App.css';
import React, {Component} from 'react';
import features from "./Features";
import logoImg from "../img/logo1.jpg";

class Home extends Component {
  constructor() {
      super();
      this.state = features;
      this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.state.itemsToShow === 3 ? (
      this.setState({ itemsToShow: this.state.items.length, expanded: true })
    ) : (
      this.setState({ itemsToShow: 3, expanded: false })
    )
  }

  render() {
    return (
        <>
        <div className="intro__wrapper">
            <img className="intro__wrapper__image"
                 src={logoImg}
                 alt="store"/>
            <div className="intro__text">
                <h1 className="intro__wrapper__title">
                Pelasta maailma!
                </h1>
                <p className="intro__wrapper__subtitle">
                    Meidän kauttamme tavarasi saavat uuden kodin 
                </p>
            </div>
        </div>
        <div className="intro__items">
            {this.state.items.slice(0, this.state.itemsToShow).map((item, index) => (
            <div className="intro__feature">
                <img className="intro__feature__image"
                 src="https://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/1024/star-icon.png"
                 alt="star"/>
            <div className="intro__feature__text">
                <h1 className="intro__feature__title">
                    {item.title}
                </h1>
                <p className="intro__feature__subtitle">
                    {item.subtitle}
                </p>
            </div>
            </div>
            ))}
        </div>
        <p>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="button__show-more" onClick={this.showMore}>
              {this.state.expanded ? (
                <span>Show less</span>
              ) : (
                <span>Show more</span>
              )}
            </a>
        </p>
        </>
    )
  }
}

export default Home;