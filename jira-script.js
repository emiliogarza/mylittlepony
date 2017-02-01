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

//For the page : https://www.atlassian.com/ondemand/signup/form
$("head").append("<style type='text/css'>.select option,.select select{display:block}.select,.select select,.select:after{display:inline-block}.select{position:relative;width:100%;color:#555}.select select{width:100%;margin:0;padding:.5rem 2.25rem .5rem 1rem;line-height:1.5;color:#555;background-color:#eee;border:0;border:1px solid #D0D0D0;border-radius:.25rem;cursor:pointer;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.select select:focus:-moz-focusring{color:transparent;text-shadow:0 0 0 #000}.select:after{position:absolute;top:50%;right:1.25rem;content:'';width:0;height:0;margin-top:-.15rem;pointer-events:none;border-top:.35rem solid;border-right:.35rem solid transparent;border-bottom:.35rem solid transparent;border-left:.35rem solid transparent}.select select:focus{box-shadow:0 0 0 .075rem #fff,0 0 0 .2rem #0074d9}.select select:active{color:#fff;background-color:#0074d9}.select select::-ms-expand{display:none}@-moz-document url-prefix(){.select select{text-indent:.01px;text-overflow:'';padding-right:1rem}.select option{background-color:#fff}}@media screen and (min-width:0\0){.select select{z-index:1;padding:.5rem 1.5rem .5rem 1rem}.select:after{z-index:5}.select:before{position:absolute;top:0;right:1rem;bottom:0;z-index:2;content:'';display:block;width:1.5rem;background-color:#eee}.select select:active,.select select:focus,.select select:hover{color:#555;background-color:#eee}}</style>");

$("label#accountLabel").before('<label for="productSelection" id="productSelectionLabel"><span translate=""><span>Product Selection</span></span> <a href="https://www.atlassian.com/software/jira/try">More details</a></label><div class="select" style="margin-bottom:10px"><select id="productSelection" aria-label="Product Select Menu"><option value="jira">JIRA Software - $10/month<option value="jira-confluence" selected>JIRA Software + Documentation - $20/month<option value="jira-helpdesk">JIRA Software + Help Desk - $30/month<option value="create">Create your own - $0/month</select></div>');

$('select#productSelection').on('change', function() {
  if (this.value == "jira") {
  	location.href = "https://www.atlassian.com/ondemand/signup/form?product=jira-software.ondemand";
  }
  else if (this.value == "jira-confluence") {
  	location.href = "https://www.atlassian.com/ondemand/signup/form?product=jira-software.ondemand,confluence.ondemand";
  }
  else if (this.value == "jira-helpdesk") {
  	location.href = "https://www.atlassian.com/ondemand/signup/form?product=jira-software.ondemand,jira-servicedesk.ondemand,confluence.ondemand";
  }
  else {
  	location.href = "https://www.atlassian.com/ondemand/signup/?product=jira-software.ondemand";  	
  }
});


