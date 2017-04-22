// Wprowadzenie imienia użytkownika
var name = prompt('Wpisz swoje imię');
alert('Witaj, ' + name);
console.log('Witaj, ' + name);

// Wprowadzenie danych do obliczeń
var a = prompt('Wpisz wartość zmiennej a');
var b = prompt('Wpisz wartość zmiennej b');
var value = (a*a)+(2*a*b)-(b*b);

// Wynik działania
alert(name + ' ' + 'Wynik działania to' + ' ' + value);
console.log(name + ' ' + 'Wynik działania to' + ' ' + value);

// Instrukcje warunkowe
if (value == 0) {
	alert('Wynik zerowy');
    console.log('Wynik zerowy');
} else if (value > 0) {
	alert('Wynik dodatni');
    console.log('Wynik dodatni');
} else {
	alert('Wynik ujemny');
    console.log('Wynik ujemny');
}