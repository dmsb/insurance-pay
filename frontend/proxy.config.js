const proxy = [
    {
      context: '/insurancepay',
      target: 'http://localhost:4000'
      //pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;