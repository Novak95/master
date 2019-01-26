function urlString(url) {
    for (var i = 0; i<url.length; i++){
        var domen = url.split("//")[1].toString();
    }


    return domen;
}


console.log(urlString("http://github.com/carbonfive/raygun").split(".")[0]);
console.log(urlString("http://www.zombie-bites.com").split(".")[1]);
console.log(urlString("https://www.cnet.com").split(".")[1]);