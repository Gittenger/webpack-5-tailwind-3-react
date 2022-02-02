import React from 'react';

import Chevron from '../../assets/icons/chevron-up.svg?react';

const ToggleNavButton = ({ showNavList, onClickFunc, className }) => (
  <div
    className={showNavList ? `${className} active` : `${className} inactive`}
    onClick={onClickFunc}
  >
    <Chevron />
  </div>
);

export default ToggleNavButton;
