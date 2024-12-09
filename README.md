![Backend CI/CD](https://github.com/software-students-fall2024/5-final-bug-creator-v5/actions/workflows/backend-ci.yml/badge.svg)
![Frontend CI/CD](https://github.com/software-students-fall2024/5-final-bug-creator-v5/actions/workflows/frontend-ci.yml/badge.svg)

# Personal Blog System
Welcome to your new personal blog system! With this web-app, you can create an account and write, edit, and delete posts. You'll also be able to read other people's posts and comment your thoughts. 

[**Link to Website**](http://159.203.170.238/)

## Project Description
There are three main components to this web-app:
* [**Frontend**](https://hub.docker.com/r/bowenx76/blog-frontend)
* [**Backend**](https://hub.docker.com/r/bowenx76/blog-backend/tags)
* **MongoDB**

Click the links above to see the container images on DockerHub.

### Setup Instructions

If you want to develop this program locally:

1) Clone the Repository
```
git clone https://github.com/software-students-fall2024/5-final-bug-creator-v5
cd 5-final-bug-creator-v5
```
2) Create the .env file in the root directory of the project
```
# MongoDB
MONGO_ROOT_USERNAME=admin
MONGO_ROOT_PASSWORD=adminpassword
MONGO_DATABASE=blogdb

# Mongo Express
MONGOEXPRESS_LOGIN=admin
MONGOEXPRESS_PASSWORD=adminpassword

# JWT
SECRET_KEY=secret
```
3) Start the Docker container
```
docker-compose up
```

After these steps, your application should be running - open a web browser and navigate to localhost:80.

### Contributors

[**Bowen Ma**](https://github.com/mabowen1013)

[**Junqi Zhao**](https://github.com/JunqiZhao888)

[**Hanlin He**](https://github.com/Alpha-He)

[**Andrew Qin**](https://github.com/Andrewqin1)
