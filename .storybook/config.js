import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/index.tsx');
}

configure(loadStories, module);