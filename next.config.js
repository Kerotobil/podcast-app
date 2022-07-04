module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: '/cats',
        destination: 'https://meowfacts.herokuapp.com',
      },
      {
        source: '/nox/:path*',
        destination: 'https://nox-podcast-api.vercel.app/:path*',
      },
    ];
  };
  return {
    rewrites,
  };
};
