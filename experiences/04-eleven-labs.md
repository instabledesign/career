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

 - **Novembre 2023 – mars 2024**
   - Endpoint `/player-orange` pour Orange TV Everywhere (`2023-12-14`).
   - Tests fonctionnels du `ReplayJob` avec mock du client Zencoder (`2023-11-23` / `2024-03-01`).
   - Nettoyage PHP de la gateway (`2024-02-13`), ajout de l'ID de programme Plurimédia sur les vidéos (`2024-03-26`).
 - **Avril – juin 2024**
   - Synchronisation des files, exchanges et bindings RabbitMQ depuis la production (`2024-04-17`).
   - Mise à jour de la purge AWS (`2024-04-15`), passage de `media` à MongoDB 5 (`2024-05-24`).
   - Catégories vidéo et purge des groupes vides (`2024-05-06` / `2024-05-23`).
   - Tops: preview agrandie (`2024-04-02`), correction de la fuite mémoire de la liste des diffusions (`2024-06-19`).
   - Images PHP 8.2 puis 8.3 (`2024-06-24` / `2024-06-25`).
   - `messenger-bundle`: tests unitaires, compatibilité Symfony 6/7, CI PHP 8.1 à 8.3 (`2024-06-14` → `2024-06-25`).
   - Identifiants Disney dans factory (`2024-06-27`).
 - **Juillet – août 2024**
   - Amélioration de l'ergonomie de la page de détail Tops (`2024-07-23` / `2024-07-26`).
   - Passage de `metas` à Symfony 6.4 (`2024-07-02`) et PHPUnit 10 (`2024-06-04`).
 - **Septembre 2024 — normalisation de l'infrastructure** (64 commits)
   - Normalisation de la construction et du tag des images Docker (mariadb, rabbitmq, php, node, varnish, mongodb, ftpd) le `2024-09-06`, puis dans une vingtaine de projets le `2024-09-09`.
   - Nouvelle image MariaDB nettoyée (`2024-09-10`), suppression de la base legacy (`2024-09-11`).
   - Node 20 (`2024-09-06`), MongoDB 7 (`2024-09-24`), images multi-architecture ARM avec buildx (`2024-09-25`).
   - Externalisation du chemin des images dans `integration` (`2024-09-06`).
 - **Octobre – novembre 2024**
   - sIDCase sur les tops et règles de matching début/fin (`2024-10-11`).
   - Analyse et suppression des dépendances inutilisées, normalisation de 114 fichiers (`2024-10-16` / `2024-11-06`).
   - Déploiement mesuré DORA (`2024-11-13` → `2024-12-05`).
   - Correction du filtre prior (`2024-11-19`), suppression du code mort et du bouton Pluzz cassé (`2024-11-21`).
 - **Décembre 2024 – janvier 2025**
   - Logs vers OpenSearch sur 13 services au format Logstash FTV (`2024-12-05` → `2024-12-24`), nouveau `tool-bundle` Monolog (`2024-12-04`).
   - Débrayage Top v1/v2 par chaîne (`2024-12-10` / `2025-01-08`).
   - Correction d'alignement HTML (`2025-01-09`).
   - Retrait de New Relic des services (`2025-01-29`).
 - **Février – avril 2025**
   - Règles de consolidation des tops (`2025-02-21`, `2025-02-25`, `2025-03-14`, `2025-03-24`).
   - Refonte de Tops: suppression du bundle KLX (`2025-02-28`), normalisation du routing, des endpoints et des entités (`2025-04-08` → `2025-04-14`).
   - Réactivation de New Relic sur la gateway (`2025-02-27`), configuration ekino (`2025-03-12`).
   - `mongodb-bundle`: compatibilité avec l'extension MongoDB 2.0 (`2025-04-29` / `2025-04-30`).

Fin de fonction le `2025-04-30T18:00:00+0200` (date du dernier commit).

## Mission Believe (Contracts & Accounts Management)

Prise de fonction en tant que développeur back-end PHP/Symfony le `2025-06-05T09:00:00+0200` (date du premier commit).

Mission en cours au `2026-11-17`.

Equipe: 

 - 3 développeurs back-end (dont moi)
 - 2 développeurs front-end
 - 1 lead dev
 - 1 PO
 - 1 Engineering Manager
 - 1 Product Manager

Environnement technique:

 - PHP 8.4 → 8.5, FrankenPHP, Symfony 7.3 → 7.4 LTS (8.1 sur les nouvelles applications), API Platform 3/4, Messenger, Workflow, Twig, Symfony UX
 - MySQL 8.4, Doctrine ORM 3, Redis, Liquibase
 - Kafka, outbox transactionnelle, Debezium, AsyncAPI
 - Auth0, Okta (OAuth2/OIDC), JWT/JWKS, API Gateway KrakenD, Vault
 - OpenTelemetry, Monolog JSON
 - GitLab CI (building blocks), Argo CD, Kubernetes (GCP), Docker, Renovate
 - PHPUnit 11 → 13, PHPStan, SonarQube, Aikido, Bruno
 - Backstage (TechDocs), MkDocs

Mission:

Développement de la plateforme **Ithaca** (nouvelle plateforme Contrats & Comptes) et des sujets de sécurité et de run associés (815 commits uniques sur 36 dépôts, 92 tickets Jira terminés sur 103 assignés):

 - **Juin – juillet 2025 — prise en main**
   - Chiffrement des mots de passe FTP, OpenAPI dans la console interne, spike Liquibase, table des commissions.
 - **Septembre – octobre 2025 — contrats d'interface et nettoyage des ressources**
   - Génération Swagger et 8 contrats d'interface API avec mocks pour une intégration front précoce, table des seuils.
   - Nettoyage et normalisation des ressources Account, Contract, Deduction, Reserve, Advance.
 - **Novembre – décembre 2025 — référentiels et sécurité**
   - Accounts Reference API : types d'avance, d'échéance, de déduction, de commission, Business Unit, business line sur les contrats.
   - Mise en place d'Auth0 et de l'API Gateway KrakenD.
   - Lancement du Project ID API et du générateur `techdoc-bundle` (déc. 2025).
 - **Janvier – mars 2026 — workflows et événements**
   - Workflow de statut des contrats, compte brouillon et workflow de compte, pays et états, filtres par compte/contrat.
   - Table outbox transactionnelle et événements de comptes, titulaire du compte et création d'utilisateur, règles d'activation.
   - Serveur OAuth2 local `security-dev-server` (jan. 2026).
 - **Avril – juin 2026 — sécurité et import massif**
   - Authentification JWT/JWKS humains et machines, contrôle d'audience et de scope (`2026-04-02`).
   - Import massif de comptes et contrats : job Argo CD, bucket GCS, lecture XLSX avec OpenSpout, validation et traitement (`2026-04-13` → `2026-06-05`).
   - Migration de toutes les collections Bruno de `.bru` vers YAML (`2026-06-08`).
   - Calcul du share initial d'un projet, authentification d'un système partenaire depuis le worker.
 - **Juillet – septembre 2026 — Kafka, bundles et OpenTelemetry**
   - PoC outbox → Debezium → Kafka (`2026-08-07`), Symfony Messenger ↔ Kafka (`2026-08-19`), consommateurs d'événements Release/Recording (`2026-09-21`).
   - Mise à jour en masse du share sur releases et tracks (`2026-09-30`).
   - Création de deux paquets d'auto-instrumentation OpenTelemetry (API Platform, Symfony Security), déployés sur les API CAM.
   - Correction de vulnérabilités sur plusieurs dépôts, nginx 1.31 sur 4 services.
   - Création de `job-orchestrator-bundle`, `security-bundle` et `control-room` (août – octobre 2026).
 - **Octobre – novembre 2026**
   - Authentification Okta pour cam-orchestrator (`2026-10-14`) et interface d'import massif.
   - Montée de version PHP 8.5 / Symfony 7.4 et migration des JWT ADB2C vers Auth0 M2M sur MyServices Legal Center API.
   - Correction de l'erreur 500 sur contrainte d'unicité après suppression de réserves (`2026-11-13`).

Initiatives portées au-delà du backlog: 9 dépôts partagés créés (security-bundle, security-dev-server, job-orchestrator-bundle, techdoc-bundle, control-room, auto-instrumentation OpenTelemetry), standardisation de la sécurité, des badges de documentation et des montées de version sur une douzaine de dépôts, parité local/Kubernetes du `compose.yaml`.
