# Cahier des Charges - NOZAMA

## 1. Introduction

### 1.1 Contexte

Nous allons développer l'application "NOZAMA", pour la gestion des colis des clients, avec une interface sur Java FX.
Nos clients sont des entreprises qui commandent des marchandises réunient dans un colis.
Notre activité sera donc exclusivement du B2B

### 1.2 Objectifs

Créer une application métier permettant de gérer les colis des clients pour qu'ils ne soient pas perdu, et/ou gerer les imprévus tel que des pertes, des vols, ou pour toute autre problèmes.

## 2. Description du Projet

### 2.1 Fonctionnalités

- Enregistrement des colis en lien aux clients.
- Gestion des colis des clients pour le transport entre entrepôts.
- Statut du coli accessible a tout le monde 

## 3. Exigences Techniques

### 3.1 Plateforme

L'application sera développée en JavaFX pour une interface utilisateur graphique et réactive.

### 3.2 Base de Données

Utilisation d'une base de données pour stocker les informations des clients, des colis, et des adresses.

## 4. Interface Utilisateur

### 4.1 Conception

Conception d'une interface simple avec des fonctionnalités intuitives pour faciliter la gestion des colis.

- **Coté professionnel :**
![IMAGE](Documents/Maquettes/maquette_pro.png)

- **Coté client :**
![IMAGE](Documents/Maquettes/maquette_client.png)

### 4.2 Enregistrement des Informations

Possibilité d'enregistrer (sous respect du RGPD) les informations des clients, des colis, et de gérer le statut des colis.

## 5. Sécurité

### 5.1 Protection des Données

Mise en place de mesures de sécurité pour garantir la confidentialité des données des clients.

### 5.2 Authentification

Accès à l'application sécurisé par un système d'authentification user.

![IMAGE](Documents/Maquettes/maquette_connexion.png)

