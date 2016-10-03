# Eleven Labs

Prise de fonction en tant que développeur/concepteur full stack le `2015-12-15T09:00:00+0100`.

## Mission France Télévision Edition numérique 

### Plateforme des Tops

Prise de fonction en tant que développeur/concepteur full stack le `2016-01-04T09:00:00+0100`.

Equipe: 

 - 1 développeur
 - 1 PO

Environnement technique:

 - PHP 5.3
 - Symfony 2.3
 - Doctrine2 (anciennement propel 1.6)
 - twig
 - CSS, LESS
 - Javascript, jquery, npm, grunt, bower, ajax
 - D3js (gestion timeline interactive)
   
Mission:

Refonte complète de l’outil interne de réconciliation des tops antennes (F2, F3, F4...) avec la grille des programme:
 - Remise au propre des spécifications fonctionnelles et techniques.
 - Découplage logiciel des différentes briques
 - Migration de Propel1.6 à Doctrine2
 - Mise en place de validation de données
 - Simplification de l'algorithme de consolidation des tops
 - Utilisation de D3JS pour la création d’une timeline interactive (pan/zoom) afin de faciliter la visualisation et la correction des tops
 - Migration de la BDD en UTC
 - Intégration complète du BO en material design, jQuery
 - Mise en place de transmission d’informations consolidés par le biai de rabbitMQ (transverse FTV)

Fin de fonction le `2016-09-30T18:00:00+0200`.

### Vidéo factory

Prise de fonction en tant que développeur/concepteur full stack le `2016-10-03T09:00:00+0200`.

Equipe: 

 - 1 Lead développeur
 - 8 Dev
 - 2 PO

Environnement technique:

 - PHP 5.6 / 7
 - Symfony 2.8 / 3, Workflow, Lock
 - MongoDb
 - RabbitMQ, swarrot, Dead lettering, Poison Message
 - Elastic Logstash Kibana,
 - newRelic
   
Mission:

Refonte complète de l’outil interne de préparation des contenus média pour les divers produits web du groupe (pluzz / franceinfo / france tv sport / site chaîne et programme / Outremer):
 - Accompagnement dans l’architecture logicielle / fonctionnelle des différents microservices (auth / right / metas / media / workers)
 - Développement d’API restful (niveau 2 Richardson)
 - Mise en place d’un système de tâche asynchrone scalable et à haute résilience (Composant Workflow / rabbitMQ dead-letter / Composant Lock)
