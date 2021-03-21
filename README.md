# Wiki-API

## Descripcion en español

Pequeña API que permite a los usuarios publicar y recuperar articulos usando reglas de Wikipedia. 

Rutas


| METODO | RUTA | DESCRIPCIÓN |
|:-------|:----|:-----------|
| GET | /articles | Lista de todos los artículos |
| GET |   /article/{articleTitle} | Obtiene el artículo con título ```articleTitle```
| POST | /articles | Agrega un artículo a la base de datos, los datos deben ser mandados en formato ```Content-Type```, ```application/x-www-form-urlencoded; charset=utf-8``` parametros: ```title```, ```content``` |
| PUT |  /article/{articleTitle} | Reemplaza un artículo con titulo ```articleTitle```, los datos deben ser mandados en formato ```Content-Type```, ```application/x-www-form-urlencoded; charset=utf-8```parametros : ```title```, ```content``` |
| PATCH | /article/{articleTitle} | Actualiza un artículo con el título ```articleTitle``` |
| DELETE | /articles | Borra todos los artículos |
| DELETE | /article/{articleTitle} | Borra el artículo con el título ```articleTitle``` |

## English Description

Small API tha allows users to post and retrieve articles in a Wikipedia style (Article Name at the end of the URL )

Routes

| METHOD | ROUTE | DESCRIPTION |
|:-------|:----|:-----------|
| GET | /articles | Lists all articles |
| GET |   /article/{articleTitle} | Retrieves an article with title ```articleTitle```
| POST | /articles | Adds an article to the database. Data must be send with  ```Content-Type``` as ```application/x-www-form-urlencoded; charset=utf-8``` parameters: ```title```, ```content``` |
| PUT |  /article/{articleTitle} | Replaces an article with title ```articleTitle```.Data must be send with  ```Content-Type``` as ```application/x-www-form-urlencoded; charset=utf-8``` parameters: ```title```, ```content``` |
| PATCH | /article/{articleTitle} | Updates an article with title ```articleTitle``` |
| DELETE | /articles | Deletes all articles |
| DELETE | /article/{articleTitle} | Deletes an article with title ```articleTitle``` |