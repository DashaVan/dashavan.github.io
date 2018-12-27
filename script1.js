var age = prompt('Сколько вам лет?', '');
var mod;
    mod = age%10; 


switch(mod){
case 1:
        document.write('Вам ' + age + ' год!');
        break;
case 2:
case 3:
case 4:
        document.write('Вам ' + age + ' года!');
        break;
case 5:
        document.write ('Вам ' + age + ' лет!');
        break;
case 6:
case 7:
case 8:
case 9:
case 0:
document.write ('Вам ' + age + ' лет!');
        break;

}

