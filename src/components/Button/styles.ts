import { ButtonVariantStyles } from './types';

const containedStyles: ButtonVariantStyles = (theme) => ({
  container: {
    width: '100%',
  },
  content: {
    borderRadius: 6,
    width: '100%',
    height: 56,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.md,
  },
});

export default containedStyles;
