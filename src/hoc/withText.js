import React from 'react';

const withText = (Wrapped, type) => {
  return class extends React.Component {
    render() {
      return <Wrapped style={type} {...this.props} />;
    }
  };
};

export default withText;
