const url = require('url')

const newUrl = new URL('http://bexruz.ru:300/users/user.html?name=Ilgor&status=active')

//To`liq url
console.log(newUrl.href);

//bu saytni nomini qaytaradi lekin bu host namedagi portni ham qaytaradi
console.log(newUrl.host);

//bu ham sayt nomi
console.log(newUrl.hostname);

//bu popka yoki filega bolgan yolni korsatadi
console.log(newUrl.pathname);

//bu urlni paramdagi parametrni qaytaradi
console.log(newUrl.search);

//bu pramasdagi narsalarni obj qilib qaytaradi
console.log(newUrl.searchParams);