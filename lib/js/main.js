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
    methods: {
        aufgabeHinzu() {
        this.aufgaben.push({beschreibung: this.neueAufgabe, fertig:
        false});
        this.neueAufgabe = '';
        },
        loeschen(index) {
        this.aufgaben.splice(index, 1);
        }
        }
    });

    aufgabeHinzu() {
        this.aufgaben.push({beschreibung: this.neueAufgabe, fertig:
        false});
        this.neueAufgabe = '';
        }