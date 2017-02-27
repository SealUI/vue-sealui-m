<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>SealUI-M</title>
  </head>
  <body ontouchstart>
    <div id="app"></div><% if (process.env.NODE_ENV === 'production') { %>
        <script src="//cdn.bootcss.com/babel-polyfill/6.23.0/polyfill.min.js"></script>
        <script src="//cdn.bootcss.com/vue/2.1.10/vue.min.js"></script>
        <script src="//cdn.bootcss.com/vue-router/2.0.3/vue-router.js"></script>
        <script src="//cdn.bootcss.com/fastclick/1.0.6/fastclick.js"></script>
<% } %>
  </body>
</html>
