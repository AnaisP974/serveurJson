# json-server
Création d'une API JSON en local de type REST.


## Installation  

## Utilisation  

Les endpoints (points d'accès) sont définis dans le fichier 'db.json'.

## Opérations
Il est possible de faire les mêmes opérations de CRUD classique :  
| Opération | HTTP |
|-----------|------|
| Création | POST |
| Récupération | GET |
| Modification | PUT |
| Suppression | Delete |


### GET  

| Objectif | Endpoint | Paramètres |
|----------|----------|------------|
| Accès à tous les docteurs | /doctors | aucun |
| Accès à un docteur donné| /doctors/:id | id: int |
| Tri de par ville | /doctors?_sort=city | '_sort'|
| Tri de par ville et de Z à A | /doctors?_sort=city&_order=desc | '_sort', '_order'|
| Docteurs par ville | /doctors?city=Paris | donnée du schéma |
| Pagination | /doctors?_page=1 | '_page' |
| Limiter le résultat | /doctors?_limit=14 | '_limit' |
