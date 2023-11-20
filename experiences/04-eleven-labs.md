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

Fin de fonction le `2017-05-31T09:00:00+0200`.

## Mission ETSGlobal 

Prise de fonction en tant que développeur/concepteur full stack le `2017-06-01T09:00:00+0200`.

Equipe: 

 - 1 chef de projet
 - 9 développeur
 - 1 PO

Environnement technique:

 - PHP 5.4, 5.6
 - Symfony 2.3, 3
 - Doctrine2 (anciennement propel 1.6)
 - MongoDb
 - RabbitMQ, swarrot, Dead lettering, Poison Message
 - Elastic Logstash Kibana
 - CSS, SASS
 - React, GraphQL, Apollo, Angular 2, moment
    
Mission:

Développer et maintenir l'ensemble des applications et microservices de ETSGlobal Europe.
 - partie B2B (gestion de contrats, inscripions, création de session, gestion tarifaire) backoffice spécialisé
 - website partie B2C (inscription, tunnel de paiement, voucher)
 - Refactoring du système de message queueing (RabbitMQ)
   - passage d'un système très coupler (genre RPC, 100+exchanges, 200+ queues direct) à un système basé sur des events (réutilisable, 10 exchanges, 100 queues topic).
   - mise en place d'une nomenclature pour les exchanges/queue routing keys
   - passage d'un retry applicatif (puis manuel), au système de Dead Letter de RabbitMQ (automatique) et gestion des Poison Messages (max retry, lifetime)
 - Remise à plat de tous les logs applicatifs avec Monolog (gelfhandler, ELK) avec l'ajout et la normalisation du contexte pour avoir des informations utiles et exploitables.

Fin de fonction le `2018-12-31T18:00:00+0100`.

## Mission ETF1 / TF1 (plateforme MyTF1 / TF1+)

Prise de fonction en tant que développeur/concepteur backend Go (full stack) le `2019-01-04T09:00:00+0100`.

Equipe: 

 - équipe plateforme backend TF1 (monorepo partagé, plusieurs dizaines de contributeurs)

Environnement technique:

 - Go (monorepo de microservices), TypeScript/React (fronts d'administration)
 - gRPC / Protobuf, REST, GraphQL (persisted queries)
 - Redis, Elasticsearch, DynamoDB, MongoDB, S3
 - AWS Cognito, Gigya, JWT/JWKS, OAuth2 (Orange, SFR, Bytel)
 - libvips, OpenCV/pigo (détection de zones d'intérêt)
 - OpenTelemetry, Datadog, Prometheus
 - Bazel, Docker (Alpine), Nix, vendoring Go

Mission:

Développement et maintenance des microservices de la plateforme alimentant MyTF1, TFOUMAX puis TF1+ (environ 820 commits, 2019-2023):

 - **2019 — Recommandation et tops** (`2019-01-04` → `2019-03-13`)
   - Création de reco-top en version alpha (`2019-02-05`): endpoints gRPC `topProgram` / `topVideo`, calcul des tops IPTV.
   - Indexation Elasticsearch: rotation d'alias (`2019-01-21`), purge d'index (`2019-01-30`), bulk insert.
   - Découpage du champ `screen` en application / device / OS (`2019-02-21`).
   - Pondération des résultats par persona et par application (`2019-03-08` / `2019-03-12`).
   - Client gRPC reco-api, releases 0.0.4 et 0.0.5 (`2019-03-01`).
 - **2019-2020 — Catalogue IPTV et GraphQL**
   - Covers IPTV, descriptions de cover (indexation et troncature), poids de tri, tailles d'images.
   - Persisted queries GraphQL, mise à jour de GraphiQL (`2022-04-15`).
 - **2020-2021 — Authentification et identité**
   - Authentification Gigya, `accounts.getPolicies` (`2020-11-18`), `accounts.getAccountInfo` (`2020-11-26`).
   - Intercepteurs de token HTTP/gRPC (`2020-10-30`), TTL de token personnalisable (`2020-10-28`), timeout du serveur gRPC (`2020-10-28`).
   - Package `pkg/security`: JWT avec `kid` (`2021-01-13`), migration vers JWKS (`2021-01-14` → `2021-02-09`), JWT custom par utilisateur Cognito (`2021-02-11`).
   - Migration vers AWS Cognito (`2021-05-27` → `2021-09-29`) et service cognito-connect (`2020-11-24`).
   - OAuth2 Orange pour les tokens v2 (`2021-06-14`), consentements externes (`2021-04-21`).
 - **2021 — User API et abonnements**
   - Exposition des API d'abonnement utilisateur (`2021-02-08`) et niveaux utilisateur avec limiteur Redis (`2021-02-19` → `2021-03-11`).
   - Envoi de liens par e-mail (SMTP, keep-alive), suppression d'utilisateur (`2021-03-08`).
   - Tests unitaires des resolvers GraphQL (`2021-05-26`).
 - **2021-2022 — Médiathèque: overlays et traitement d'images**
   - Overlays: éditeur et overlay intégrale (`2021-10-19` → `2022-01-07`), nouveaux overlays (`2022-04`), overlay Film (`2022-09-06`).
   - Package `image` (`2022-02-28`), helpers ROI (`2022-05-11`), fallback à 5 ROI (`2022-07-28`), suppression des ROI invalides (`2022-06-28`), support SVG (`2022-09-01`), outils de debug d'image (`2022-06-21`).
   - Refonte du serveur HTTP, backend MongoDB (`2021-10`), Alpine 3.16 pour libvips 8.12 (`2022-07-05`).
 - **2022 — Observabilité et robustesse**
   - Tripperware de trace HTTP (`2022-10-14`), traces Redis/DynamoDB (`2022-10-25`), séparation trace / traceID Datadog (`2022-11-14`), suppression de Graylog (`2021-11-08`).
   - Fetcher multi-JWK (`2022-11-21`), certificat SFR et refonte de l'authentification SFR (`2022-10-12`).
 - **2023 — Free tickets, Livelike, tests fonctionnels**
   - API Free tickets exporter (`2023-03-03` → `2023-03-08`), middleware d'autorisation, cache-control, reporter panic/crash.
   - Dépréciation des nodes `sources` (`2023-05-15`), vidéo par emID (`2023-05-30`).
   - Intégration Livelike dans le CMS (`2023-08-22` → `2023-09-21`): plugin sur les programmes, nœud GraphQL des programmes Livelike, widgets.
   - Refresh token à usage unique puis révoqué (`2023-09-11`).
   - Tests fonctionnels user-api (`2023-09-22` → `2023-11-07`): device token, pair flow, Orange, Bytel, Gigya, IPTV; tests unitaires des clients Bytel et Orange.

Fin de fonction le `2023-11-07T18:00:00+0100` (date du dernier commit).

## Mission France Télévision (Video Factory et Tops)

Prise de fonction en tant que développeur/concepteur full stack le `2023-11-20T09:00:00+0100`.

Equipe: 

 - 5 développeurs back
 - 2 développeurs front
 - 2 lead développeurs
 - 5 PO
 - 1 QA

Environnement technique:

 - PHP 8.1 → 8.3, Symfony 5.4 → 6.4 / 7, Doctrine, Messenger
 - MariaDB 10.3 → 11, MongoDB 5 → 7, RabbitMQ, OpenSearch
 - JavaScript (Gulp → Rollup/Vite, ESLint)
 - Docker (multi-architecture, buildx), GitLab CI, Makefile
 - Monolog, New Relic, DORA

Mission:

Évolution et modernisation des applications Video Factory et Tops (environ 250 commits répartis sur 35 dépôts):
