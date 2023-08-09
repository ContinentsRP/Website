import {LocaleState} from "@/features/i18n/TranslatorSlice";

const frTranslation: LocaleState = {
    name: "Français",
    initials: "fr",
    strings: {
        "index.head.title": "Découvrez la puissance du logiciel communautaire Minecraft.",
        "index.head.subtitle": "MohistMC se consacre à repousser les limites en accomplissant l'impossible grâce à la création d'un logiciel Minecraft hybride unique. De plus, nous nous efforçons de maintenir et d'améliorer certains mods et plugins, dans le but d'offrir aux joueurs une expérience de jeu exceptionnelle.",
        "index.cards.title": "Passez votre serveur au niveau %supérieur%",
        "index.cards.mohist.description": "Un puissant logiciel de serveur hybride Mohist Forge implémentant les API Bukkit, Spigot et Paper.",
        "index.cards.banner.description": "Un puissant logiciel de serveur hybride Mohist Fabric implémentant les API Bukkit et Spigot.",
        "index.stats.title": "Statistiques de MohistMC",
        "index.stats.resolvedbugs": "Bugs résolus",
        "index.stats.openedissues": "Nouveaux bugs trouvés",
        "index.stats.players": "Joueurs",
        "index.stats.servers": "Serveurs",
        "index.partner.title": "Des %remerciements spéciaux% pour",
        "button.downloads": "Téléchargements",
        "button.download": "Télécharger",
        "button.discord": "Discord",
        "button.github": "GitHub",
        "button.sponsor": "Faire un don",
        "button.api": "API",
        "button.software": "Logiciel",
        "button.learnmore": "En savoir plus",
        "button.readmore": "Lire plus",
        "button.documentation": "Documentation",
        "button.documentations": "Documentations",
        "button.about": "À propos de nous",
        "button.team": "Notre équipe",
        "button.community": "Notre communauté",
        "button.download.mirror": "Téléchargement alternatif",
        "button.sourcecode": "Code source",
        "button.blog": "Blog",
        "button.close": "Fermer",
        "footer.heading.gettingstarted": "Pour commencer",
        "footer.heading.discover": "Découvrez-nous",
        "footer.heading.community": "Communauté",
        "social.github": "GitHub",
        "social.discord": "Discord",
        "social.forum": "Forum",
        "social.opencollective": "OpenCollective",
        "social.ghsponsors": "GitHub Sponsors",
        "downloads.title": "Téléchargez n'importe lequel de nos logiciels %gratuitement !%",
        "downloads.mohist.desc": "Un logiciel de serveur Minecraft Forge implémentant les API Bukkit, Spigot et Paper. Avec ce logiciel, vous pouvez créer un serveur Minecraft avec des mods et des plugins ensemble !",
        "downloads.banner.desc": "Un logiciel de serveur Minecraft Fabric implémentant les API Bukkit et Spigot. Ce logiciel vous permet de créer un serveur Minecraft avec des mods et des plugins Fabric, tout comme Mohist, mais pour Fabric.",
        "downloads.endtext": "C'est tout %pour le moment%",
        "downloadSoftware.title": "Télécharger% %",
        "downloadSoftware.mohist.desc": "Téléchargez Mohist, notre logiciel de serveur Minecraft Forge implémentant les API Bukkit, Spigot et Paper.",
        "downloadSoftware.banner.desc": "Téléchargez Banner, notre logiciel de serveur Minecraft Fabric implémentant les API Bukkit et Spigot.",
        "downloadSoftware.search.placeholder": "Rechercher un build...",
        "downloadSoftware.search.noresults": "Aucun résultat trouvé.",
        "downloadSoftware.search.nobuilds": "Aucun build trouvé.",
        "downloadSoftware.search.filter.btn": "Filtrer par",
        "downloadSoftware.build.number": "Numéro de build",
        "downloadSoftware.build.name": "Nom du build",
        "downloadSoftware.build.md5": "Hash MD5",
        "downloadSoftware.build.date": "Date du build",
        "downloadSoftware.build.forgever": "Version de Forge",
        "downloadSoftware.build.fabricver": "Version de Fabric",
        "downloadSoftware.seemore": "Voir plus",
        "downloadSoftware.mohist.1.7.10.toast": "Mohist 1.7.10 a été interrompu, son utilisation n'est pas recommandée. Nous NE fournissons PAS de support pour Mohist 1.7.10. Vous pouvez utiliser CrucibleMC comme alternative.",
        "downloadSoftware.mohist.1.18.2.toast": "Mohist 1.18.2 est actuellement en phase de développement, il peut contenir des bugs.",
        "downloadSoftware.mohist.1.19.2.toast": "Mohist 1.19.2 est en développement lent et pourrait être bientôt abandonné. Il peut contenir des bugs. Il est recommandé d'utiliser Mohist 1.19.4 à la place.",
        "downloadSoftware.mohist.1.19.4.toast": "Mohist 1.19.4 est actuellement en phase de développement, il peut contenir des bugs.",
        "downloadSoftware.mohist.1.20.toast": "Mohist 1.20 est abandonné, veuillez utiliser Mohist 1.20.1 pour recevoir les mises à jour.",
        "downloadSoftware.mohist.1.20.1.toast": "Mohist 1.20.1 est actuellement en phase de développement, il peut contenir des bugs.",
        "sponsor.title": "Soutenez le %futur% de l'innovation Minecraft avec MohistMC",
        "sponsor.subtitle": "Aidez à alimenter la croissance de la communauté de MohistMC. Votre soutien couvre les dépenses essentielles, y compris les services, les serveurs et l'infrastructure. Contribuez dès aujourd'hui et faites la différence dans l'avenir de MohistMC.",
        "sponsor.section.title": "Nos %donateurs%",
        "sponsor.section.subtitle": "Ils nous font confiance dans nos projets !",
        "mohistapi.title": "% %%JSON API% de MohistMC",
        "mohistapi.subtitle": "L'API JSON de MohistMC permet aux développeurs d'obtenir des informations sur nos projets et les builds.",
        "team.title": "Rencontrez notre %équipe !%",
        "software.mohist.subtitle": "Mohist est un logiciel serveur exceptionnel pour Minecraft Forge qui implémente les API Bukkit, Spigot et Paper. En exploitant cette puissante combinaison, vous pouvez créer un serveur Minecraft performant avec la capacité d'intégrer des mods et des plugins, garantissant ainsi stabilité et performances optimales.",
        "software.mohist.cards.title": "Qu'est ce qui rend %Mohist% si spécial ?",
        "software.mohist.cards.1.title": "Performance Améliorée",
        "software.mohist.cards.1.desc": "Avec l'intégration de Bukkit & Spigot pour la prise en charge des plugins et de Paper pour les performances, profitez d'une expérience de jeu fluide et sans problème, même avec une multitude de mods et de plugins.",
        "software.mohist.cards.2.title": "Compatibilité",
        "software.mohist.cards.2.desc": "Déverrouillez des possibilités infinies grâce à la compatibilité étendue des mods et des plugins avec Mohist. Personnalisez votre serveur facilement en utilisant l'intégration de Mohist avec les API Bukkit, Spigot et Paper.",
        "software.mohist.cards.3.title": "Support de la communauté et mises à jour régulières",
        "software.mohist.cards.3.desc": "Rejoignez la communauté Mohist pour obtenir du support et des mises à jour régulières ! Restez à jour avec les dernières versions de Minecraft et accédez aux nouvelles fonctionnalités et améliorations.",
        "software.mohist.footer.title": "Prêt à améliorer votre expérience de serveur Minecraft ?",
        "software.mohist.footer.desc": "Expérimentez une stabilité inégalée grâce à l'intégration des mods et des plugins, ainsi qu'à des performances optimisées. Rejoignez la communauté Mohist et déverrouillez des possibilités illimitées pour votre serveur. Passez à Mohist dès aujourd'hui et révolutionnez votre expérience Minecraft.",
        "software.mohist.footer.discord": "Rejoignez notre serveur Discord",
        "404.title": "non trouvé",
        "404.subtitle": "Nous sommes désolés, mais la ressource que vous essayez d'atteindre n'existe pas ou à été déplacée.",
        "docs.title": "Documentations de MohistMC",
        "docs.subtitle": "MohistMC fournit diverses documentations pour nos logiciels. Cliquez simplement sur le logiciel que vous recherchez !",
        "docs.cards.websiteapi.title": "API JSON de MohistMC",
        "docs.cards.websiteapi.desc": "L'API JSON de MohistMC permet aux développeurs d'obtenir des informations sur nos projets et les builds.",
        "software.banner.subtitle": "Banner est un projet qui combine Fabric et Bukkit pour Minecraft. Agissant comme un mod Fabric, il vous permet de créer un serveur Minecraft avec la possibilité d'intégrer des mods et des plugins, assurant ainsi stabilité et expérience de jeu améliorée. En tirant parti des avantages de Fabric et Bukkit, Banner ouvre un monde de possibilités pour la personnalisation du serveur et l'amélioration du gameplay.",
        "software.banner.cards.title": "Qu'est ce qui rend %Banner% si spécial ?",
        "software.banner.cards.1.title": "Facilité d'utilisation",
        "software.banner.cards.1.desc": "Banner est facile à utiliser et à installer. Téléchargez simplement le fichier jar Banner et placez-le dans le dossier mods de votre serveur. Banner créera automatiquement un dossier de plugins dans lequel vous pourrez placer vos plugins. C'est aussi simple que cela !",
        "software.banner.cards.2.title": "Compatibilité",
        "software.banner.cards.2.desc": "Déverrouillez des possibilités infinies grâce à la compatibilité étendue des mods et des plugins avec Banner. Personnalisez votre serveur facilement en utilisant l'intégration de Banner avec les API Bukkit et Spigot.",
        "software.banner.cards.3.title": "Support de la communauté et mises à jour régulières",
        "software.banner.cards.3.desc": "Rejoignez la communauté Banner pour obtenir du support et des mises à jour régulières ! Restez à jour avec les dernières versions de Minecraft et accédez aux nouvelles fonctionnalités et améliorations.",
        "software.banner.footer.desc": "Découvrez une stabilité inégalée avec l'intégration de mods Fabric et de plugins Bukkit/Spigot. Rejoignez la communauté de Banner et débloquez des possibilités illimitées pour votre serveur. Passez à Banner dès aujourd'hui et révolutionnez votre expérience Minecraft.",
        "toast.filtersOn": "Vous avez toujours des filtres activés, si vous ne voyez rien, vous devrez peut-être les supprimer.",
        "loginmodal.title": "Connexion pour signaler un problème",
        "loginmodal.subtitle": "Pour être sûr(e) que vous n'êtes pas un robot et pour pouvoir vous contacter, veuillez vous connecter pour signaler un problème.",
        "loginmodal.githublogin": "Se connecter avec Github",
        "issuemodal.title": "Souhaitez-vous signaler un problème concernant l'un de nos logiciels ?",
        "issuemodal.subtitle": "Nous sommes toujours ravis de vous aider avec tout problème que vous pourriez rencontrer. Il existe deux façons de signaler un problème :",
        "issuemodal.report.github": "Signaler via GitHub",
        "issuemodal.report.website": "Signaler via le site web",
        "issuemodal.dropdown.item.website": "Site web"
    }
}

export default frTranslation;