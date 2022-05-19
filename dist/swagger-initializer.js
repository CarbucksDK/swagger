window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
        {url: "https://car.api.carbucks.io/swagger.yaml", name: "Car"},
        {url: "https://login.api.carbucks.io/swagger.yaml", name: "Login"},
        {url: "https://message.api.carbucks.io/swagger.yaml", name: "Message"},
        {url: "https://user.api.carbucks.io/swagger.yaml", name: "User"},
        {url: "https://order.api.carbucks.io/swagger.yaml", name: "Order"}
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
