import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropsTypes from 'prop-types';
const cx = classNames.bind(styles);
function Button({
  to,
  href,
  large = false,
  text = false,
  primary = false,
  outline = false,
  small = false,
  disabled = false,
  rounded = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
  });
  const props = {
    onClick,
    ...passProps,
  };

  //remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  return (
    <Comp className={classes} {...props}>
      <span className={cx('tittle')}>{children}</span>
    </Comp>
  );
}
Button.propsTypes = {
  to: PropsTypes.string,
  href: PropsTypes.string,
  large: PropsTypes.bool,
  text: PropsTypes.bool,
  primary: PropsTypes.bool,
  outline: PropsTypes.bool,
  small: PropsTypes.bool,
  disabled: PropsTypes.bool,
  rounded: PropsTypes.bool,
  children: PropsTypes.node.isRequired,
  className: PropsTypes.string,
  leftIcon: PropsTypes.node,
  rightIcon: PropsTypes.node,
  onClick: PropsTypes.func,
};
export default Button;
