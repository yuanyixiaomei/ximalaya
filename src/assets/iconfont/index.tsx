/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconIconTest from './IconIconTest';
import IconShouye from './IconShouye';
import IconTingshu from './IconTingshu';
import IconRedHeart from './IconRedHeart';

export type IconNames = 'icon-icon-test' | 'icon-shouye' | 'icon-tingshu' | 'icon-red-heart';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-icon-test':
      return <IconIconTest key="1" {...rest} />;
    case 'icon-shouye':
      return <IconShouye key="2" {...rest} />;
    case 'icon-tingshu':
      return <IconTingshu key="3" {...rest} />;
    case 'icon-red-heart':
      return <IconRedHeart key="4" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
