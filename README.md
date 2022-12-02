PROJECT INITIALIZATION

PREREQUISITES:

* You need to have docker installed on your machine (If not, install manually apache2, php 8.1 and node 19 on your machine and configure a vhost to serve the project)
* Run docker compose up (or "docker-compose up" depending on your docker version)
* Create a .env.local file with this string DATABASE_URL="mysql://root:@glob-sav-grp-mysql_57-1:3306/gsg?serverVersion=5.7&charset=utf8mb4" or replace that value in the current .env file
* To install the backend, connect to the apache docker container with "docker exec -it gsg_apache bash"
* Once inside, run "composer install"
* Execute this command to load the migrations "bin/console doctrine:migrations:migrate"
* To have tests data to start the project, run "bin/console doctrine:fixtures:load"
* To install the frontend, connect to the node docker container with "docker exec -it gsg_node sh"
* Then, run "yarn install" (You might need to exec docker compose stop and docker compose up after this)
* Access the frontend project at http://localhost:9090
* Access the api backend swagger documentation at http://localhost:8080/api
* On page to create/edit a voucher, click on the button "generate voucher code"