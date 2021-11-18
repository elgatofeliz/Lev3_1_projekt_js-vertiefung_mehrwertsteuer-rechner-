let netto = document.getElementById("nettoZuBrutto")
let brutto = document.getElementById("bruttoZuNetto")
let nineteen = document.getElementById("taxNineteen")
let seven = document.getElementById("taxSeven")
let amount = document.getElementById("amountInput")

changeForm = () => {
    if (brutto.checked == true) {
        document.getElementById("amount").innerHTML = "Bruttobetrag (Preis inclusive Bruttobetrag) in Euro"
        document.getElementById("betrag").innerHTML = "Nettobetrag"
    } else if (netto.checked == true) {
        document.getElementById("amount").innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"
        document.getElementById("betrag").innerHTML = "Bruttobetrag (Endpreis)"
    }
}

calculate = () => {
    let x = amount.value

    if ((nineteen.checked == false && seven.checked == false) || (amount.value = "")) {
        document.getElementById("nope").innerHTML = "Bitte Brutto/Netto, Steuersatz und Betrag eingeben"
    } else if (netto.checked && nineteen.checked) {
        document.getElementById("mwst").innerHTML = (x * 0.19).toFixed(2) + "€"
        document.getElementById("Ende").innerHTML = (x * 1.19).toFixed(2) + "€"
        document.getElementById("nope").innerHTML = ""
        document.getElementById("amountInput2").innerHTML = x + "€"
    } else if (netto.checked && seven.checked) {
        document.getElementById("mwst").innerHTML = (x * 0.07).toFixed(2) + "€"
        document.getElementById("Ende").innerHTML = (x * 1.07).toFixed(2) + "€"
        document.getElementById("nope").innerHTML = ""
        document.getElementById("amountInput2").innerHTML = x + "€"
    } else if (brutto.checked && nineteen.checked) {
        document.getElementById("mwst").innerHTML = (x / 1.19 * 0.19).toFixed(2) + "€"
        document.getElementById("Ende").innerHTML = (x / 1.19).toFixed(2) + "€"
        document.getElementById("amountInput2").innerHTML = x + "€"
    } else if (brutto.checked && seven.checked) {
        document.getElementById("mwst").innerHTML = (x / 1.07 * 0.07).toFixed(2) + "€"
        document.getElementById("Ende").innerHTML = (x / 1.07).toFixed(2) + "€"
        document.getElementById("nope").innerHTML = ""
        document.getElementById("amountInput2").innerHTML = x + "€"
    }
}