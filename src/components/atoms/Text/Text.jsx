import React from 'react';
import withText from '../../../hoc/withText';
import style from './style.scss';
import PropTypes from 'prop-types';

class Text extends React.Component {
  render() {
    // const { mod } = this.props;
    console.log(this);
    // console.log(this.props);
    return <p className={style[this.props.style]}>{this.props.children}</p>;
  }
}

const StyledText = withText(Text, 'text');
const Header = withText(Text, 'header');
const Title = withText(Text, 'title');
const Subtitle = withText(Text, 'subtitle');

Text.propTypes = {
  mod: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

export { StyledText as Text, Header, Title, Subtitle };
