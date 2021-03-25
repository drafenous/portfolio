
// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }
import { addDecorator } from '@storybook/react';
import withGlobalStyles from './withGlobalStyles';

addDecorator(withGlobalStyles);
