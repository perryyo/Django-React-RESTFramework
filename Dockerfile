FROM python:3

ENV PYTHONUNBUFFERED 1

RUN mkdir /code
WORKDIR /code
COPY . /code/
# Installing OS Dependencies
RUN apt-get update
RUN apk add sqlite
RUN apt-get install -y python python-pip python-dev 
RUN apt-get install -y libxml2-dev libxslt-dev libffi-dev libssl-dev 

# for cache
ADD ./requirements.txt /code/requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.tx


