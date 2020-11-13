<br />
<p align="center">

  <h3 align="center">Projet Pweb 2020: Car'App</h3>

  <p align="center">
    Une web app pour gérer la location de voitures
    <br />
    ·
    Jules Doumèche
    ·
    Gwénolé Martin
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
* [Contact](#contact)


## A propos du projet

L'objectif du projet est de construire une application web basée sur une architecture [MVC](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur) de location de voitures.
Elle permet aux utilisateurs de parcourir les différents modèles de véhicules mis en location avec une description, une photo, et des caractéristiques pour chaque véhicule.

Celle-ci implémente différents services pour les utilisateurs et les loueurs :

#### Listes des services clients/loueurs

L'utilisateur est le plus souvent une entreprise qui souhaite louer des véhicules:
* Page d'inscription 
![Status][s-fini]
* Connexion (non obligatoire pour voir la page d'accueil) 
![Status][s-fini]
* Page d'accueil qui affiche les différents modèles proposés
![Status][s-fini]
* Réduction de 10% si paiement mensuel (à partir d'un mois) 
![Status][s-fini]
* Connexion obligatoire pour une location
![Status][s-fini]
* Sélection d'une intervalle de date 
![Status][s-fini] ![Rôle][s-customer]
* Possibilité de réaliser un paiement mensuel sans date limite (renouvellement chaque mois)
![Status][s-fini] ![Rôle][s-customer]
* Affichage des modèles disponibles à la location selon les dates entrées
![Status][s-fini] ![Rôle][s-customer]
* Page de récapitulative d'une location 
![Status][s-fini] ![Rôle][s-customer] ![Rôle][s-renter]
* Panel de toutes les locations effectuées 
![Status][s-fini] ![Rôle][s-customer] ![Rôle][s-renter]
* Accès à la facture 
![Status][s-fini] ![Rôle][s-renter]
* Panel de gestion 
![Status][s-fini] ![Rôle][s-renter]
* Affichage des revenus, des réservations du mois en cours
![Status][s-fini] ![Rôle][s-renter]
* Affichage du pourcentage de véhicules en cours de location 
![Status][s-fini] ![Rôle][s-renter]
* Affichage du nombre de client 
![Status][s-fini] ![Rôle][s-renter]
* Tableau des dernières locations
![Status][s-fini] ![Rôle][s-renter]
* Page de récapitulative des véhicules avec les statuts de chaque véhicule 
![Status][s-fini] ![Rôle][s-renter]
* Page de modification d'un véhicule (non loué), avec possibilité de retirer le véhicule du stock 
![Status][s-fini] ![Rôle][s-renter]
* Formulaire d'ajout d'un nouveau véhicule 
![Status][s-fini] ![Rôle][s-renter]
* Page de tout les clients 
![Status][s-fini] ![Rôle][s-renter]
* Calcul des factures pour chaque client du mois courant 
![Status][s-fini] ![Rôle][s-renter]

#### Administrateur
Un rôle Administrateur est aussi implémenté:
* Panel d'administration 
![Status][s-fini] ![Rôle][s-admin]
* Affichage du nombre d'utilisateurs 
![Status][s-fini] ![Rôle][s-admin]
* tableau de tous les utilisateurs inscrits 
![Status][s-fini] ![Rôle][s-admin]
* Possibilité de supprimer un compte 
![Status][s-fini] ![Rôle][s-admin]
* Possibilité de définir un compte utilisateur en compte renter 
![Status][s-fini] ![Rôle][s-admin]
* Possibilité de définir un compte renter en compte utilisateur 
![Status][s-fini] ![Rôle][s-admin]

#### Sécurité
L'application repose sur une structure solide qui permet de garantir la sécurité:
* Authentification sécurisé avec token de connexion
![Status][s-fini]
* Mot de passe hashé, avec possibilité de rehasher le mot de passe 
![Status][s-fini]
* Restrictions d'accès à certaines urls en fonction du rôle 
![Status][s-fini]
* Données stockés dans une base de données avec accès sécurisé 
![Status][s-fini]


### Technologies
Cette application web utilise certaines technologies et frameworks:

##### Front-end
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)

##### Back-end
* [Symfony 5](https://symfony.com/)
* [Node.js](https://nodejs.org/en/)

Une liste des dépendances est disponible ci-dessous


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

1. Vérifier la configuration de symfony
```sh
symfony check:requirements
```
2. Cloner le repos, ou télécharger l'archive correspondante dans votre IDE
```sh
cd /carapp
git clone https://github.com/julio4/CarApp.git
```
3. Installer les dépendances
```sh
composer install
```
4. Démarrer le serveur mySql (exemple: [XAMPP](https://www.apachefriends.org/fr/index.html))

5. Configurer la base de données

##### A partir de notre base 
Importer la base dans mysql avec l'aide du script ```carapp.sql```
  
  OU
  
##### A partir d'une nouvelle base, importer le schéma avec doctrine:
  
   - Configurer la connexion à la base dans le dossier `.env`:
```php
@.env:28
DATABASE_URL='mysql://root:@127.0.0.1:3306/<BASE>' //(par défault:carApp)
```
   - Charger le schéma de la base:
```sh
php bin/console doctrine:schema:update --force
```
   - Charger des données de base () :
```sh
  php bin/console doctrine:fixtures:load
```
  
6. (optionel) Installer les certificats
```sh
symfony server:ca:install
```

7. (optionel) Charger le cache en avance pour accélérer le site
```sh
php bin/console cache:warmup
```

8. Démarrer le serveur web
```sh
symfony server:start
```

L'application est disponible en environnement de développement en local à l'adresse [localhost:8000](https://127.0.0.1:8000/)

- Le compte administrateur de base est accessible avec l'utilisateur `admin` et le mot de passe `password`

- Un compte loueur est accessible avec l'utilisateur `loueur` et le mot de passe `password`

- Trois comptes clients sont accessibles: `Daisi Carignan`,`Ernest Bonenfant`,`Alita Robert` avec le mot de passe `passwordpassword`

### Extensions utilisées

Ces extensions sont automatiquement installées en suivant [le guide d'installation](#Installation)

##### Back-end
* [Twig](https://twig.symfony.com/) : gérer les vues du site grâce à des templates avancées
* [Doctrine ORM](https://www.doctrine-project.org/projects/orm.html) : gérer les modèles, les entitées et la connexion à la base de données
* [Webpack Encore](https://packagist.org/packages/symfony/webpack-encore-bundle) : gérer tous les assets front-end, injecte le css, le javascript et les librairies supplémentaires
* [Symfony/form](https://packagist.org/packages/symfony/form) : gérer la création et le traitement des formulaires
* [Symfony/maker-bundle](https://packagist.org/packages/symfony/maker-bundle) : créer des classes types rapidement et efficacement
* [Symfony/security-bundle](https://packagist.org/packages/symfony/security-bundle) : gérer les connections et les rôles de chaque utilisateurs
* [Symfony/validator](https://packagist.org/packages/symfony/validator) : vérifie les données des formulaires pour correspondre au schéma de la base de données
* [Symfony/web-profiler-bundle](https://packagist.org/packages/symfony/validator) : barre de débug en environnement de développement


##### Front-end
* [Chart.js](https://www.chartjs.org/) : affichage de graphiques dynamiques
* [bsCustomFileInput](https://www.npmjs.com/package/bs-custom-file-input) : importation de fichier avec bootstrap

<!-- USAGE EXAMPLES -->
## Utilisation

Documentation des fonctionnalitées offertes par notre application ! (voir le rapport de projet)[Status][s-fini] 

<!-- CONTACT -->
## Contact

Jules Doumèche - [@julio4](https://github.com/julio4) - jules.doumeche@etu.parisdescartes.fr
Gwénolé Martin - [@LightBowFire](https://github.com/LightBowFire/) - gwenole.martin@etu.parisdescartes.fr
Mehdi Hachisman - [@Mehachi](https://github.com/Mehachi/) - mehdi.hachisman@etu.parisdescartes.fr

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[s-url]: (#roadmap)
[s-a-faire]: https://img.shields.io/static/v1?label=Statut&message=A%20faire&color=red
[s-en-cours]: https://img.shields.io/static/v1?label=Statut&message=En%20cours&color=orange
[s-fini]: https://img.shields.io/static/v1?label=Statut&message=Termin%C3%A9e&color=green
[s-customer]: https://img.shields.io/static/v1?label=Rôle&message=Client&color=yellow
[s-renter]: https://img.shields.io/static/v1?label=Rôle&message=Loueur&color=purple
[s-admin]: https://img.shields.io/static/v1?label=Rôle&message=Admin&color=red
[s-bug]: https://img.shields.io/static/v1?label=Statut&message=Bug&color=purple
[s-frontend]: https://img.shields.io/static/v1?label=Front-end&message=90%&color=green
[s-backend]: https://img.shields.io/static/v1?label=Back-end&message=40%&color=orange
[screenshot]: images/screenshot.png
