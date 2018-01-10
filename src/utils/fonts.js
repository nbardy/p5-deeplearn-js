import { injectGlobal } from 'styled-components';

import FiraSansRegularWOFF from './../fonts/woff/FiraSans-Regular.woff';
import FiraSansRegularTTF from './../fonts/ttf/FiraSans-Regular.ttf';

import FiraSansBoldWOFF from './../fonts/woff/FiraSans-Bold.woff';
import FiraSansBoldTTF from './../fonts/ttf/FiraSans-Bold.ttf';

import FiraMonoRegularWOFF from './../fonts/woff/FiraMono-Regular.woff';
import FiraMonoRegularTTF from './../fonts/ttf/FiraMono-Regular.ttf';

import FiraSansLightWOFF from './../fonts/woff/FiraSans-Light.woff';
import FiraSansLightTTF from './../fonts/ttf/FiraSans-Light.ttf';

import FiraSansMediumWOFF from './../fonts/woff/FiraSans-Medium.woff';
import FiraSansMediumTTF from './../fonts/ttf/FiraSans-Medium.ttf';

injectGlobal`
  @font-face {
    font-family: 'FiraSansRegular';
    src: url(${FiraSansRegularWOFF}) format('truetype'),
         url(${FiraSansRegularTTF}) format('truetype');
    font-weight: light;
    font-style: normal;
  }
  @font-face {
    font-family: 'FiraSansBold';
    src: url(${FiraSansBoldWOFF}) format('truetype'),
         url(${FiraSansBoldTTF}) format('truetype');
    font-weight: light;
    font-style: normal;
  }
  @font-face {
    font-family: 'FiraMonoRegular';
    src: url(${FiraMonoRegularWOFF}) format('truetype'),
         url(${FiraMonoRegularTTF}) format('truetype');
    font-weight: light;
    font-style: normal;
  }
  @font-face {
    font-family: 'FiraSansLight';
    src: url(${FiraSansLightWOFF}) format('truetype'),
         url(${FiraSansLightTTF}) format('truetype');
    font-weight: light;
    font-style: normal;
  }
  @font-face {
    font-family: 'FiraSansMedium';
    src: url(${FiraSansMediumWOFF}) format('truetype'),
         url(${FiraSansMediumTTF}) format('truetype');
    font-weight: light;
    font-style: normal;
  }
`;