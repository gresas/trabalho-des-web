FROM python:3.10-alpine

RUN pip install --upgrade pip
RUN pip install virtualenv

WORKDIR /usr/src/app
RUN python -m virtualenv .venv
RUN source ./.venv/bin/activate
RUN pip install django

COPY . .

EXPOSE 8000

CMD python ./manage.py runserver 0.0.0.0:8000