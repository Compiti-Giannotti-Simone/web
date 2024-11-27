function price() {
    let a, msg
    while(true) {
        a = window.prompt("Inserisci la tua età")
        if(a == null) {
            return
        }
        else if(a<5 && a > 0) {
            msg = "Hai " + a + " anni, prezzo: Gratis"
            break
        }
        else if(a>18 && a<25) {
            msg = "Hai " + a + " anni, Prezzo: 3.5€"
            break
        }
        else if(a>50 && a<55) {
            msg = "Hai " + a + " anni, Prezzo: 5€"
            break
        }
        else if(!isNaN(a) && a > 0){
            msg = "Hai " + a + " anni, Prezzo: 8€"
            break
        }
    }
    window.alert(msg)
    console.log(msg)
}