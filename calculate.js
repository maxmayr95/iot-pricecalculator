  var devices;
  var messages;
  var rules;
  var shadow;
  var connectivity;

  var fullPriceAWSMonthly = 0;
  var fullPriceAzureMonthly = 0;
  var fullPriceGoogleMonthly = 0;


function startCalculating(){
  devices = document.getElementById("devices").value;
  messages = document.getElementById("messages").value * devices;
  rules = document.getElementById("rules").value * devices;
  shadow = document.getElementById("shadow").value * devices;
  connectivity = document.getElementById("connectivity").value;
  calculateAWS();
  caluclateAzure();
  calculateGoogle();
}
//we calculate with Frankfurt
var devicesPriceAWS = 0; //Aws dont use devices to calculate
var connectivityPriceAWS = 0.096;
var messagingPriceAWS = 0; //we have to calculate
var rulesPriceAWS = 0.18;
var deviceShadowPriceAWS = 1.5; ///Frankfurt
function calculateAWS(){
  //fullPriceAWSMonthly = devicesPriceAWS; => not needed at amazone
  var messagingCosts =  calculateAWSMessagingPrice(messages);
  var rulesCost =  (rulesPriceAWS * ((rules)/1000000));
  var shadowCosts =  (deviceShadowPriceAWS * (shadow)/1000000);
  var connectivityCosts =  (connectivityPriceAWS * (connectivity * devices))/1000000;
  fullPriceAWSMonthly = messagingCosts + rulesCost + shadowCosts + connectivityCosts;

  setTableValues("aws-devices-cost",0);
  setTableValues("aws-messages-cost",messagingCosts);
  setTableValues("aws-rules-cost",rulesCost);
  setTableValues("aws-shadow-cost",shadowCosts);
  setTableValues("aws-connectivity-cost",connectivityCosts);
  setTableValues("aws-full-cost",fullPriceAWSMonthly);
}
function calculateAWSMessagingPrice(countMessages){
  if(countMessages <= 1000000000){
    return (countMessages * 1.2) / 1000000; //Frankfurt
  }else if(countMessages <= 5000000000){
    return countMessages * 0.96 / 1000000; //Frankfurt
  }else{
    return countMessages * 0.84 / 1000000; //Frankfurt
  }
}

function caluclateAzure(){
  var tarifEdition = calculateTarifEdition(messages);
  var fullPriceAzureMonthly = 0;
  var standardPrice = 0;
  switch (tarifEdition) {
    case 1:
      standardPrice = 32.5;
      break;
    case 2:
      standardPrice = 325;
      break;
    case 3:
      standardPrice = 3250;
      break;
  }
  var messageCost = calculateMessagesPriceAzure(messages);
  //var rulesCost = calculatRulesPriceAzure(rules);
  var shadowCost = calculatDeviceShadowPriceAzure(devices);
  fullPriceAzureMonthly = standardPrice + messageCost + shadowCost;

  setTableValues("azure-devices-cost",standardPrice);
  setTableValues("azure-messages-cost",messageCost);
  setTableValues("azure-rules-cost",0);
  setTableValues("azure-shadow-cost",shadowCost);
  setTableValues("azure-connectivity-cost",0); //included
  setTableValues("azure-full-cost",fullPriceAzureMonthly);
}
function calculateTarifEdition(msgs){
  var messagesDaily = msgs / 30; //30 days a month
  if(messagesDaily <= 400000){
    return 1;
  }else if(messagesDaily <= 6000000){
    return 2;
  }else{
    return 3;
  }
}

function calculateMessagesPriceAzure(messages){
  return messages/1000000; //1$ per 1000000 messages
}
function calculatDeviceShadowPriceAzure(devices){
  return devices/1000000*0.50; //0.5$ per 1000000 shadows
}

function calculateGoogle(){
  //Google is calculating with Mebibyte
  var size = Number(messages * 1.024) + Number(shadow);//1.024kb per message (min)
  var mbsize = size/1000;
  var mebisize = kiloByteToMeBit(size);
  fullPriceGoogleMonthly = calculateGooglePricing(mbsize);
  setTableValues("google-devices-cost",0);
  setTableValues("google-messages-cost",0); //included
  setTableValues("google-rules-cost",0);//included
  setTableValues("google-shadow-cost",0); //is updating
  setTableValues("google-connectivity-cost",0); //included
  setTableValues("google-full-cost",fullPriceGoogleMonthly);
}

function calculateGooglePricing(value){
  if(value <= 256){
    return value * 0;
  }else if(value <= 250000){
    return value * 0.0045;
  }else if(value <= 5000000){
    return value * 0.0020;
  }else{
    return value * 0.00045;
  }
}

function kiloByteToMeBit(value){
  return value * 0.00095367431640625;
}

function setTableValues(id,value){
    document.getElementById(id).innerHTML = value;
}
startCalculating();
