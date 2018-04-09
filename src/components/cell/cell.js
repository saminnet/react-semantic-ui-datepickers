import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './cell.css';

const CalendarCell = ({
  selectable,
  selected,
  selectedClassName,
  today,
  ...otherProps
}) => (
  <span
    className={cn('clndr-cell', {
      'clndr-cell-today': today,
      'clndr-cell-disabled': !selectable,
      [selectedClassName]: selected,
    })}
    {...otherProps}
  />
);

CalendarCell.propTypes = {
  selected: PropTypes.bool,
  selectable: PropTypes.bool,
  selectedClassName: PropTypes.string,
  today: PropTypes.bool,
};

CalendarCell.defaultProps = {
  selectedClassName: 'clndr-cell-selected',
};

export default CalendarCell;
