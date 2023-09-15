# ÉVALUATION

-> Projet à rendre sur un repo github
-> M'envoyer le lien sur vincent.zerbib@ynov.com
-> M'inviter en tant que collaborateur sur le repo (id : ynovzelab)

## À FAIRE : 

  - Créer des routes (pages) sur votre application 
    -> https://reactrouter.com/en/main/start/tutorial

        - Homepage
        - Register
        - News
        - Contact

    -> API à utiliser : https://freefakeapi.io/api#collection_posts

  - Faire un header 
    - Logo (optionel)
    - Menu qui reprend la navigation 

  - Sur toutes les pages 

    - appeler un composant TitlePage pour générer le titre de chaque page
  
  - Sur la homepage : 
    - Récupérer les 5 derniers articles et les afficher sous forme de card 
    - Penser à faire une librairies de composants : 
      -> PostCard
      -> PostsGrid

  - Sur la page news : 
    - Récupérer tous les articles de l'API
    - Et les afficher sous forme de card dans une grille (comme sur la home)

  - Sur la page register :
    - Créer un formulaire avec les inputs suivants :
      - Firstname
      - Lastname
      - Email
      - Password
      - Button submit (au click faire un console log des valeurs du champs sur la fonction submit rattaché à ce bouton)
    - Ce formulaire doit être réactif (doit fonctionner avec des states)
    - Créer des composants : 
      -> Input
      -> Button
  
  - Page contact 
    Créer un formulaire avec les champs suivants : 

      - FirstName
      - LastName
      - Object 
      - Message
      - Button submit (console.log des valeurs des champs)
      - Ce formulaire doit être réactif (doit fonctionner avec des states)
      - Ce formulaire doit utiliser les composants Input et Button

#BONUS

  - Créer une page single article
    -localhost:3000/news/[id]