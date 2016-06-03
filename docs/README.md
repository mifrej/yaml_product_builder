Task: Build a UI component that generates product configuration files

Our product service has 2 components:
- ProductBuilder: UI component that allows Legalbase admins to create products. generates a yml configuration for each product
- ProductService: retrieves the configuration file for a given product UUID. generates html (server side). delivers text/html content to the browser

Your task is to create a simple ProductBuilder that generates a configuration file with support for the following HTML elements: input, textarea, radio, file. 

The attached sample configuration yml "ProductConfiguration-Arbeitsvertrag-pruefen.yml" corresponds to the "Arbeitsvertrag-pruefen" product we have on the Legalbase - https://legalbase.de/Produkte/Arbeitsvertrag-pruefen/Arbeitsvertrag-jetzt-pruefen

