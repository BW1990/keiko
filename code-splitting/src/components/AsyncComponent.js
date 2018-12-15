import React, { Component } from 'react';

// higher order component; returns another component
export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({
                component
            });
        }

        render() {
            const Component = this.state.component;
            return Component ? <Component {...this.props} /> : null;
        }
    }
    return AsyncComponent;
}