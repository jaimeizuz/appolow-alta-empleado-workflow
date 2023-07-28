mvn ^
    -Dquarkus.swagger-ui.always-include=true ^
    -Dquarkus.http.cors=true ^
    -Dquarkus.http.cors.origins=* ^
    -Dquarkus.kogito.devservices.enabled=true ^
    -Dquarkus.devservices.enabled=true ^
	-Dquarkus.rest-client."todos-endpoint-url".url=https://jsonplaceholder.typicode.com ^
clean compile quarkus:dev