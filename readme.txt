/*** 

    Présentation du projet et des technologies

BollyFoodMarket est une plateforme d'e-commerce proposant des produits provenant d'Inde dans le but de rendre accessible la culture culinaire indienne à toutes et à tous partout en France. L'idée est d'offrir des gammes de produits typiques utilisés par les ménages indiens aux Français afin qu'ils puissent réaliser leurs plats indiens favoris avec des épices de qualité et typiques des régions d'Inde.

La partie front-end sera faite en Javascript/REACTJS et la partie back-end API en PHP/Symfony. L'utilisation de Typescript sera optionnelle au cours de la réalisation du projet mais pourra être ajoutée au cours de sa finalisation.

L'application utilisera une architecture MVC afin de séparer les différents corps de l'application et la rendre scalable, sécurisée et maintenable.

Vue -> REACTJS
Controller -> Symfony API
Modèle -> Base de données
Ce projet est réalisé par :

Brandon Braganza brandoncomptedevpro@gmail.com

A débuté le 27/05/2024.


***\

/***

    Utilisation du projet

Dans un premier temps, mettez à jour votre fichier .env de votre application :

Si vous utilisez PostgreSQL, veuillez décommenter cette ligne :

29 # DATABASE_URL="postgresql://yourUserName:YourPassword@127.0.0.1:5432/BOLLYFOODMARKET?serverVersion=16&charset=utf8"

Ensuite, créez votre base de données avec cette ligne de commande dans votre terminal :


php bin/console doctrine:database:create

Vérifiez que la base de données a bien été créée dans votre SGBDR.

Intégrez des données dans votre base de données grâce aux fixtures avec cette commande :

php bin/console doctrine:fixtures:load

Cela permettra d'envoyer des données fictives en base de données.

Nouveau projet
***/