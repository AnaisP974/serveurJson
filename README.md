# json-server

Création d'une API JSON en local de type REST.

## Installation


## Utilisation

Les endpoints (points d'accès) sont définis dans le fichier `db.json`.

## Opérations

Il est possible de faire les même opérations de CRUD classique : 

| Opérations | HTTP |
| --------- | ---- |
| Création | POST |
| Récupération | GET |
| Modification | PUT |
| Suppression | DELETE |


### POST

| Objectif | Endpoint | Paramètres |
| -------- | -------- | ---------- |
| Ajout d'un docteur | /doctors | donnée du schéma |

### GET

| Objectif | Endpoint | Paramètres |
| -------- | -------- | ---------- |
| Accès à tous les docteurs | /doctors | aucun|
| Accès à un docteur donné | /doctors/:id | id : int |
| Tri de par ville | /doctors?_sort=city | `_sort` |
| Tri de par ville et  de Z à A | /doctors?_sort=city&_order=desc | `_sort`, `_order` |
| Docteurs par ville | /doctors?city=Paris | donnée du schéma |
| Pagination par 10 | /doctors?_page=1 | `_page` |
| Limite de résultats | /doctors?_limit=7 | `_limit` |