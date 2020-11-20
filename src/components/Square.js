import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
          squareValue: this.props.value,
        }
      }
    render() {
        return (
            <div className="square">
                <input type="text" maxLength="1"
                onKeyPress={this.onKeyPress}
                onChange={this.onChange}
                value={this.state.squareValue} 
                disabled={this.props.squareStatus}
                />
            </div>
        )
    }

    // Only allow numbers 1-9 to be entered into the box
    onKeyPress= e =>  {
        const keyCode = e.keyCode || e.which;
        const keyValue = String.fromCharCode(keyCode);

        // If the character entered is not 1-9, don't allow it 
        if (!/^([1-9])$/.test(keyValue))
          e.preventDefault();
      }

      // Update the state of the value when the user enters a number
      onChange = e => {
        let input = e.target.value;
        let boxID = this.props.boxID;
        let squareID = this.props.squareID;

        // DEBUG - console.log(`The value ${input} was entered into square ${squareID} of box ${boxID}`);
        this.setState({
            squareValue: input,
        });
        this.props.updateBoard(input, boxID, squareID);
    }
}

export default Square;