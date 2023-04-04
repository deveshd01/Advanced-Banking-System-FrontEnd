import React, { useState } from 'react';

const styles = {
  counter: {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    display: 'inline-block',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    margin: '5px',
    cursor: 'pointer',
  },
};

class CounterExecutive extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentToken: null,
      };
      this.callNextToken = this.callNextToken.bind(this);
      this.markTokenAsServiced = this.markTokenAsServiced.bind(this);
    }
  
    // Define a method that allows the counter executive to call the next token in the queue
    callNextToken(queue) {
      // Check if there is already a token being serviced at this counter
      if (this.state.currentToken !== null) {
        console.log(`Counter ${this.props.counterId}: A token is already being serviced.`);
        return;
      }
  
      // Check if the queue is defined
      if (!queue) {
        console.log(`Counter ${this.props.counterId}: Queue is not defined.`);
        return;
      }
  
      // Loop through the tokens in the queue and find the first one that matches the services assigned to this counter
      for (let i = 0; i < queue.length; i++) {
        const token = queue[i];
        if (this.props.assignedServices.includes(token.service) && token.status === 'pending') {
          // Mark the token as being serviced and assign it to this counter
          token.status = 'being served';
          token.servedAt = new Date();
          token.servedBy = this.props.counterId;
          this.setState({ currentToken: token });
  
          // Display the token information on the counter display
          console.log(`Counter ${this.props.counterId}: Serving token ${token.number} for ${token.service}.`);
  
          return;
        }
      }
  
      // If no matching token was found, display a message
      console.log(`Counter ${this.props.counterId}: No tokens found for assigned services.`);
    }
  
    // Define a method that allows the counter executive to mark the current token as serviced
    markTokenAsServiced() {
      // Check if there is a token being serviced at this counter
      if (this.state.currentToken === null) {
        console.log(`Counter ${this.props.counterId}: No token is being serviced.`);
        return;
      }
  
      // Mark the token as serviced and remove it from this counter's current token variable
      const token = this.state.currentToken;
      token.status = 'serviced';
      token.completedAt = new Date();
      console.log(`Counter ${this.props.counterId}: Token ${token.number} for ${token.service} has been serviced.`);
      this.setState({ currentToken: null });
    }
  
    render() {
      // Render the counter display with the current token information
      return (
        <div className="counter-executive">
          <div className="counter-id">Counter {this.props.counterId}</div>
          <div className="current-token">
            {this.state.currentToken !== null && (
              <div>
                Token {this.state.currentToken.number} for {this.state.currentToken.service}
              </div>
            )}
          </div>
          <button className="next-token-btn" onClick={() => this.callNextToken(this.props.queue)}>
            {/* Next Token */}
          </button>
          <button className="mark-serviced-btn" onClick={this.markTokenAsServiced}>
            Mark Serviced
          </button>
        </div>
      );
    }
  }
  export default CounterExecutive;