# Django app with Django Rest Framework and ReatJS
This sample project that uses the Django Rest Framework, Docker and ReactJs
## Requirements
* Python (2.7, 3.4, 3.5, 3.6)
* Django (1.11, 2.0)
* Django REST Framework (3.6, 3.7)
* ReactJs
## Installation 
### __*Dependencies for ReactJS Frontend*__
To setup and run the application, you're going to need npm from NodeJS available to install the frontend code(REACTJS).
Ensure that you are in the react_fronend directory.

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
Ensure that you are in the contentfeed directory.
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
3. Django migrate, create admin user
    ```
    ./manage.py migrate
    ./manage.py createsuperuser
    ```
---
> pip install djangorestframework-jsonapi
---


## Running Django App
```
$ git clone https://github.com/django-json-api/django-rest-framework-json-api.git
$ cd django-rest-framework-json-api
$ pip install -e .
$ django-admin.py runserver --settings=example.settings
```
> Browse to http://localhost:8000
