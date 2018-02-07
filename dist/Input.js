'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui-next/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Form = require('material-ui-next/Form');

var _Input = require('material-ui-next/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Progress = require('material-ui-next/Progress');

var _IconButton = require('material-ui-next/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ArrowDropDown = require('material-ui-icons/ArrowDropDown');

var _ArrowDropDown2 = _interopRequireDefault(_ArrowDropDown);

var _ArrowDropUp = require('material-ui-icons/ArrowDropUp');

var _ArrowDropUp2 = _interopRequireDefault(_ArrowDropUp);

var _Cancel = require('material-ui-icons/Cancel');

var _Cancel2 = _interopRequireDefault(_Cancel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Input(_ref) {
  var getInputProps = _ref.getInputProps,
      loading = _ref.loading,
      downshiftProps = _ref.downshiftProps;

  var _downshiftProps$getIn = downshiftProps.getInputProps(_extends({}, getInputProps && getInputProps(downshiftProps))),
      label = _downshiftProps$getIn.label,
      disabled = _downshiftProps$getIn.disabled,
      inputProps = _objectWithoutProperties(_downshiftProps$getIn, ['label', 'disabled']);

  return _react2.default.createElement(
    _Form.FormControl,
    { disabled: disabled, fullWidth: true },
    _react2.default.createElement(
      _Input.InputLabel,
      null,
      label
    ),
    _react2.default.createElement(_Input2.default, _extends({
      endAdornment: _react2.default.createElement(
        _Input.InputAdornment,
        { position: 'end' },
        !disabled && !!downshiftProps.selectedItem && _react2.default.createElement(
          _IconButton2.default,
          { onClick: downshiftProps.clearSelection },
          _react2.default.createElement(_Cancel2.default, null)
        ),
        !disabled && _react2.default.createElement(
          _IconButton2.default,
          { onClick: downshiftProps.toggleMenu },
          downshiftProps.isOpen ? _react2.default.createElement(_ArrowDropUp2.default, null) : _react2.default.createElement(_ArrowDropDown2.default, null)
        )
      )
    }, inputProps)),
    loading && _react2.default.createElement(_Progress.LinearProgress, { style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 2
      } })
  );
}

exports.default = Input;