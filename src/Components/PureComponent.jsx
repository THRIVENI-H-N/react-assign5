import React from "react";


class PureComponent extends React.PureComponent {

    
    constructor(props) {
        super(props);
        this.state = {
            firstCount: 0
        }
    }

    updateFirstCount = () => {
        this.setState({firstCount: this.state.firstCount+1});
    }

    render() {
        return (
            <div>
                <p>While using Pure Components, Things to be noted are that, In these components, the Value of State and Props are Shallow Compared (Shallow Comparison) and It also takes care of “shouldComponentUpdate” Lifecycle method implicitly.</p>

                <ol>
                    <li>So there is a possibility that if these State and Props Objects contain nested data structure then Pure Component’s implemented shouldComponentUpdate will return false and will not update the whole subtree of Children of this Class Component. So in Pure Component, the nested data structure doesn’t work properly.</li>
                    <li>In this case, State and Props Objects should be simple objects and Child Elements should also be Pure, means to return the same output for the same input values at any instance.</li>
                </ol>

                <p>firstCount: {this.state.firstCount}</p>
                <p>secondCount: {this.props.handleFirstCount}</p>

                <button className="btn btn-secondary" onClick={this.updateFirstCount}>First button</button>

            </div>
        );
    }
}

export default PureComponent;