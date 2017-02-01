// For the page : https://www.atlassian.com/software/jira
var preferredUrl = 'https://www.atlassian.com/ondemand/signup/form?product=jira-software.ondemand,confluence.ondemand';

var topBarBtn = document.getElementsByClassName("button green-hollow secondary")[0];
topBarBtn.href = preferredUrl;

var productTourHero = document.getElementsByClassName("product-tour-hero--video__button")[0];
var productTourButton = productTourHero.getElementsByClassName("button")[0];
productTourButton.href = preferredUrl;

var priceBlockBtns = document.getElementsByClassName("button price-block--cta green-solid standard");
for (var i = 0; i < priceBlockBtns.length; i++) {
    priceBlockBtns[i].href = preferredUrl;
}



