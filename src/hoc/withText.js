import React from 'react';

const withText = (Wrapped, block) => {
  return class extends React.Component {
    render() {
      return <Wrapped block={block} {...this.props} />;
    }
  };
};

export default withText;
