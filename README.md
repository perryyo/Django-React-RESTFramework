# Django app with Django Rest Framework and ReatJS
This sample project that uses the Django Rest Framework, Docker and ReactJs
## Requirements
* Python (2.7, 3.4, 3.5, 3.6)
* Django (1.11, 2.0)
* Django REST Framework (3.6, 3.7)
* ReactJs
## Installation 
### __*Setup*__
1. Open a cmd terminal, install node modules:
    ```
    git clone https://github.com/django-json-api/django-rest-framework-json-api.git
    cd django-rest-framework-json-api
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
>  The default index.html in templates is over ridden by React, Rest API.
---

