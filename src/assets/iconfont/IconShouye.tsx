/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconShouye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M932 518.6c-6.4 0-12.8-2.4-17.7-7.3L577.2 174.1c-17.2-17.2-40.3-26.7-64.9-26.7-24.6 0-47.7 9.5-64.9 26.7L110.1 511.3c-9.8 9.8-25.6 9.8-35.4 0-9.8-9.8-9.8-25.6 0-35.4L412 138.8c26.7-26.7 62.3-41.4 100.3-41.4s73.6 14.7 100.3 41.4L949.7 476c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.2-17.7 7.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M689.8 926h-34.6c-13.8 0-25-11.2-25-25v-85c0-31.1-25-56.4-56-57-31 0.6-56 25.9-56 57v85c0 13.8-11.2 25-25 25H334.7c-72.2 0-130.9-65.2-130.9-145.4v-266c0-13.8 11.2-25 25-25s25 11.2 25 25v266c0 52.6 36.3 95.4 80.9 95.4h133.6v-60c0-57.6 45.8-104.8 102.9-106.9 0.7-0.1 1.3-0.1 2-0.1h2.1c0.7 0 1.3 0 2 0.1 57.1 2.2 102.9 49.3 102.9 106.9v60h9.6c44.6 0 80.9-42.8 80.9-95.4v-266c0-13.8 11.2-25 25-25s25 11.2 25 25v266c0 80.1-58.7 145.4-130.9 145.4z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconShouye.defaultProps = {
  size: 18,
};

IconShouye = React.memo ? React.memo(IconShouye) : IconShouye;

export default IconShouye;
