(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const money = value => new Intl.NumberFormat(currentLang === "de" ? "de-DE" : currentLang === "nl" ? "nl-NL" : "en-GB", { style: "currency", currency: "EUR" }).format(value);

  const copy = {
    de: {
      "nav.home":"Start","nav.menu":"Speisekarte","nav.booking":"Reservieren","nav.restaurant":"Restaurant","nav.legal":"Rechtliches",
      "menu.open":"Menü öffnen","footer.tagline":"Griechische Küche, herzliche Gastfreundschaft und gemeinsame Abende in Ochtrup.","footer.explore":"Entdecken","footer.visit":"Besuchen","footer.hours":"Öffnungszeiten","footer.hours1":"Mi–Sa / 17:30–23:00","footer.hours2":"So / 12:00–14:30","footer.hours3":"So / 17:30–23:00","footer.closed":"Mo & Di Ruhetag","footer.rights":"Alle Rechte vorbehalten","footer.concept":"Unverbindliches Website-Konzept",
      "hero.eyebrow":"Griechische Küche · Ochtrup","hero.line1":"Ein Abend.","hero.line2":"Ein Tisch.","hero.line3":"Griechenland.","hero.text":"Hier werden aus Gerichten Erinnerungen – mit ehrlicher Küche, offenen Türen und der Wärme Griechenlands.",
      "action.reserve":"Tisch reservieren","action.menu":"Speisekarte entdecken","action.scroll":"Entdecken","action.story":"Unsere Geschichte","action.fullmenu":"Ganze Karte entdecken","action.buildtable":"Tisch zusammenstellen","action.event":"Event entdecken","action.continue":"Weiter","action.back":"Zurück","action.request":"Anfrage senden",
      "welcome.eyebrow":"Willkommen bei Freunden","welcome.title":"Das gute Leben beginnt, wenn alle am Tisch sitzen.","welcome.text":"Seit Jahrzehnten bringt Familie Smyridis die Aromen Griechenlands nach Ochtrup. Frisch gegrillt, herzlich serviert und am liebsten gemeinsam genossen.",
      "favorites.eyebrow":"Unsere Favoriten","favorites.title":"Vom Feuer.<br>Für die Mitte.","favorites.text":"Drei Teller, die erzählen, wofür Odysseus steht: kräftige Aromen, gute Zutaten und echtes Teilen.",
      "dish.mixed":"Gemischter Grillteller","dish.pepper":"Gegrillte Peperoni","dish.salad":"Bauernsalat",
      "table.eyebrow":"Ihr Tisch. Ihr Abend.","table.title1":"Zusammen wählen.","table.title2":"Gemeinsam genießen.","table.text":"Stellen Sie vorab Ihren Tisch zusammen: Personen wählen, Gerichte hinzufügen und den Preis pro Gast direkt sehen.",
      "event.eyebrow":"Kalós írthate · Save the date","event.title":"Deutsch-Griechische Nacht","event.text":"Live-Musik, griechische Lebensfreude und ein Sommerabend, der bleibt.",
      "quote.text":"Bei uns bestellt man nicht nur Essen. Man bestellt einen Abend zusammen.","quote.by":"Familie Smyridis","cta.eyebrow":"Ihr Platz ist gedeckt","cta.title":"Heute schon an Griechenland denken.",
      "menu.eyebrow":"Die Speisekarte","menu.title1":"Ehrlich gekocht.","menu.title2":"Großzügig geteilt.","menu.intro":"Klassiker aus Griechenland, Spezialitäten vom Grill und kleine Teller für die ganze Runde.",
      "menu.searchLabel":"Speisekarte durchsuchen","menu.search":"Gericht suchen …","menu.results":"Gerichte","menu.addHint":"Mit + direkt zum gemeinsamen Tisch hinzufügen.","menu.note":"Alle Preise inklusive Mehrwertsteuer. Informationen zu Allergenen erhalten Sie bei unserem Team vor Ort.","menu.empty":"Kein Gericht gefunden","menu.emptyText":"Probieren Sie einen anderen Suchbegriff oder eine andere Kategorie.","menu.all":"Alles",
      "table.your":"Unser Tisch","table.plannerEyebrow":"Der Odysseus Tischplaner","table.plannerTitle":"Was darf in die Mitte?","table.plannerText":"Wählen Sie Ihre Runde und Lieblingsgerichte. Wir rechnen aus, was auf den Tisch kommt – und was es pro Person kostet.","table.guests":"Personen","table.empty":"Ihr Tisch wartet noch auf das erste Gericht.","table.total":"Gesamt","table.perPerson":"Pro Person","table.toBooking":"Diesen Tisch reservieren","table.added":"Zum Tisch hinzugefügt","table.removed":"Vom Tisch entfernt","table.close":"Tisch schließen",
      "booking.eyebrow":"Tisch reservieren","booking.title1":"Ihr Abend","booking.title2":"beginnt hier.","booking.text":"Wählen Sie in drei kurzen Schritten Ihren Lieblingstisch.","booking.today":"Heute","booking.hours":"Mi–Sa 17:30–23:00 · So 12:00–14:30 & 17:30–23:00","booking.open":"Heute geöffnet","booking.closed":"Heute Ruhetag",
      "booking.step1":"Wann","booking.step2":"Wer & wo","booking.step3":"Kontakt","booking.chooseDate":"Datum wählen","booking.chooseGuests":"Gäste wählen","booking.yourDetails":"Ihre Angaben","booking.stepOne":"Schritt 1 von 3","booking.stepTwo":"Schritt 2 von 3","booking.stepThree":"Schritt 3 von 3","booking.whenTitle":"Wann dürfen wir Sie begrüßen?","booking.time":"Uhrzeit","booking.timeHint":"Wählen Sie zuerst ein verfügbares Datum.","booking.companyTitle":"Wie sieht Ihre Runde aus?","booking.people":"Anzahl Personen","booking.area":"Wunschbereich","booking.areaRestaurant":"Restaurant","booking.areaRestaurantText":"Warm & gesellig","booking.areaTerrace":"Terrasse","booking.areaTerraceText":"Wenn das Wetter mitspielt","booking.areaAny":"Überraschen Sie mich","booking.areaAnyText":"Der schönste freie Tisch","booking.contactTitle":"Wie erreichen wir Sie?","booking.help":"Lieber persönlich?","booking.helpText":"Wir nehmen Ihre Reservierung auch gern telefonisch entgegen.","booking.more":"8+",
      "form.name":"Name","form.phone":"Telefon","form.email":"E-Mail","form.occasion":"Anlass (optional)","form.none":"Kein besonderer Anlass","form.birthday":"Geburtstag","form.anniversary":"Jahrestag","form.business":"Geschäftsessen","form.note":"Wünsche (optional)","form.notePlaceholder":"Kinderstuhl, Allergien, besondere Wünsche …","form.privacy":"Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung der Reservierungsanfrage zu.","form.disclaimer":"Dies ist eine unverbindliche Reservierungsanfrage. Ihr Tisch ist erst nach Bestätigung durch das Restaurant fest reserviert.",
      "dialog.eyebrow":"Efcharistó!","dialog.title":"Ihre Anfrage ist vorbereitet.","dialog.text":"In der finalen Website wird diese Anfrage direkt an Odysseus übermittelt. Für diese Konzeptvorschau können Sie das Restaurant telefonisch erreichen.","dialog.call":"Jetzt anrufen",
      "story.eyebrow":"Das Restaurant","story.title1":"Weit gereist.","story.title2":"In Ochtrup zuhause.","story.welcome":"Kalós írthate · Willkommen","story.headline":"Gastfreundschaft ist bei uns keine Geste. Sie ist Familientradition.","story.copy1":"Odysseus steht für die griechische Idee der Filoxenía: Fremde kommen als Gäste und gehen als Freunde. Familie Smyridis bringt diese Haltung seit Jahrzehnten an jeden Tisch.","story.copy2":"In unserer Küche treffen überlieferte Rezepte auf frische Produkte, Fleisch vom Grill, Fisch, Mezé und viel Zeit zum Genießen.","story.quote":"„Ein Tisch wird größer, wenn man ihn teilt.“","story.family":"Familie Smyridis",
      "visit.eyebrow":"Besuchen Sie uns","visit.title":"Ein Stück Griechenland, ganz in Ihrer Nähe.","visit.address":"Adresse","visit.hours":"Öffnungszeiten","visit.hoursValue":"Mi–Sa 17:30–23:00<br>So & Feiertage 12:00–14:30<br>und 17:30–23:00<br>Mo & Di Ruhetag","visit.contact":"Kontakt",
      "legal.eyebrow":"Informationen","legal.title":"Rechtliches & Datenschutz","legal.intro":"Transparent, verständlich und vollständig.","legal.imprint":"Impressum","legal.privacy":"Datenschutz","legal.notes":"Hinweise","legal.provider":"Angaben gemäß § 5 DDG","legal.contact":"Kontakt","legal.taxNote":"Weitere Pflichtangaben, insbesondere eine vorhandene Umsatzsteuer-ID und die zuständige Aufsichtsbehörde, sind vor der Veröffentlichung vom Betreiber zu ergänzen beziehungsweise zu prüfen.","legal.controller":"Verantwortlicher","legal.access":"Server-Zugriffsdaten","legal.accessText":"Beim Aufruf der Website verarbeitet der Hostinganbieter technisch notwendige Daten wie IP-Adresse, Zeitpunkt, aufgerufene Seite und Browserinformationen. Grundlage ist das berechtigte Interesse an einem sicheren und stabilen Betrieb.","legal.bookingData":"Reservierungsanfragen","legal.bookingText":"Angaben aus dem Reservierungsformular werden ausschließlich zur Bearbeitung der Anfrage und zur Kontaktaufnahme verwendet. Die Daten werden gelöscht, sobald sie hierfür nicht mehr benötigt werden und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.","legal.rights":"Ihre Rechte","legal.rightsText":"Sie haben im gesetzlichen Rahmen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch sowie ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.","legal.external":"Externe Inhalte","legal.externalText":"Beim Aufruf externer Karten- oder Veranstaltungsseiten gelten die Datenschutzbestimmungen des jeweiligen Anbieters. Solche Inhalte werden erst nach einem bewussten Klick geöffnet.","legal.concept":"Diese Website ist ein unverbindliches Design- und Funktionskonzept. Das Reservierungsformular versendet in dieser Vorschau keine automatische Buchung. Preis-, Menü- und Öffnungszeitangaben sollten vom Restaurant vor einer Veröffentlichung abschließend bestätigt werden.","legal.allergens":"Allergen- und Zusatzstoffinformationen erhalten Gäste direkt beim Restaurant. Trotz sorgfältiger Pflege können sich Angebote und Preise ändern."
    },
    nl: {
      "nav.home":"Home","nav.menu":"Menukaart","nav.booking":"Reserveren","nav.restaurant":"Restaurant","nav.legal":"Juridisch",
      "menu.open":"Menu openen","footer.tagline":"Griekse keuken, warme gastvrijheid en avonden samen in Ochtrup.","footer.explore":"Ontdekken","footer.visit":"Bezoeken","footer.hours":"Openingstijden","footer.hours1":"Wo–za / 17:30–23:00","footer.hours2":"Zo / 12:00–14:30","footer.hours3":"Zo / 17:30–23:00","footer.closed":"Ma & di gesloten","footer.rights":"Alle rechten voorbehouden","footer.concept":"Vrijblijvend websiteconcept",
      "hero.eyebrow":"Griekse keuken · Ochtrup","hero.line1":"Eén avond.","hero.line2":"Eén tafel.","hero.line3":"Griekenland.","hero.text":"Hier worden gerechten herinneringen – met eerlijke keuken, open deuren en de warmte van Griekenland.",
      "action.reserve":"Reserveer een tafel","action.menu":"Ontdek het menu","action.scroll":"Ontdekken","action.story":"Ons verhaal","action.fullmenu":"Bekijk de hele kaart","action.buildtable":"Stel je tafel samen","action.event":"Ontdek het evenement","action.continue":"Verder","action.back":"Terug","action.request":"Aanvraag versturen",
      "welcome.eyebrow":"Welkom bij vrienden","welcome.title":"Het goede leven begint wanneer iedereen aan tafel zit.","welcome.text":"Al tientallen jaren brengt de familie Smyridis de smaken van Griekenland naar Ochtrup. Vers gegrild, hartelijk geserveerd en het liefst samen genoten.",
      "favorites.eyebrow":"Onze favorieten","favorites.title":"Van het vuur.<br>Voor het midden.","favorites.text":"Drie borden die vertellen waar Odysseus voor staat: krachtige smaken, goede ingrediënten en echt delen.",
      "dish.mixed":"Gemengde grillschotel","dish.pepper":"Gegrilde pepers","dish.salad":"Boerensalade",
      "table.eyebrow":"Jouw tafel. Jouw avond.","table.title1":"Samen kiezen.","table.title2":"Samen genieten.","table.text":"Stel vooraf je tafel samen: kies het aantal personen, voeg gerechten toe en zie direct de prijs per gast.",
      "event.eyebrow":"Kalós írthate · Save the date","event.title":"Duits-Griekse avond","event.text":"Live muziek, Griekse levensvreugde en een zomeravond om te onthouden.",
      "quote.text":"Bij ons bestel je niet alleen eten. Je bestelt een avond samen.","quote.by":"Familie Smyridis","cta.eyebrow":"Uw plaats is gedekt","cta.title":"Denk vandaag al aan Griekenland.",
      "menu.eyebrow":"De menukaart","menu.title1":"Eerlijk gekookt.","menu.title2":"Royaal gedeeld.","menu.intro":"Griekse klassiekers, specialiteiten van de grill en kleine gerechten voor het hele gezelschap.",
      "menu.searchLabel":"Zoek in het menu","menu.search":"Zoek een gerecht …","menu.results":"gerechten","menu.addHint":"Voeg met + direct toe aan de gezamenlijke tafel.","menu.note":"Alle prijzen zijn inclusief btw. Informatie over allergenen is verkrijgbaar bij ons team.","menu.empty":"Geen gerecht gevonden","menu.emptyText":"Probeer een andere zoekterm of categorie.","menu.all":"Alles",
      "table.your":"Onze tafel","table.plannerEyebrow":"De Odysseus tafelplanner","table.plannerTitle":"Wat komt er in het midden?","table.plannerText":"Kies uw gezelschap en favoriete gerechten. Wij laten zien wat er op tafel komt – en wat het per persoon kost.","table.guests":"Personen","table.empty":"Uw tafel wacht nog op het eerste gerecht.","table.total":"Totaal","table.perPerson":"Per persoon","table.toBooking":"Reserveer deze tafel","table.added":"Aan tafel toegevoegd","table.removed":"Van tafel verwijderd","table.close":"Tafel sluiten",
      "booking.eyebrow":"Tafel reserveren","booking.title1":"Uw avond","booking.title2":"begint hier.","booking.text":"Kies in drie korte stappen uw favoriete tafel.","booking.today":"Vandaag","booking.hours":"Wo–za 17:30–23:00 · zo 12:00–14:30 & 17:30–23:00","booking.open":"Vandaag geopend","booking.closed":"Vandaag gesloten",
      "booking.step1":"Wanneer","booking.step2":"Wie & waar","booking.step3":"Contact","booking.chooseDate":"Kies een datum","booking.chooseGuests":"Kies gasten","booking.yourDetails":"Uw gegevens","booking.stepOne":"Stap 1 van 3","booking.stepTwo":"Stap 2 van 3","booking.stepThree":"Stap 3 van 3","booking.whenTitle":"Wanneer mogen we u verwelkomen?","booking.time":"Tijd","booking.timeHint":"Kies eerst een beschikbare datum.","booking.companyTitle":"Hoe ziet uw gezelschap eruit?","booking.people":"Aantal personen","booking.area":"Gewenste plek","booking.areaRestaurant":"Restaurant","booking.areaRestaurantText":"Warm & gezellig","booking.areaTerrace":"Terras","booking.areaTerraceText":"Als het weer meewerkt","booking.areaAny":"Verras mij","booking.areaAnyText":"De mooiste vrije tafel","booking.contactTitle":"Hoe kunnen we u bereiken?","booking.help":"Liever persoonlijk?","booking.helpText":"Wij nemen uw reservering ook graag telefonisch aan.","booking.more":"8+",
      "form.name":"Naam","form.phone":"Telefoon","form.email":"E-mail","form.occasion":"Gelegenheid (optioneel)","form.none":"Geen bijzondere gelegenheid","form.birthday":"Verjaardag","form.anniversary":"Jubileum","form.business":"Zakendiner","form.note":"Wensen (optioneel)","form.notePlaceholder":"Kinderstoel, allergieën, bijzondere wensen …","form.privacy":"Ik ga akkoord met de verwerking van mijn gegevens voor deze reserveringsaanvraag.","form.disclaimer":"Dit is een vrijblijvende reserveringsaanvraag. Uw tafel is pas definitief na bevestiging door het restaurant.",
      "dialog.eyebrow":"Efcharistó!","dialog.title":"Uw aanvraag staat klaar.","dialog.text":"Op de definitieve website wordt deze aanvraag rechtstreeks naar Odysseus verstuurd. In deze conceptversie kunt u het restaurant telefonisch bereiken.","dialog.call":"Nu bellen",
      "story.eyebrow":"Het restaurant","story.title1":"Ver gereisd.","story.title2":"Thuis in Ochtrup.","story.welcome":"Kalós írthate · Welkom","story.headline":"Gastvrijheid is voor ons geen gebaar. Het is familietraditie.","story.copy1":"Odysseus staat voor het Griekse idee van Filoxenía: vreemden komen als gasten en vertrekken als vrienden. De familie Smyridis brengt deze houding al tientallen jaren aan iedere tafel.","story.copy2":"In onze keuken ontmoeten traditionele recepten verse producten, vlees van de grill, vis, mezé en alle tijd om te genieten.","story.quote":"‘Een tafel wordt groter als je hem deelt.’","story.family":"Familie Smyridis",
      "visit.eyebrow":"Bezoek ons","visit.title":"Een stukje Griekenland, heel dichtbij.","visit.address":"Adres","visit.hours":"Openingstijden","visit.hoursValue":"Wo–za 17:30–23:00<br>Zo & feestdagen 12:00–14:30<br>en 17:30–23:00<br>Ma & di gesloten","visit.contact":"Contact",
      "legal.eyebrow":"Informatie","legal.title":"Juridisch & privacy","legal.intro":"Transparant, begrijpelijk en volledig.","legal.imprint":"Colofon","legal.privacy":"Privacy","legal.notes":"Opmerkingen","legal.provider":"Informatie over de aanbieder","legal.contact":"Contact","legal.taxNote":"Aanvullende verplichte gegevens moeten vóór publicatie door de exploitant worden aangevuld en gecontroleerd.","legal.controller":"Verantwoordelijke","legal.access":"Servergegevens","legal.accessText":"Bij het bezoeken van de website verwerkt de hostingprovider technisch noodzakelijke gegevens, zoals het IP-adres, tijdstip, bezochte pagina en browserinformatie, voor een veilige en stabiele werking.","legal.bookingData":"Reserveringsaanvragen","legal.bookingText":"Gegevens uit het reserveringsformulier worden alleen gebruikt voor de behandeling van de aanvraag en contactopname. Ze worden verwijderd zodra ze niet meer nodig zijn en er geen wettelijke bewaarplicht geldt.","legal.rights":"Uw rechten","legal.rightsText":"Binnen de wettelijke kaders heeft u recht op inzage, correctie, verwijdering, beperking, overdraagbaarheid en bezwaar, en kunt u een klacht indienen bij de toezichthouder.","legal.external":"Externe inhoud","legal.externalText":"Bij het openen van externe kaart- of evenementpagina’s geldt het privacybeleid van de betreffende aanbieder. Deze worden alleen na een bewuste klik geopend.","legal.concept":"Deze website is een vrijblijvend ontwerp- en functieconcept. Het reserveringsformulier verstuurt in deze preview geen automatische boeking. Prijzen, menu en openingstijden moeten voor publicatie door het restaurant worden bevestigd.","legal.allergens":"Informatie over allergenen en toevoegingen is rechtstreeks bij het restaurant verkrijgbaar. Aanbod en prijzen kunnen wijzigen."
    },
    en: {
      "nav.home":"Home","nav.menu":"Menu","nav.booking":"Reservations","nav.restaurant":"Restaurant","nav.legal":"Legal",
      "menu.open":"Open menu","footer.tagline":"Greek cuisine, warm hospitality and shared evenings in Ochtrup.","footer.explore":"Explore","footer.visit":"Visit","footer.hours":"Opening hours","footer.hours1":"Wed–Sat / 17:30–23:00","footer.hours2":"Sun / 12:00–14:30","footer.hours3":"Sun / 17:30–23:00","footer.closed":"Closed Mon & Tue","footer.rights":"All rights reserved","footer.concept":"Non-binding website concept",
      "hero.eyebrow":"Greek cuisine · Ochtrup","hero.line1":"One evening.","hero.line2":"One table.","hero.line3":"Greece.","hero.text":"Here, dishes become memories – with honest cooking, open doors and the warmth of Greece.",
      "action.reserve":"Reserve a table","action.menu":"Explore the menu","action.scroll":"Discover","action.story":"Our story","action.fullmenu":"Explore the full menu","action.buildtable":"Build your table","action.event":"Explore the event","action.continue":"Continue","action.back":"Back","action.request":"Send request",
      "welcome.eyebrow":"Welcome among friends","welcome.title":"The good life begins when everyone sits down at the table.","welcome.text":"For decades, the Smyridis family has brought the flavours of Greece to Ochtrup. Fresh from the grill, warmly served and best enjoyed together.",
      "favorites.eyebrow":"Our favourites","favorites.title":"From the fire.<br>For the centre.","favorites.text":"Three plates that tell you what Odysseus stands for: bold flavours, good ingredients and true sharing.",
      "dish.mixed":"Mixed grill platter","dish.pepper":"Grilled peppers","dish.salad":"Greek farmer's salad",
      "table.eyebrow":"Your table. Your evening.","table.title1":"Choose together.","table.title2":"Enjoy together.","table.text":"Plan your table in advance: choose the number of guests, add dishes and see the cost per person right away.",
      "event.eyebrow":"Kalós írthate · Save the date","event.title":"German-Greek Night","event.text":"Live music, Greek joie de vivre and a summer evening to remember.",
      "quote.text":"Here you don't just order food. You order an evening together.","quote.by":"The Smyridis family","cta.eyebrow":"Your place is set","cta.title":"Start dreaming of Greece today.",
      "menu.eyebrow":"The menu","menu.title1":"Honestly cooked.","menu.title2":"Generously shared.","menu.intro":"Greek classics, grill specialities and small plates for the whole table.",
      "menu.searchLabel":"Search the menu","menu.search":"Search for a dish …","menu.results":"dishes","menu.addHint":"Use + to add a dish straight to your shared table.","menu.note":"All prices include VAT. Please ask our team for allergen information.","menu.empty":"No dish found","menu.emptyText":"Try another search term or category.","menu.all":"All",
      "table.your":"Our table","table.plannerEyebrow":"The Odysseus table planner","table.plannerTitle":"What goes in the middle?","table.plannerText":"Choose your group and favourite dishes. We show what comes to the table – and the cost per person.","table.guests":"Guests","table.empty":"Your table is still waiting for its first dish.","table.total":"Total","table.perPerson":"Per person","table.toBooking":"Reserve this table","table.added":"Added to your table","table.removed":"Removed from your table","table.close":"Close table",
      "booking.eyebrow":"Reserve a table","booking.title1":"Your evening","booking.title2":"starts here.","booking.text":"Choose your favourite table in three short steps.","booking.today":"Today","booking.hours":"Wed–Sat 17:30–23:00 · Sun 12:00–14:30 & 17:30–23:00","booking.open":"Open today","booking.closed":"Closed today",
      "booking.step1":"When","booking.step2":"Who & where","booking.step3":"Contact","booking.chooseDate":"Choose a date","booking.chooseGuests":"Choose guests","booking.yourDetails":"Your details","booking.stepOne":"Step 1 of 3","booking.stepTwo":"Step 2 of 3","booking.stepThree":"Step 3 of 3","booking.whenTitle":"When may we welcome you?","booking.time":"Time","booking.timeHint":"Please choose an available date first.","booking.companyTitle":"Tell us about your party.","booking.people":"Number of guests","booking.area":"Preferred area","booking.areaRestaurant":"Restaurant","booking.areaRestaurantText":"Warm & sociable","booking.areaTerrace":"Terrace","booking.areaTerraceText":"Weather permitting","booking.areaAny":"Surprise me","booking.areaAnyText":"The nicest available table","booking.contactTitle":"How can we reach you?","booking.help":"Prefer to speak to us?","booking.helpText":"We are also happy to take your reservation by phone.","booking.more":"8+",
      "form.name":"Name","form.phone":"Phone","form.email":"Email","form.occasion":"Occasion (optional)","form.none":"No special occasion","form.birthday":"Birthday","form.anniversary":"Anniversary","form.business":"Business dinner","form.note":"Requests (optional)","form.notePlaceholder":"High chair, allergies, special requests …","form.privacy":"I agree to the processing of my details for this reservation request.","form.disclaimer":"This is a non-binding reservation request. Your table is only confirmed after approval by the restaurant.",
      "dialog.eyebrow":"Efcharistó!","dialog.title":"Your request is ready.","dialog.text":"On the final website this request will be sent directly to Odysseus. In this concept preview you can contact the restaurant by phone.","dialog.call":"Call now",
      "story.eyebrow":"The restaurant","story.title1":"Travelled far.","story.title2":"At home in Ochtrup.","story.welcome":"Kalós írthate · Welcome","story.headline":"Hospitality is not a gesture here. It is a family tradition.","story.copy1":"Odysseus embodies the Greek idea of Filoxenía: strangers arrive as guests and leave as friends. The Smyridis family has brought this spirit to every table for decades.","story.copy2":"In our kitchen, traditional recipes meet fresh produce, grilled meats, fish, mezé and plenty of time to enjoy.",
      "story.quote":"“A table grows when you share it.”","story.family":"The Smyridis family",
      "visit.eyebrow":"Visit us","visit.title":"A piece of Greece, close to home.","visit.address":"Address","visit.hours":"Opening hours","visit.hoursValue":"Wed–Sat 17:30–23:00<br>Sun & holidays 12:00–14:30<br>and 17:30–23:00<br>Closed Mon & Tue","visit.contact":"Contact",
      "legal.eyebrow":"Information","legal.title":"Legal & privacy","legal.intro":"Transparent, clear and complete.","legal.imprint":"Legal notice","legal.privacy":"Privacy","legal.notes":"Notes","legal.provider":"Provider information","legal.contact":"Contact","legal.taxNote":"Further mandatory details must be added and verified by the proprietor before publication.","legal.controller":"Controller","legal.access":"Server access data","legal.accessText":"When you access the website, the hosting provider processes technically necessary data such as IP address, time, page visited and browser information to ensure secure and stable operation.","legal.bookingData":"Reservation requests","legal.bookingText":"Details entered in the reservation form are used only to process the request and contact you. They are deleted when no longer required and no statutory retention obligation applies.","legal.rights":"Your rights","legal.rightsText":"Within the legal framework, you have rights to access, rectification, erasure, restriction, portability and objection, as well as the right to complain to a data protection authority.","legal.external":"External content","legal.externalText":"External map or event pages are subject to their provider’s privacy policy. They open only after a deliberate click.","legal.concept":"This website is a non-binding design and functionality concept. The reservation form does not send an automatic booking in this preview. Prices, menu and opening times should be confirmed by the restaurant before publication.","legal.allergens":"Allergen and additive information is available directly from the restaurant. Offers and prices may change."
    }
  };

  const iconPaths = {
    home:'<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/>',
    menu:'<path d="M4 5h16M4 12h16M4 19h16"/><path d="M7 5v14"/>',
    calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    restaurant:'<path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M16 3v18M16 3c3 2 4 6 0 10"/>',
    legal:'<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    plate:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M2 4v7M5 4v7M3.5 11v9M21 4v16"/>',
    pin:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    spark:'<path d="m12 2 1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    starters:'<path d="M4 13h16M6 13a6 6 0 0 1 12 0M12 7V4M4 17h16"/>',
    salad:'<path d="M4 10c0 7 3 10 8 10s8-3 8-10Z"/><path d="M7 10c1-4 4-5 5-7 1 2 4 3 5 7"/>',
    grill:'<path d="M5 11h14M7 11c0-5 10-5 10 0M8 15l-2 6M16 15l2 6M6 16h12"/><path d="m9 4 1-2M14 4l1-2"/>',
    fish:'<path d="M4 12c4-5 9-6 14-2l3-3v10l-3-3c-5 4-10 3-14-2Z"/><circle cx="15" cy="11" r=".7"/>',
    pans:'<path d="M4 12h13a6 6 0 0 1-6 7H9a6 6 0 0 1-5-7Z"/><path d="M17 12h5M7 8c-1-2 1-3 0-5M12 8c-1-2 1-3 0-5"/>',
    sides:'<path d="M6 9h12l-1 12H7Z"/><path d="m8 9 1-6M12 9V2M16 9l-1-6"/>',
    dessert:'<path d="M5 10h14l-2 10H7Z"/><path d="M7 10c1-4 9-4 10 0M12 6V3"/>'
  };

  const svg = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.spark}</svg>`;
  const langSaved = localStorage.getItem("odysseus-language");
  let currentLang = ["de","nl","en"].includes(langSaved) ? langSaved : "de";

  const categories = [
    { id:"all", icon:"menu", name:{de:"Alles",nl:"Alles",en:"All"} },
    { id:"meze", icon:"starters", name:{de:"Mezé & Vorspeisen",nl:"Mezé & voorgerechten",en:"Mezé & starters"} },
    { id:"salads", icon:"salad", name:{de:"Salate",nl:"Salades",en:"Salads"} },
    { id:"grill", icon:"grill", name:{de:"Vom Grill",nl:"Van de grill",en:"From the grill"} },
    { id:"fish", icon:"fish", name:{de:"Fisch",nl:"Vis",en:"Fish"} },
    { id:"special", icon:"pans", name:{de:"Spezialitäten",nl:"Specialiteiten",en:"Specialities"} },
    { id:"sides", icon:"sides", name:{de:"Beilagen",nl:"Bijgerechten",en:"Sides"} },
    { id:"dessert", icon:"dessert", name:{de:"Dessert",nl:"Dessert",en:"Dessert"} }
  ];

  const menuItems = [
    {id:1,c:"meze",p:15,n:{de:"Mezé für eine Person",nl:"Mezé voor één persoon",en:"Mezé for one"},d:{de:"Auswahl warmer und kalter griechischer Vorspeisen",nl:"Selectie warme en koude Griekse voorgerechten",en:"A selection of hot and cold Greek starters"}},
    {id:2,c:"meze",p:26,n:{de:"Mezé für zwei Personen",nl:"Mezé voor twee personen",en:"Mezé for two"},d:{de:"Zum Teilen in der Mitte des Tisches",nl:"Om samen in het midden van de tafel te delen",en:"Made for sharing in the centre of the table"}},
    {id:3,c:"meze",p:8.8,n:{de:"Saganaki",nl:"Saganaki",en:"Saganaki"},d:{de:"Panierter und gebackener griechischer Käse",nl:"Gepaneerde en gebakken Griekse kaas",en:"Breaded and fried Greek cheese"}},
    {id:4,c:"meze",p:18,n:{de:"Gegrillter Oktopus",nl:"Gegrilde octopus",en:"Grilled octopus"},d:{de:"Mit Olivenöl, Zitrone und Kräutern",nl:"Met olijfolie, citroen en kruiden",en:"With olive oil, lemon and herbs"}},
    {id:5,c:"meze",p:7.2,n:{de:"Gegrillte Peperoni",nl:"Gegrilde pepers",en:"Grilled peppers"},d:{de:"Mit Knoblauch und Olivenöl",nl:"Met knoflook en olijfolie",en:"With garlic and olive oil"}},
    {id:6,c:"meze",p:7.5,n:{de:"Tzatziki",nl:"Tzatziki",en:"Tzatziki"},d:{de:"Griechischer Joghurt, Gurke und Knoblauch",nl:"Griekse yoghurt, komkommer en knoflook",en:"Greek yoghurt, cucumber and garlic"}},
    {id:7,c:"meze",p:8.4,n:{de:"Dolmadakia",nl:"Dolmadakia",en:"Dolmadakia"},d:{de:"Gefüllte Weinblätter mit Zitronensauce",nl:"Gevulde wijnbladeren met citroensaus",en:"Stuffed vine leaves with lemon sauce"}},
    {id:8,c:"meze",p:9.2,n:{de:"Feta aus dem Ofen",nl:"Feta uit de oven",en:"Oven-baked feta"},d:{de:"Mit Tomaten, Peperoni und Olivenöl",nl:"Met tomaat, pepers en olijfolie",en:"With tomatoes, peppers and olive oil"}},
    {id:9,c:"salads",p:12.8,n:{de:"Griechischer Bauernsalat",nl:"Griekse boerensalade",en:"Greek farmer’s salad"},d:{de:"Tomaten, Gurke, Oliven, Peperoni, Zwiebeln und Feta",nl:"Tomaat, komkommer, olijven, peper, ui en feta",en:"Tomato, cucumber, olives, peppers, onion and feta"}},
    {id:10,c:"salads",p:13.8,n:{de:"Salat mit Hähnchen",nl:"Salade met kip",en:"Chicken salad"},d:{de:"Bunter Salat mit gegrilltem Hähnchenbrustfilet",nl:"Gemengde salade met gegrilde kipfilet",en:"Mixed salad with grilled chicken breast"}},
    {id:11,c:"salads",p:8.2,n:{de:"Choriatiki klein",nl:"Kleine choriatiki",en:"Small choriatiki"},d:{de:"Der griechische Klassiker als kleine Portion",nl:"De Griekse klassieker als kleine portie",en:"The Greek classic in a smaller portion"}},
    {id:12,c:"grill",p:17.5,n:{de:"Gyros",nl:"Gyros",en:"Gyros"},d:{de:"Mit Tzatziki, Salat und einer Beilage",nl:"Met tzatziki, salade en een bijgerecht",en:"With tzatziki, salad and one side"}},
    {id:13,c:"grill",p:16.5,n:{de:"Souvlaki",nl:"Souvlaki",en:"Souvlaki"},d:{de:"Zwei saftige Schweinefleischspieße vom Grill",nl:"Twee sappige varkensspiesen van de grill",en:"Two juicy pork skewers from the grill"}},
    {id:14,c:"grill",p:17.8,n:{de:"Bifteki",nl:"Bifteki",en:"Bifteki"},d:{de:"Hacksteak gefüllt mit Feta",nl:"Gehaktsteak gevuld met feta",en:"Minced steak filled with feta"}},
    {id:15,c:"grill",p:19.2,n:{de:"Gemischter Grillteller",nl:"Gemengde grillschotel",en:"Mixed grill platter"},d:{de:"Gyros, Souvlaki und Souzouki",nl:"Gyros, souvlaki en souzouki",en:"Gyros, souvlaki and souzouki"}},
    {id:16,c:"grill",p:20.8,n:{de:"Lammkoteletts",nl:"Lamskoteletten",en:"Lamb chops"},d:{de:"Kräftig gegrillt mit Kräutern",nl:"Krachtig gegrild met kruiden",en:"Chargrilled with herbs"}},
    {id:17,c:"grill",p:18.5,n:{de:"Hähnchenbrustfilet",nl:"Kipfilet",en:"Chicken breast"},d:{de:"Zart gegrillt mit Kräuterbutter",nl:"Mals gegrild met kruidenboter",en:"Tender grilled chicken with herb butter"}},
    {id:18,c:"grill",p:19.2,n:{de:"Tomahawk aus Drama",nl:"Tomahawk uit Drama",en:"Tomahawk from Drama"},d:{de:"Griechisches Schweinekotelett nach Art des Hauses",nl:"Griekse varkenskotelet op huiswijze",en:"Greek pork chop, house style"}},
    {id:19,c:"grill",p:26,n:{de:"Odysseus Spezialteller",nl:"Odysseus speciaal schotel",en:"Odysseus special platter"},d:{de:"Eine großzügige Auswahl unserer Grillspezialitäten",nl:"Een royale selectie van onze grillspecialiteiten",en:"A generous selection of our grill specialities"}},
    {id:20,c:"special",p:49,n:{de:"Odysseus-Platte für zwei",nl:"Odysseus-schotel voor twee",en:"Odysseus platter for two"},d:{de:"Große Grillplatte mit Beilagen und Salat",nl:"Grote grillschotel met bijgerechten en salade",en:"Large grill platter with sides and salad"}},
    {id:21,c:"special",p:18.8,n:{de:"Moussaka",nl:"Moussaka",en:"Moussaka"},d:{de:"Aubergine, Kartoffeln, Hackfleisch und Béchamel",nl:"Aubergine, aardappel, gehakt en béchamel",en:"Aubergine, potato, minced meat and béchamel"}},
    {id:22,c:"special",p:19.5,n:{de:"Lamm aus dem Ofen",nl:"Lam uit de oven",en:"Oven-baked lamb"},d:{de:"Langsam geschmort nach griechischer Art",nl:"Langzaam gegaard op Griekse wijze",en:"Slow-cooked in the Greek style"}},
    {id:23,c:"special",p:18.4,n:{de:"Gyros Metaxa",nl:"Gyros Metaxa",en:"Gyros Metaxa"},d:{de:"Überbacken in cremiger Metaxasauce",nl:"Gegratineerd in romige Metaxasaus",en:"Baked in creamy Metaxa sauce"}},
    {id:24,c:"special",p:17.8,n:{de:"Souzouki in Tomatensauce",nl:"Souzouki in tomatensaus",en:"Souzouki in tomato sauce"},d:{de:"Würzige Hackröllchen mit Feta",nl:"Kruidige gehaktrolletjes met feta",en:"Spiced minced meat rolls with feta"}},
    {id:25,c:"fish",p:25.2,n:{de:"Garides",nl:"Garides",en:"Garides"},d:{de:"Große Garnelen vom Grill mit Knoblauch",nl:"Grote gegrilde garnalen met knoflook",en:"Large grilled prawns with garlic"}},
    {id:26,c:"fish",p:20.2,n:{de:"Kalamari ganz",nl:"Hele kalamari",en:"Whole calamari"},d:{de:"Im Ganzen gegrillt, mit Olivenöl und Zitrone",nl:"Heel gegrild met olijfolie en citroen",en:"Grilled whole with olive oil and lemon"}},
    {id:27,c:"fish",p:18.8,n:{de:"Kalamari-Ringe",nl:"Calamariringen",en:"Calamari rings"},d:{de:"Knusprig gebacken mit Tzatziki",nl:"Krokant gebakken met tzatziki",en:"Crisp fried with tzatziki"}},
    {id:28,c:"fish",p:23.5,n:{de:"Dorade Royal",nl:"Dorade royal",en:"Sea bream"},d:{de:"Vom Grill mit Kräutern und Zitrone",nl:"Van de grill met kruiden en citroen",en:"Grilled with herbs and lemon"}},
    {id:29,c:"fish",p:22.5,n:{de:"Lachsfilet",nl:"Zalmfilet",en:"Salmon fillet"},d:{de:"Gegrillt mit Gemüse und Zitronensauce",nl:"Gegrild met groenten en citroensaus",en:"Grilled with vegetables and lemon sauce"}},
    {id:30,c:"sides",p:4.5,n:{de:"Knoblauchkartoffeln",nl:"Knoflookaardappelen",en:"Garlic potatoes"},d:{de:"Goldbraun und knusprig",nl:"Goudbruin en krokant",en:"Golden and crisp"}},
    {id:31,c:"sides",p:4.2,n:{de:"Djuvec-Reis",nl:"Djuvec-rijst",en:"Djuvec rice"},d:{de:"Würziger Tomatenreis",nl:"Kruidige tomatenrijst",en:"Seasoned tomato rice"}},
    {id:32,c:"sides",p:5.2,n:{de:"Grillgemüse",nl:"Gegrilde groenten",en:"Grilled vegetables"},d:{de:"Mediterranes Gemüse mit Olivenöl",nl:"Mediterrane groenten met olijfolie",en:"Mediterranean vegetables with olive oil"}},
    {id:33,c:"sides",p:4,n:{de:"Pommes frites",nl:"Friet",en:"French fries"},d:{de:"Knusprig und goldbraun",nl:"Krokant en goudbruin",en:"Crisp and golden"}},
    {id:34,c:"dessert",p:6.5,n:{de:"Griechischer Joghurt",nl:"Griekse yoghurt",en:"Greek yoghurt"},d:{de:"Mit Honig und Walnüssen",nl:"Met honing en walnoten",en:"With honey and walnuts"}},
    {id:35,c:"dessert",p:7.2,n:{de:"Baklava",nl:"Baklava",en:"Baklava"},d:{de:"Filoteig, Nüsse, Honig und Zimt",nl:"Filodeeg, noten, honing en kaneel",en:"Filo pastry, nuts, honey and cinnamon"}},
    {id:36,c:"dessert",p:7.8,n:{de:"Galaktoboureko",nl:"Galaktoboureko",en:"Galaktoboureko"},d:{de:"Griechischer Grießkuchen im Filoteig",nl:"Griekse griesmeelcake in filodeeg",en:"Greek semolina custard in filo"}},
    {id:37,c:"dessert",p:6.8,n:{de:"Vanilleeis mit heißer Schokolade",nl:"Vanille-ijs met warme chocolade",en:"Vanilla ice cream with hot chocolate"},d:{de:"Ein warmer, süßer Abschluss",nl:"Een warm, zoet einde",en:"A warm, sweet finish"}}
  ];

  const safeGetTable = () => {
    try {
      const data = JSON.parse(localStorage.getItem("odysseus-table") || "{}");
      return { guests: Math.min(12, Math.max(1, Number(data.guests) || 2)), items: Array.isArray(data.items) ? data.items.filter(id => menuItems.some(item => item.id === id)) : [] };
    } catch { return { guests:2, items:[] }; }
  };
  let table = safeGetTable();
  let activeCategory = "all";
  let searchTerm = "";
  let currentBookingStep = 1;
  const booking = { date:null, time:null, guests:null, area:null };

  function t(key) { return copy[currentLang]?.[key] ?? copy.de[key] ?? key; }

  function mountChrome() {
    const page = document.body.dataset.page;
    const header = $("[data-site-header]");
    const footer = $("[data-site-footer]");
    const nav = [
      ["home","/","home"],["menu","/speisekarte","menu"],["booking","/reservieren","calendar"],["restaurant","/restaurant","restaurant"],["legal","/rechtliches","legal"]
    ];
    const brand = `<a class="brand" href="/" aria-label="Restaurant Odysseus – Startseite"><span class="brand-layer"></span><span class="brand-layer brand-fill"></span><span class="brand-glint"></span></a>`;
    const langs = `<div class="language-switch" aria-label="Sprache wählen">${["de","nl","en"].map(lang => `<button type="button" data-lang="${lang}" class="${lang===currentLang?"active":""}" aria-pressed="${lang===currentLang}">${lang.toUpperCase()}</button>`).join("")}</div>`;
    header.innerHTML = `
      <header class="site-header">
        ${brand}
        <div class="header-actions">
          <nav class="desktop-nav" aria-label="Hauptnavigation">${nav.slice(0,4).map(([key,url]) => `<a href="${url}" class="${page===key?"active":""}" data-i18n="nav.${key}">${t(`nav.${key}`)}</a>`).join("")}</nav>
          ${langs}
          <button class="menu-toggle" type="button" aria-label="${t("menu.open")}" aria-expanded="false" data-menu-toggle><span></span><span></span></button>
        </div>
      </header>
      <div class="menu-overlay" aria-hidden="true" data-menu-overlay>
        <button class="menu-overlay-scrim" type="button" tabindex="-1" data-menu-close aria-label="Schließen"></button>
        <div class="menu-panel">
          <nav class="overlay-nav" aria-label="Menü">${nav.map(([key,url,icon],i) => `<a href="${url}" class="${page===key?"active":""}"><small>0${i+1}</small><span class="nav-icon">${svg(icon)}</span><b data-i18n="nav.${key}">${t(`nav.${key}`)}</b><span>↗</span></a>`).join("")}</nav>
          <div class="overlay-footer"><a href="tel:+4925531204">02553 1204</a><a href="https://maps.google.com/?q=Restaurant+Odysseus+Kniepenkamp+1+48607+Ochtrup" target="_blank" rel="noopener">Kniepenkamp 1 · Ochtrup ↗</a></div>
        </div>
      </div>`;
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="footer-main">
          <div class="footer-brand">${brand}<p data-i18n="footer.tagline">${t("footer.tagline")}</p></div>
          <div><h3 data-i18n="footer.explore">${t("footer.explore")}</h3><ul>${nav.map(([key,url])=>`<li><a href="${url}" data-i18n="nav.${key}">${t(`nav.${key}`)}</a></li>`).join("")}</ul></div>
          <div><h3 data-i18n="footer.visit">${t("footer.visit")}</h3><ul><li>Kniepenkamp 1</li><li>48607 Ochtrup</li><li><a href="tel:+4925531204">02553 1204</a></li><li><a href="mailto:info@odysseus-ochtrup.de">info@odysseus-ochtrup.de</a></li></ul></div>
          <div><h3 data-i18n="footer.hours">${t("footer.hours")}</h3><ul><li data-i18n="footer.hours1">${t("footer.hours1")}</li><li data-i18n="footer.hours2">${t("footer.hours2")}</li><li data-i18n="footer.hours3">${t("footer.hours3")}</li><li data-i18n="footer.closed">${t("footer.closed")}</li></ul></div>
        </div>
        <div class="footer-bottom"><span>© ${new Date().getFullYear()} Restaurant Odysseus · <span data-i18n="footer.rights">${t("footer.rights")}</span></span><span data-i18n="footer.concept">${t("footer.concept")}</span></div>
      </footer>`;

    $("[data-menu-toggle]").addEventListener("click", toggleMenu);
    $$("[data-menu-close]").forEach(el => el.addEventListener("click", closeMenu));
    $$("[data-lang]").forEach(el => el.addEventListener("click", () => setLanguage(el.dataset.lang)));
    window.addEventListener("scroll", () => $(".site-header")?.classList.toggle("scrolled", scrollY > 35), {passive:true});
  }

  function toggleMenu() {
    const isOpen = document.body.classList.toggle("menu-open");
    $("[data-menu-toggle]").setAttribute("aria-expanded", String(isOpen));
    $("[data-menu-overlay]").setAttribute("aria-hidden", String(!isOpen));
  }
  function closeMenu() {
    document.body.classList.remove("menu-open");
    $("[data-menu-toggle]")?.setAttribute("aria-expanded","false");
    $("[data-menu-overlay]")?.setAttribute("aria-hidden","true");
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("odysseus-language", lang);
    document.documentElement.lang = lang;
    $$("[data-lang]").forEach(el => { el.classList.toggle("active",el.dataset.lang===lang); el.setAttribute("aria-pressed",String(el.dataset.lang===lang)); });
    applyTranslations();
    $("[data-menu-toggle]")?.setAttribute("aria-label", t("menu.open"));
    updateOpenStatus();
    if ($("[data-menu-grid]")) { renderCategories(); renderMenu(); renderTablePanel(); }
    if ($("[data-calendar]")) { renderBookingGuests(); renderCalendar(); updateBookingUI(); }
  }

  function applyTranslations() {
    $$("[data-i18n]").forEach(el => {
      const value = t(el.dataset.i18n);
      if (value.includes("<br>")) el.innerHTML = value;
      else el.textContent = value;
    });
    $$("[data-i18n-placeholder]").forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
    document.documentElement.lang = currentLang;
  }

  function setupIcons() { $$("[data-icon]").forEach(el => el.innerHTML = svg(el.dataset.icon)); }

  function setupReveal() {
    const elements = $$(".reveal");
    if (!("IntersectionObserver" in window)) return elements.forEach(el => el.classList.add("visible"));
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), {threshold:.12});
    elements.forEach(el => observer.observe(el));
  }

  function showToast(message) {
    let toast = $(".site-toast");
    if (!toast) { toast = document.createElement("div"); toast.className = "site-toast"; toast.innerHTML = "<b>✓</b><span></span>"; document.body.append(toast); }
    $("span",toast).textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 2300);
  }

  function renderCategories() {
    const root = $("[data-menu-categories]");
    if (!root) return;
    root.innerHTML = categories.map(cat => `<button type="button" data-category="${cat.id}" class="${activeCategory===cat.id?"active":""}">${svg(cat.icon)}<span>${cat.name[currentLang]}</span></button>`).join("");
    $$("[data-category]",root).forEach(button => button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderCategories();
      renderMenu();
    }));
  }

  function renderMenu() {
    const root = $("[data-menu-grid]");
    if (!root) return;
    const query = searchTerm.trim().toLocaleLowerCase(currentLang);
    const filtered = menuItems.filter(item => {
      const inCategory = activeCategory === "all" || item.c === activeCategory;
      const haystack = `${item.n[currentLang]} ${item.d[currentLang]}`.toLocaleLowerCase(currentLang);
      return inCategory && (!query || haystack.includes(query));
    });
    $("[data-menu-results]").textContent = filtered.length;
    if (!filtered.length) {
      root.innerHTML = `<div class="menu-empty">${svg("search")}<h3>${t("menu.empty")}</h3><p>${t("menu.emptyText")}</p></div>`;
      return;
    }
    root.innerHTML = filtered.map(item => {
      const cat = categories.find(category => category.id === item.c);
      return `<article class="menu-item">
        <div><span class="menu-item-tag">${cat.name[currentLang]}</span><h3>${item.n[currentLang]}</h3><p>${item.d[currentLang]}</p></div>
        <strong class="menu-price">${money(item.p)}</strong>
        <button class="menu-add ${table.items.includes(item.id)?"added":""}" type="button" data-add-item="${item.id}" aria-label="${item.n[currentLang]} hinzufügen">${table.items.includes(item.id)?"✓":"+"}</button>
      </article>`;
    }).join("");
    $$("[data-add-item]",root).forEach(button => button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      addItem(Number(button.dataset.addItem));
    }));
  }

  function saveTable() {
    localStorage.setItem("odysseus-table", JSON.stringify(table));
    $$("[data-table-count]").forEach(el => el.textContent = table.items.length);
    const total = table.items.reduce((sum,id) => sum + (menuItems.find(item=>item.id===id)?.p || 0),0);
    $$("[data-table-total]").forEach(el => el.textContent = money(total));
  }

  function addItem(id) {
    table.items.push(id);
    saveTable();
    renderMenu();
    renderTablePanel();
    showToast(t("table.added"));
  }
  function removeItemAt(index) {
    table.items.splice(index,1);
    saveTable();
    renderMenu();
    renderTablePanel();
    showToast(t("table.removed"));
  }
  function setTableGuests(delta) {
    table.guests = Math.min(12, Math.max(1, table.guests + delta));
    saveTable();
    $$("[data-guests]").forEach(el => el.textContent = table.guests);
    renderTablePanel();
  }
  function openTable() {
    document.body.classList.add("table-open");
    $("[data-table-drawer]")?.setAttribute("aria-hidden","false");
  }
  function closeTable() {
    document.body.classList.remove("table-open");
    $("[data-table-drawer]")?.setAttribute("aria-hidden","true");
  }
  function renderTablePanel() {
    const root = $("[data-table-panel]");
    if (!root) return;
    const chosen = table.items.map(id => menuItems.find(item => item.id === id)).filter(Boolean);
    const total = chosen.reduce((sum,item)=>sum+item.p,0);
    root.innerHTML = `
      <div class="table-panel-head"><h2>${t("table.your")}</h2><button type="button" data-table-close aria-label="${t("table.close")}">×</button></div>
      <div class="table-panel-body">
        <div class="table-persons"><span>${t("table.guests")}</span><div class="mini-stepper"><button type="button" data-panel-minus>−</button><strong>${table.guests}</strong><button type="button" data-panel-plus>+</button></div></div>
        ${chosen.length ? `<ul class="table-items">${chosen.map((item,index)=>`<li class="table-item"><div><h3>${item.n[currentLang]}</h3><small>${categories.find(c=>c.id===item.c).name[currentLang]}</small></div><strong>${money(item.p)}</strong><button class="table-remove" type="button" data-remove-index="${index}" aria-label="${item.n[currentLang]} entfernen">×</button></li>`).join("")}</ul>` : `<div class="table-empty">${svg("plate")}<p>${t("table.empty")}</p></div>`}
        <div class="table-totals"><div><span>${t("table.total")}</span><strong>${money(total)}</strong></div><div class="per-person"><span>${t("table.perPerson")}</span><strong>${money(total/table.guests)}</strong></div></div>
      </div>
      <div class="table-panel-action"><a class="button button-sun" href="/reservieren"><span>${t("table.toBooking")}</span><span>→</span></a></div>`;
    $("[data-table-close]",root).addEventListener("click",closeTable);
    $("[data-panel-minus]",root).addEventListener("click",()=>setTableGuests(-1));
    $("[data-panel-plus]",root).addEventListener("click",()=>setTableGuests(1));
    $$("[data-remove-index]",root).forEach(button=>button.addEventListener("click",()=>removeItemAt(Number(button.dataset.removeIndex))));
  }

  function setupMenuPage() {
    if (!$("[data-menu-grid]")) return;
    renderCategories();
    renderMenu();
    renderTablePanel();
    saveTable();
    const search = $("#menu-search");
    search.addEventListener("input", () => { searchTerm = search.value; renderMenu(); });
    $$("[data-open-table]").forEach(button=>button.addEventListener("click",openTable));
    $("[data-table-scrim]").addEventListener("click",closeTable);
    $$("[data-guests-minus]").forEach(button=>button.addEventListener("click",()=>setTableGuests(-1)));
    $$("[data-guests-plus]").forEach(button=>button.addEventListener("click",()=>setTableGuests(1)));
    $$("[data-guests]").forEach(el=>el.textContent=table.guests);
  }

  const todayAtMidnight = () => { const date = new Date(); date.setHours(0,0,0,0); return date; };
  let shownMonth = new Date(todayAtMidnight().getFullYear(), todayAtMidnight().getMonth(), 1);

  function renderCalendar() {
    const root = $("[data-calendar]");
    if (!root) return;
    const locale = currentLang === "de" ? "de-DE" : currentLang === "nl" ? "nl-NL" : "en-GB";
    const weekLabels = currentLang === "de" ? ["Mo","Di","Mi","Do","Fr","Sa","So"] : currentLang === "nl" ? ["Ma","Di","Wo","Do","Vr","Za","Zo"] : ["Mo","Tu","We","Th","Fr","Sa","Su"];
    $$(".calendar-week span").forEach((element,index) => element.textContent = weekLabels[index]);
    $("[data-calendar-title]").textContent = new Intl.DateTimeFormat(locale,{month:"long",year:"numeric"}).format(shownMonth);
    const first = new Date(shownMonth.getFullYear(),shownMonth.getMonth(),1);
    const last = new Date(shownMonth.getFullYear(),shownMonth.getMonth()+1,0);
    const leading = (first.getDay()+6)%7;
    const cells = Array.from({length:leading},()=>'<button class="calendar-day empty" type="button" disabled></button>');
    for (let day=1; day<=last.getDate(); day++) {
      const date = new Date(shownMonth.getFullYear(),shownMonth.getMonth(),day);
      const weekday = date.getDay();
      const past = date < todayAtMidnight();
      const closed = weekday === 1 || weekday === 2;
      const selected = booking.date && date.toDateString() === booking.date.toDateString();
      const isToday = date.toDateString() === todayAtMidnight().toDateString();
      cells.push(`<button class="calendar-day ${selected?"selected":""} ${isToday?"today":""}" type="button" data-date="${date.toISOString()}" ${past||closed?"disabled":""}>${day}</button>`);
    }
    root.innerHTML = cells.join("");
    $$("[data-date]",root).forEach(button => button.addEventListener("click",()=>{
      booking.date = new Date(button.dataset.date);
      booking.time = null;
      renderCalendar();
      renderTimes();
      updateBookingUI();
    }));
  }

  function renderTimes() {
    const root = $("[data-times]");
    if (!root) return;
    if (!booking.date) { root.innerHTML = ""; return; }
    const isSunday = booking.date.getDay() === 0;
    const slots = isSunday ? ["12:00","12:30","13:00","13:30","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00"] : ["17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30"];
    root.innerHTML = slots.map(time=>`<button type="button" class="${booking.time===time?"selected":""}" data-time="${time}">${time}</button>`).join("");
    $$("[data-time]",root).forEach(button=>button.addEventListener("click",()=>{ booking.time=button.dataset.time; renderTimes(); updateBookingUI(); }));
  }

  function renderBookingGuests() {
    const root = $("[data-booking-guests]");
    if (!root) return;
    root.innerHTML = [1,2,3,4,5,6,7,8].map(value=>`<button type="button" class="${booking.guests===value?"selected":""}" data-booking-guest="${value}">${value===8?t("booking.more"):value}</button>`).join("");
    $$("[data-booking-guest]",root).forEach(button=>button.addEventListener("click",()=>{booking.guests=Number(button.dataset.bookingGuest);renderBookingGuests();updateBookingUI();}));
  }

  function showBookingStep(step) {
    if (step === 2 && (!booking.date || !booking.time)) { showToast(t("booking.chooseDate")); return; }
    if (step === 3 && (!booking.guests || !booking.area)) { showToast(t("booking.chooseGuests")); return; }
    currentBookingStep = Math.min(3,Math.max(1,step));
    $$("[data-booking-step]").forEach(el=>el.classList.toggle("active",Number(el.dataset.bookingStep)===currentBookingStep));
    $$("[data-booking-nav]").forEach(el=>el.classList.toggle("active",Number(el.dataset.bookingNav)===currentBookingStep));
    $(".booking-shell")?.scrollIntoView({behavior:"smooth",block:"start"});
  }

  function updateBookingUI() {
    const locale = currentLang === "de" ? "de-DE" : currentLang === "nl" ? "nl-NL" : "en-GB";
    const summary1 = $("[data-booking-summary='1']");
    const summary2 = $("[data-booking-summary='2']");
    if (summary1) summary1.textContent = booking.date && booking.time ? `${new Intl.DateTimeFormat(locale,{day:"2-digit",month:"short"}).format(booking.date)} · ${booking.time}` : t("booking.chooseDate");
    if (summary2) summary2.textContent = booking.guests && booking.area ? `${booking.guests} · ${t(`booking.area${booking.area.charAt(0).toUpperCase()+booking.area.slice(1)}`)}` : t("booking.chooseGuests");
  }

  function setupBooking() {
    if (!$("[data-booking-form]")) return;
    updateOpenStatus();
    renderCalendar();
    renderTimes();
    renderBookingGuests();
    $$("[data-month-prev]").forEach(button=>button.addEventListener("click",()=>{
      const min = new Date(todayAtMidnight().getFullYear(),todayAtMidnight().getMonth(),1);
      const prev = new Date(shownMonth.getFullYear(),shownMonth.getMonth()-1,1);
      if (prev>=min) shownMonth=prev;
      renderCalendar();
    }));
    $$("[data-month-next]").forEach(button=>button.addEventListener("click",()=>{shownMonth=new Date(shownMonth.getFullYear(),shownMonth.getMonth()+1,1);renderCalendar();}));
    $$("[data-booking-next]").forEach(button=>button.addEventListener("click",()=>showBookingStep(currentBookingStep+1)));
    $$("[data-booking-back]").forEach(button=>button.addEventListener("click",()=>showBookingStep(currentBookingStep-1)));
    $$("[data-booking-nav]").forEach(button=>button.addEventListener("click",()=>showBookingStep(Number(button.dataset.bookingNav))));
    $$("[data-area]").forEach(button=>button.addEventListener("click",()=>{booking.area=button.dataset.area;$$("[data-area]").forEach(el=>el.classList.toggle("selected",el===button));updateBookingUI();}));
    $("[data-booking-form]").addEventListener("submit",event=>{
      event.preventDefault();
      if (!event.currentTarget.checkValidity()) { event.currentTarget.reportValidity(); return; }
      const dialog = $("[data-booking-dialog]");
      const locale = currentLang === "de" ? "de-DE" : currentLang === "nl" ? "nl-NL" : "en-GB";
      $("[data-dialog-summary]").className="dialog-summary";
      $("[data-dialog-summary]").innerHTML=`<strong>${new Intl.DateTimeFormat(locale,{weekday:"long",day:"2-digit",month:"long"}).format(booking.date)} · ${booking.time}</strong><span>${booking.guests} ${t("table.guests")} · ${t(`booking.area${booking.area.charAt(0).toUpperCase()+booking.area.slice(1)}`)}</span>`;
      if (typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open","");
      document.body.classList.add("dialog-open");
    });
    $("[data-dialog-close]").addEventListener("click",()=>{ $("[data-booking-dialog]").close(); document.body.classList.remove("dialog-open"); });
  }

  function updateOpenStatus() {
    const status = $("[data-open-status]");
    if (!status) return;
    const weekday = new Date().getDay();
    status.textContent = weekday===1||weekday===2 ? t("booking.closed") : t("booking.open");
  }

  function globalKeyboard() {
    document.addEventListener("keydown", event => {
      if (event.key !== "Escape") return;
      closeMenu();
      closeTable();
      const dialog = $("[data-booking-dialog]");
      if (dialog?.open) { dialog.close(); document.body.classList.remove("dialog-open"); }
    });
  }

  mountChrome();
  applyTranslations();
  setupIcons();
  setupReveal();
  setupMenuPage();
  setupBooking();
  globalKeyboard();
})();
