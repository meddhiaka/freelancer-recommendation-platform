FROM python:3.9.19-slim-bullseye

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY models/ /app/models/
COPY routes/ /app/routes/
COPY main.py /app/

EXPOSE 80

CMD [ "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "1337" ]
