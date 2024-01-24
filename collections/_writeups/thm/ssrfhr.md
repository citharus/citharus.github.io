---
layout: writeup
title: TryHackMe SSRF
description: "Ein Writeup des TryHackMe Raums SSRF"
date: 2024-01-18
link: "https://tryhackme.com/room/ssrfhr"
tags: [ssrf, thm, owasp, web]
---

Der Raum SSRF behandelt “Server Side Request Forgery”, eine Sicherheitslücke in Webanwendungen, die es ermöglicht unerlaubte Anfragen über den Webserver an andere zu senden. Diese Sicherheitslücke führt oft zu Datenlecks, Denial of Service oder Remote Code Execution.

### Anatomy of SSRF Attack

Die Antwort befindet sich in der vierten Spalte des OWASP Ranking für SSRF.

### SSRF Against a Local Server

Um den Nutzernamen, das Password und die Admin URL zu finden, muss per URL Parameter zu `localhost/config` gesetzt werden: `http://hrms.thm/?url=localhost/config`

Dadurch werden die Antworten im Footer der Webseite angezeigt.

![](/assets/images/ssrfhr-01.png)

Um die Flagge zu erhalten muss man sich anschließend mit diesen Daten anmelden.

### Accessing an Internal Server

Die Antwort auf die erste Frage ist “yea”.

Um die Flagge des Admin Panels zu erhalten, muss im Category Dropdown die URL im `value` Attribut so geändert werden, dass sie zu `admin.php` verlinkt.

![](/assets/images/ssrfhr-02.png)

Anschließend muss im Dropdown die veränderte Option ausgewählt werden

![](/assets/images/ssrfhr-03.png)

Danach wird die Seite aktualisiert und man erhält die Admin Flagge.

### Blind SSRF With Out-Of-Band

Die Antwort zur ersten Frage ist “nay”.

Um die zweite und dritte Frage zu beantworten, muss in die URL die Adresse des Python Servers angegeben werden. `http://hrms.thm/profile.php?url=http://10.9.34.58:8080`

Nach einer kurzen Wartezeit, erscheint die Datei `data.html` im gleichen Ordner wie der Server. Die Datei kann anschließend im Browser geöffnet werden, um die Antworten zu finden.

![](/assets/images/ssrfhr-04.png)

![](/assets/images/ssrfhr-05.png)

### Crashing the Server

Nachdem man die URL so veränder, dass ein Bild mit mehr als 100KB aufgerufen wird, wird die Flagge angezeigt: `http://hrms.thm/url.php?id=192.168.2.10/bigImage.jpg`

### Remedial Measures

Die Antwort für die erste Frage ist `b` und für die letzte Frage `nay`.