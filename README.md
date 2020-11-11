<br />
<p align="center">

  <h3 align="center">Projet Pweb 2020: Car'App</h3>

  <p align="center">
    Une web app pour gérer la locations de voitures
    <br />
    ·
    <br />
    <a href="https://carapp2020.netlify.app">Voir la Démo</a>
    ·
    Jules Doumèche
    ·
    Gwnénolé Martin
    ·
    Mehdi Hachisman
  </p>
</p>


<!-- Sommaire -->
## Sommaire

* [A propos du projet](#a-propos-du-projet)
* [Technologies](#technologies)
* [Installation](#installation)
* [Prérequis](#prérequis)
* [Démarrage](#démarrage)
* [Utilisation](#utilisation)
* [Pré-Rapport](#pré-rapport)
* [Contact](#contact)


## A propos du projet

[![Screen][screenshot]](https://carapp2020.netlify.app)

L'objectif du projet est de construire une application web basée sur une architecture [MVC](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur) de location de voitures.
Elle permet aux utilisateurs de parcourir les différents modèles de véhicules mis en locations avec une description, photo, et caractéristiques pour chaque véhicule.

Celle-ci implémente un nombre de services à la fois pour les utilisateurs et les loueurs:

#### Utilisateurs
L'utilisateur est le plus souvent une entreprise qui souhaite louer des véhicules:
* Page d'inscription 
![Status][s-fini]
* Connexion (non obligatoire) 
![Status][s-fini]
* Page d'accueil qui affiche les différents modèles proposé 
![Status][s-bug]
* Sélection d'une intervalle de date 
![Status][s-fini]
* Possibilité de réaliser un paiement mensuel sans date limite (Abonnement) 
![Status][s-bug]
* Filtrage par caractéristiques et prix 
![Status][s-a-faire]
* Affichage des modèles disponibles à la locations selon les dates entrée 
![Status][s-bug]
* Récapitulatif de commande pour valider la location d'un ou plusieurs véhicules 
![Status][s-a-faire]
* Page de récapitulatif d'une location 
![Status][s-a-faire]
* Panel de toutes les locations effectuées 
![Status][s-a-faire]
* Accès au facture 
![Status][s-a-faire]
* Paramètres du comptes (changer de mot de passe, d'adresse email, etc) 
![Status][s-a-faire]
* Réduction de 10% si paiement mensuel (à partir d'un mois) 
![Status][s-bug]

#### Loueur
L'utilisateur est le plus souvent une entreprise qui souhaite louer des véhicules:
* Connexion obligatoire 
![Status][s-fini]
* Panel de gestion 
![Status][s-fini]
* Affichage des revenue, des réservations du mois en cour 
![Status][s-a-faire]
* Affichage du pourcentage de véhicules en cour de location 
![Status][s-a-faire]
* Affichage du nombre de client 
![Status][s-a-faire]
* Graphique des revenue/réservation 
![Status][s-en-cours]
* Tableau des dernières locations 
![Status][s-en-cours]
* Page de récapitulatif d'une location 
![Status][s-en-cours]
* Page de récapitulatif des véhicules avec les status de chaque véhicule 
![Status][s-en-cours]
* Page de modification d'un véhicule (non loué), avec possibilité de retirer le véhicule du stock 
![Status][s-en-cours]
* Formulaire d'ajout d'un nouveau véhicule 
![Status][s-fini]
* Page de tout les clients 
![Status][s-a-faire]
* Calcul des factures pour chaque client du mois courant 
![Status][s-a-faire]
* Page de statistiques global 
![Status][s-a-faire]

#### Administrateur
Un rôle Administrateur est aussi implémenté:
* Accès sécurisé 
![Status][s-fini]
* Panel d'administration 
![Status][s-fini]
* Affichage du nombres d'utilisateurs inscrits 
![Status][s-fini]
* Affichage du nombres de loueurs 
![Status][s-a-faire]
* Affichage du nombres d'utilisateurs 
![Status][s-fini]
* tableau de tout les utilisateurs inscrits 
![Status][s-fini]
* Possibilité de supprimer un compte 
![Status][s-fini]
* Possibilité de définir un compte utilisateur en compte loueur 
![Status][s-fini]
* Possibilité de définir un compte loueur en compte utilisateur 
![Status][s-fini]

#### Sécurité
L'application repose sur une structure solide qui permet de garantir la sécurité:
* Authentification sécurisé avec token de connexion 
![Status][s-fini]
* Mot de passe hashé, avec possibilité de rehasher le mot de passe 
![Status][s-fini]
* Restrictions d'accès à certaines url en fonction du rôle 
![Status][s-fini]
* Données stockés dans une base de donnée avec accès sécurisé 
![Status][s-fini]


### Technologies
Cette application web utilise certaines technologies et frameworks:

##### Front-end
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)

##### Back-end
* [Symfony 5](https://symfony.com/)

Une liste des dépendances est disponible XXXXXXXXXXXXXXX


<!-- Installation -->
## Installation

Voici comment mettre en place l'application dans votre environnement de développement

### Prérequis

* [PHP >7.2.5](https://www.php.net/downloads)

Configuration du fichier php.ini:
```php
extension=fileinfo
extension=gd2
extension=exif
extension=mysqli
extension=pdo_mysql
```
* [Composer](https://getcomposer.org/download/)
```sh
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'c31c1e292ad7be5f49291169c0ac8f683499edddcfd4e42232982d0fd193004208a58ff6f353fde0012d35fdd72bc394') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```
* [Symfony Cli 5.x](https://symfony.com/download)

### Démarrage

1. Cloner le repos, ou télécharger l'archive correspondante dans votre IDE
```sh
git clone --à venir--
```
2. Installer les dépendances
```sh
composer install
```
3. Configurer la base de données

  - Configurer la connection à la base dans le dossier `.env`:
```php
@.env:28
DATABASE_URL='mysql://root:@127.0.0.1:3306/<BASE>'
```
  - A partir de notre base : Importer la base dans mysql et vérifier la configuration ci-dessus dans le .env
  
  OU
  
  - A partir d'une nouvelle base, importer le schéma avec doctrine:
```sh
php bin/console doctrine:schema:update --force
```
  - Charger les données de base:
```sh
  php bin/console doctrine:fixtures:load
```
  - Démarrer le serveur mySql (exemple: [XAMPP](https://www.apachefriends.org/fr/index.html))
  
4. (optionel) Installer les certificats
```sh
symfony server:ca:install
```
5. Démarrer le serveur web
```sh
symfony server:start
```

L'application est disponible en environnement de développement en local à l'adresse [localhost:8000](https://127.0.0.1:8000/)

Le compte administrateur de base est accessible avec l'utilisateur `admin` et le mot de passe `password`
Un compte loueur est accessible avec l'utilisateur `demoLoueur` et le mot de passe `password`
Un compte utilisateur est accessible avec l'utilisateur `demoUser` et le mot de passe `password`

### Extensions utilisées

Ces extensions sont automatiquement installées en suivant [le guide d'installation](#Installation)

##### Back-end
* [Twig](https://twig.symfony.com/) : gérer les vues du sites grâce à des templates avancées
* [Doctrine ORM](https://www.doctrine-project.org/projects/orm.html) : gérer les modèles, les entitées et la connection à la base de données
* [Webpack Encore](https://packagist.org/packages/symfony/webpack-encore-bundle) : gérer tous les assets front-end, injecte le css, le javascript et les librairies supplémentaires
* [Symfony/form](https://packagist.org/packages/symfony/form) : gérer la créations et le traitement des formulaires
* [Symfony/maker-bundle](https://packagist.org/packages/symfony/maker-bundle) : créer des classes types rapidement et efficacement
* [Symfony/security-bundle](https://packagist.org/packages/symfony/security-bundle) : gérer les connections et les rôles de chaques utilisateurs
* [Symfony/validator](https://packagist.org/packages/symfony/validator) : vérifie les données des formulaires pour correspondre au schéma de la base de donnée
* [Symfony/web-profiler-bundle](https://packagist.org/packages/symfony/validator) : barre de débug en environnement de développement


##### Front-end
* [Chart.js](https://www.chartjs.org/) : affichage de graphique dynamique
* [bsCustomFileInput](https://www.npmjs.com/package/bs-custom-file-input) : importation de fichier avec bootstrap

<!-- USAGE EXAMPLES -->
## Utilisation

_Documentation des fonctionnalitées offertes par notre applications ![Status][s-a-faire]_



## Pré-Rapport

Avancement du projet (estimation): ![Front-End][s-frontend] ![Back-end][s-backend]

#### Gestion du temps

Nous avons dans un premier temps pris beaucoup de temps à identifier les fonctionnalités à implémenter.
Pour cela nous avons réfléchi à un schéma de base de données cohérent pour éviter des complications plus tard dans la suite du projet.

Nous avons ensuite fait des maquettes des pages en HTML5 et CSS avec l'aide de Bootstrap pour avoir une idée globale de l'aspect du site.
Puis nous avons choisi de développer l'application à l'aide de Symfony 5, qui respecte l'architecture MVC.
Cela nous a pris un peu de temps pour prendre en main ce framework qui est très complet et nous avons donc attendu de bien le comprendre avant de développer nos premiers services.
Cependant cet apprentissage n'a pas été une perte de temps car nous avons pu rapidement développer une "structure" fonctionnelle de notre application.

#### Services réalisés

Nous avons décider de commencer par la sécurité du site, avec l'enregistrement des utilisateurs sous différents rôles, les formulaires de connexions, d'enregistrements, etc ...
Nous avons aussi mis en place un espace Administrateur différent du loueur, qui permet de gérer directement les utilisateurs.

Puis nous avons commencé à implémenter les services correspondants à chaque utilisateur, cependant nous préférons empêcher tout bug ou disfonctionnement ce qui prend beaucoup de temps à développer. En effet, tout erreur est gérée par les controllers.


#### Répartitions du travail

Nous nous sommes répartis les tâches facilement pour créer les maquettes et les différents services grâce à github.

<!-- CONTACT -->
## Contact

Jules Doumèche - [@julio4](https://github.com/julio4) - jules.doumeche@etu.parisdescartes.fr
Gwénolé Martin - [@LightBowFire](https://github.com/LightBowFire/) - gwenole.martin@etu.parisdescartes.fr
Mehdi Hachisman - [@Mehachi](https://github.com/Mehachi/) - mehdi.hachisman@etu.parisdescartes.fr

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[s-url]: (#roadmap)
[s-a-faire]: https://img.shields.io/static/v1?label=Status&message=A%20faire&color=red
[s-en-cours]: https://img.shields.io/static/v1?label=Status&message=En%20cours&color=orange
[s-fini]: https://img.shields.io/static/v1?label=Status&message=Termin%C3%A9e&color=green
[s-bug]: https://img.shields.io/static/v1?label=Status&message=Bug&color=purple
[s-frontend]: https://img.shields.io/static/v1?label=Front-end&message=90%&color=green
[s-backend]: https://img.shields.io/static/v1?label=Back-end&message=40%&color=orange
[screenshot]: images/screenshot.png
