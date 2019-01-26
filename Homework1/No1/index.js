const htmlString = "<article><h1>London</h1><p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p><p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p></article>";
let newHtmlString = "";
function getTag1(htmlString, htmlTag) {

    if (htmlTag === "<h1>" || htmlTag === "h1") {
        newHtmlString = htmlString.split("<h1>")[1];
        console.log(newHtmlString.split("</h1>")[0]);

    } else if (htmlTag === "<p>" || htmlTag === "p") {
        newHtmlString = htmlString.split("<p>")[1];
        console.log(newHtmlString.split("</article>")[0]);
        console.log(newHtmlString);

    } else if (htmlTag === "<article>" || htmlTag === "article") {
        newHtmlString = htmlString;
        console.log(newHtmlString);

    } else {
        console.log("No text wraped in that tag");

    }

}
console.log(getTag1(htmlString, "<article>"));



















