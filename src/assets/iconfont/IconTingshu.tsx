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

let IconTingshu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M660.8 430.4c1.6 0 4.8 0 6.4-1.6 8-3.2 11.2-12.8 8-20.8-4.8-11.2-11.2-22.4-19.2-33.6-4.8-6.4-16-8-22.4-3.2-6.4 4.8-8 16-3.2 22.4 6.4 8 11.2 17.6 16 27.2 3.2 4.8 8 9.6 14.4 9.6zM606.4 332.8c-24-12.8-49.6-19.2-75.2-19.2-36.8 0-72 12.8-99.2 35.2-6.4 4.8-8 16-3.2 22.4 3.2 3.2 8 6.4 12.8 6.4 3.2 0 6.4-1.6 9.6-3.2 40-32 96-36.8 140.8-12.8 8 4.8 17.6 1.6 22.4-6.4 1.6-9.6-1.6-19.2-8-22.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M785.6 510.4v-44.8c0-145.6-118.4-264-264-264S257.6 320 257.6 465.6v44.8c-48 14.4-80 57.6-80 107.2v80c0 62.4 49.6 112 112 112s112-49.6 112-112v-80c0-49.6-32-92.8-80-107.2v-44.8c0-110.4 89.6-200 200-200s200 89.6 200 200v44.8c-48 14.4-80 57.6-80 107.2v80c0 62.4 49.6 112 112 112s112-49.6 112-112v-80c0-49.6-32-92.8-80-107.2z m-448 107.2v80c0 27.2-20.8 48-48 48s-48-20.8-48-48v-80c0-27.2 20.8-48 48-48s48 20.8 48 48z m464 80c0 27.2-20.8 48-48 48s-48-20.8-48-48v-80c0-27.2 20.8-48 48-48s48 20.8 48 48v80z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconTingshu.defaultProps = {
  size: 18,
};

IconTingshu = React.memo ? React.memo(IconTingshu) : IconTingshu;

export default IconTingshu;
