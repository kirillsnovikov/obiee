import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

export class Button extends React.Component {
  render() {
    const { name, type, action, goto, className } = this.props;
    let button;
    if (goto) {
      button = <LinkButton goto={goto} name={name} type={type} />;
    } else {
      button = <ActionButton action={action} name={name} type={type} />;
    }
    return <div className={className}>{button}</div>;
  }
}
const ActionButton = props => {
  return (
    <div
      className={[style.button, style[`button_type_${props.type}`]].join(' ')}
      onClick={props.action}
    >
      {props.name}
    </div>
  );
};
const LinkButton = props => {
  return (
    <a
      href={props.goto}
      className={[
        style.button,
        style.link,
        style[`button_type_${props.type}`]
      ].join(' ')}
    >
      {props.name}
    </a>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  action: PropTypes.string,
  goto: PropTypes.string,
  className: PropTypes.string
};
