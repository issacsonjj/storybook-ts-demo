import * as React from 'react';
import { storiesOf, action, addDecorator } from '@kadira/storybook';
import backgroundColor from 'react-storybook-decorator-background'

import FooButton from './FooButton';




addDecorator(backgroundColor(['#000000', '#ffffff']));



storiesOf('FooGroup', module)
  .add('default', () => (
    <div style={{width: "640px"}}>
      <FooButton />
    </div>
  ));