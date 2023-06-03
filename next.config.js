module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/events',
        destination: '/',
        permanent: false,
      },
    ];
  },
};
