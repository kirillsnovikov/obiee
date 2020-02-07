import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

export class Button extends React.Component {
  render() {
    const { children, type, action, link } = this.props;
    let button;
    if (link) {
      button = (
        <LinkButton link={link} type={type}>
          {children}
        </LinkButton>
      );
    } else {
      button = (
        <ActionButton action={action} type={type}>
          {children}
        </ActionButton>
      );
    }
    return <div>{button}</div>;
  }
}
const ActionButton = props => {
  return (
    <div
      className={[style.button, style[`button_type_${props.type}`]].join(' ')}
      onClick={props.action}
    >
      {props.children}
    </div>
  );
};
const LinkButton = props => {
  return (
    <a
      href={props.link}
      className={[
        style.button,
        style.link,
        style[`button_type_${props.type}`]
      ].join(' ')}
    >
      {props.children}
    </a>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  action: PropTypes.func,
  link: PropTypes.string
};
