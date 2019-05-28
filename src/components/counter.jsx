import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwipmKCevr7iAhXWwAIHHa-fCCAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fnature%2F&psig=AOvVaw10UgBKySX0_gDg2uj7qFCK&ust=1559141874392390"
  };

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
