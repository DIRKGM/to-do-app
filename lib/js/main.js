var app = new Vue({
    el: "#aufgabenApp",
       data: {
          aufgaben: [
          {beschreibung: "Aufstehen", fertig: true},
          {beschreibung: "Sport", fertig: false},
          {beschreibung: "Meditation", fertig: false},
          {beschreibung: "Mails", fertig: false},
          {beschreibung: "Daten sichern", fertig: false},
          {beschreibung: "Ordnung machen", fertig: false},
          ],
          neueAufgabe: ''
       },
       computed: {
          erledigt() {
          return this.aufgaben.filter(aufgabe => aufgabe.fertig);
          },
          nichterledigt() {
          return this.aufgaben.filter(aufgabe => !aufgabe.fertig);
          },
       },
       methods: {
       aufgabeHinzu() {
       this.aufgaben.push({beschreibung: this.neueAufgabe, fertig: false});
       this.neueAufgabe = '';
       },
       erledigtWechseln(index) {
          this.aufgaben[index].fertig = !this.aufgaben[index].fertig;
       },
       loeschen(index) {
       this.aufgaben.splice(index, 1);
       },         
    },
 });