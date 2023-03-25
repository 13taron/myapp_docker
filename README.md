# Node.js Application with MySQL Database and Nginx Reverse Proxy

This is a sample Node.js application that uses a MySQL database and Nginx as a reverse proxy. The application is dockerized and can be easily deployed using the docker-compose file provided.

## Directory Structure

- `app.yaml` - docker-compose file that defines the services and their configurations
- `app/` - directory containing the Node.js application code
- `mysql/` - directory containing the MySQL database initialization script and the environment variables file
- `nginx/` - directory containing the Nginx configuration file

## Running the Application

To run the application, navigate to the project directory and run the following command:

`docker-compose -f app.yaml up`


The Node.js application is listening on port 3000. Once the containers are up and running, you can access the application by navigating to http://localhost:3000 in your web browser.

## Node.js Application

The Node.js application code is located in the `app/` directory. It is dockerized using the Dockerfile provided and is mounted as a volume in the container. The `.env_app` file in the project directory contains environment variables that are used in the docker-compose file to configure the Node.js application.

## MySQL Database

The MySQL database is dockerized and is defined in the docker-compose file as a service. The database initialization script is located in the `mysql/` directory and is run when the container is started. The script creates the necessary database, user, and grants privileges to the user for the application. The `.env_db` file in the `mysql/` directory contains environment variables that are used in the docker-compose file to configure the MySQL service.

## Conclusion

This application provides a basic setup for running a Node.js application with a MySQL database and Nginx as a reverse proxy. It can be easily customized and extended to fit your specific needs.

