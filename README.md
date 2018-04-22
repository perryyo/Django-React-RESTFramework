# Django app with Django Rest Framework and ReatJS
This sample project that uses the Django Rest Framework, Docker and ReactJs. The backend and frontend run on docker and are completely decoupled. The backend has no knowledge of frontend. The frontend is static but can call the backend REST Apis.
## Structure
- Backend
    - Django
    - Django-Rest-Framework
- frontend
    - ReactJs
    - Create-React-App
    - Reactstrap (Bootstrap 4 components)
## Requirements
* Python (2.7, 3.4, 3.5, 3.6)
* Django (1.11, 2.0)
* Django REST Framework (3.6, 3.7)
* ReactJs

## Installation 
### __*Setup*__
1. Open a cmd terminal, install node modules:
    ```
    git clone https://github.com/Dieumerci/Django-React-RESTFramework.git
    cd Django-React-RESTFramework
    ```
    > Browse to http://localhost:3000/
### __*Dependencies for ReactJS Frontend*__
To setup and run the application, you're going to need npm from NodeJS available to install the frontend code(REACTJS).
__*Ensure that you are in the react_fronend directory*__.

1. Open a cmd terminal, install node modules:
    ```
    npm install 
    ```
2. Start node server:
    ```
    npm run start
    ```
    > Browse to http://localhost:3000/


### __*Dependencies for Django and DjangoRestFramework*__
You're encouraged to setup a virtualenv to work in prior to configuring the dependencies.
__*Ensure that you are in the contentfeed directory*__.

1. Install Python Requirements
    ```
    pip install -r requirements.txt
    python setup.py develop 
    ```
2. Django migrate, create admin user
    ```
    ./manage.py migrate
    ./manage.py createsuperuser
    ```
3. Create Django migrate, create admin user
    ```
    python manage.py migrate
    python manage.py createsuperuser
    ```
    Connect to the Django server and the sqlite3 test database
    
4. Run Django server
    ```
    python manage.py runserver
    ```
5. Login to Django Admin: Enter title, description and image.
    ```
    http://localhost:8040/admin/
    ```
    Or go to: Django REST framework to Enter title, description and image.
    ```
    http://127.0.0.1:8000/api/item/
    ```
---
>  The default index.html in templates is over ridden by React, Rest API. Once you have made request at htttp://127.0.0.1:8000/api/item/ see the changes at http://localhost:3000/
---

## __*Setup Docker*__
 Start an application with Django and React, deploy with Docker quickly.
1. Run Project with Docker
    ```
    docker-compose up 
    ```
2. To build the image do:
    ```
    docker build -t deereact/django https://github.com/Dieumerci/Django-React-RESTFramework.git
    ```
3. To run a container do:
    ```
    docker run --name "django" -p 9080:80 -d -t deereact/django
    ```
