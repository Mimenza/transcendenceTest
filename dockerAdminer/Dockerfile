FROM php:7.4-apache

# Instalar SQLite y otras dependencias necesarias
RUN apt-get update && apt-get install -y sqlite3 libsqlite3-dev

# Hacer que Adminer esté disponible para Apache
RUN curl -o /var/www/html/adminer.php https://www.adminer.org/latest.php

# Exponer el puerto 8081 para Adminer
EXPOSE 8081