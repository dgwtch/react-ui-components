import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';

const Switch = (props) => {
    const switchContainerClass = () => {
        let result = '';
        let className = {
            btn: 'rui-switch-container',
            size: props.size && props.size !== 'default' ? props.size : '',
            vertical: props.vertical ? 'vertical' : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const switchClass = () => {
        let result = '';
        let className = {
            btn: 'rui-switch',
            active: props.check ? 'active' : 'disactive',
            double: props.leftLabel || props.leftIcon ? 'double' : '',
            disabled: props.disabled ? 'disabled' : '',
            color: props.color ? props.color : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={switchContainerClass()}>
            {props.leftLabel && !props.leftIcon ? <div className="rui-switch-left-label">{props.leftLabel}</div> : ''}
            {props.leftIcon && !props.leftLabel ? <Icon name={props.leftIcon} color={props.leftIconColor}/> : ''}
            <div className={switchClass()} 
                onClick={() => !props.disabled ? props.onChange() : {}}>
                <span></span>
            </div>
            {props.rightIcon && !props.rightLabel ? <Icon name={props.rightIcon} color={props.rightIconColor}/> : ''}
            {props.rightLabel && !props.rightIcon ? <div className="rui-switch-right-label">{props.rightLabel}</div> : ''}
        </div>
    )
}
Switch.propTypes = {
    leftIcon: PropTypes.string,
    leftIconColor: PropTypes.string,
    rightIcon: PropTypes.string,
    rightIconColor: PropTypes.string,
    leftLabel: PropTypes.string,
    rightLabel: PropTypes.string,
    disabled: PropTypes.bool,
    check: PropTypes.bool,
    onChange: PropTypes.func,
    vertical: PropTypes.bool,
    color: PropTypes.oneOf(['primary','info','success','error']),
    className: PropTypes.string
}
export default Switch;