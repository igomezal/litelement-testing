import { storiesOf, html } from '@open-wc/storybook';
import '../src/LitElementTesting/litelement-testing.js';

storiesOf('litelement-testing', module)
  .add(
    'default',
    () => html`
      <litelement-testing>user content tag: litelement-testing</litelement-testing>
    `,
  )
  .add(
    'right',
    () => html`
      <litelement-testing class="right">user content tag: litelement-testing</litelement-testing>
    `,
  );
