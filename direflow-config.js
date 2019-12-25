module.exports = {
  direflowMetadata: {
    title: 'f-library-demo-project',
    description: 'This project is created using Direflow',
    type: 'direflow-component',
    createVersion: '2.1.0',
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Advent Pro', 'Noto Sans JP'],
        },
      },
    },
  ],
};
