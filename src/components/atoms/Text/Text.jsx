import React from 'react';
import withText from '../../../hoc/withText';
import style from './style.scss';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

class Text extends React.Component {
  render() {
    const block = cn(this.props.block);
    const className = block(this.props.mod)
      .split(' ')
      .map(name => style[name])
      .join(' ');
    return <span className={className}>{this.props.children}</span>;
  }
}

const StyledText = withText(Text, 'text');
const Header = withText(Text, 'header');
const Title = withText(Text, 'title');
const Subtitle = withText(Text, 'subtitle');

Text.propTypes = {
  block: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export { StyledText as Text, Header, Title, Subtitle };
