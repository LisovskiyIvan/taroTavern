/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'rose': '#FFC8DD',
      'blue': '#A2D2FF',
      'violet': '#CDB4DB',
      'notblack': '#0D0D0D'
    }
  },
};
export const plugins = [
  plugin(({ matchUtilities, theme }) => {
    matchUtilities(
      {
        clamp(value) {
          const sizes = theme('fontSize');
          const split = value
            .split('-')
            .map(v => sizes[v] ? sizes[v]['0'] : v);
          return {
            fontSize: `clamp(${split[0]}, ${split[1]}, ${split[2]})`,
          };
        }
      });
  })
];
