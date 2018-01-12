//Function validation for first forms:
function validateForm(){
    var fValue = document.forms["firstFormVal"]["fname"].value;
    var sValue = document.forms["firstFormVal"]["sname"].value;
    console.log("First value" + fValue + "Second value" + sValue);
    if(fValue == "" || sValue == ""){
        alert("Fields must be filled out!");
        return false;
    }
}

function numberValidate(){
    //Stable parameters:
    var inVal = document.getElementById("inNumber").value;
    var output = document.getElementsByClassName("container");
    var repOut = document.getElementById("replaceId");
    var alertBlock, alertHead, alertText;
    alertBlock = document.createElement("div");
    alertHead = document.createElement("h4");
    alertText = document.createElement("p");
    alertBlock.setAttribute("role","alert");
    alertBlock.setAttribute("id","replaceId");
    alertHead.setAttribute("class","alert-heading");
    alertBlock.style.marginTop = "15px";
    alertBlock.appendChild(alertHead);
    alertBlock.appendChild(alertText);
    //Dynamic changeable parameters:
    if(inVal === ""){
        alertBlock.setAttribute("class","alert alert-danger");
        alertHead.innerHTML = "Fatal Error!";
        alertText.innerHTML = "This field must isn't empty! Please, type your value for validation!";
    } else if(inVal < 347){
        alertBlock.setAttribute("class","alert alert-danger");
        alertHead.innerHTML = "Fatal Error!";
        alertText.innerHTML = "You typed wrong value " + inVal + " which is less and not equal to 347. Please try again!";
    } else if(inVal > 956){
        alertBlock.setAttribute("class","alert alert-danger");
        alertHead.innerHTML = "Fatal Error!";
        alertText.innerHTML = "You typed wrong value " + inVal + " which is greater and not equal to 956. Please try again!";
    } else {
        alertBlock.setAttribute("class","alert alert-success");
        alertHead.innerHTML = "Success!";
        alertText.innerHTML = "Very well! You typed a correct value!";
    }
    console.log(alertBlock);
    output[1].replaceChild(alertBlock,repOut);
}

//Enable bootstrap tooltips:
$(function(){
    $('[data-toggle="tooltip"]').tooltip()
})

//Range Output function:
function rangeOut(check){
    var out = document.getElementById("form4").elements.namedItem("outResult");
    out.value = check;
}

//Function for check validation:
function checkValAPI(){
    var output = document.getElementsByClassName("container");
    var alertBlock, alertHead, alertText;
    var inputObj = document.getElementById("checkVal1");
    var output = document.getElementsByClassName("container");
    var repId = document.getElementById("replaceId2");
    console.log(output.length);
    
    alertBlock = document.createElement("div");
    alertHead = document.createElement("h4");
    alertText = document.createElement("p");
    alertBlock.setAttribute("role","alert");
    alertBlock.setAttribute("id","replaceId2");
    alertHead.setAttribute("class","alert-heading");
    alertBlock.style.marginTop = "15px";
    alertBlock.appendChild(alertHead);
    alertBlock.appendChild(alertText);
    
    if(inputObj.checkValidity() == false){
        alertBlock.setAttribute("class","alert alert-danger");
        alertHead.innerHTML = "Fatal Error!";
        alertText.innerHTML = inputObj.validationMessage;
    } else {
        alertBlock.setAttribute("class","alert alert-success");
        alertHead.innerHTML = "Success!";
        alertText.innerHTML = "Input it's OK!";
    }
    
    output[5].replaceChild(alertBlock,repId);
}

//Enable general popovers:
$(function(){
    $('[data-toggle="popover"]').popover()
})

//Testing validity properties:
function apiValidation(){
    var output = document.getElementsByClassName("container");
    var repId = document.getElementById("replaceId3");
    var formVar = document.forms["formIn"];
    var countErr = 0;
    var errArray = [];
    var alBlock = winCreate();
    var valCheck = [],
    messageCheck = [],
    checkVal = [];
    for(var i=0;i<formVar.length;i++){
        if(formVar[i].validity.patternMismatch){
            errArray[countErr] = document.createElement("p");
            errArray[countErr].innerHTML = countErr+1 + ") Your entered data in " + (i+1) + "-th input does not match its pattern behavior!";
            countErr++;
        } else if(formVar[i].validity.rangeOverflow){
            errArray[countErr] = document.createElement("p");
            errArray[countErr].innerHTML = countErr+1 + ") Your entered data in " + (i+1) + "-th input is greater than its max attribute!";
            countErr++;
        } else if(formVar[i].validity.rangeUnderflow){
            errArray[countErr] = document.createElement("p");
            errArray[countErr].innerHTML = countErr+1 + ") Your entered data in " + (i+1) + "-th input is less than its min attribute!";
            countErr++;
        } else if(formVar[i].validity.tooLong){
            errArray[countErr] = document.createElement("p");
            errArray[countErr].innerHTML = countErr+1 + ") Your entered data in " + (i+1) +  "-th input exceeds its max length attribute!";
            countErr++;
        } else if(formVar[i].validity.typeMismatch){
            errArray[countErr] = document.createElement("p");
            errArray[countErr].innerHTML = countErr+1 + ") Your entered data in " + (i+1) + "-th input is invalid per its type attribute!";
            countErr++;
        } else if(formVar[i].validity.valueMissing){
            errArray[countErr] = document.createElement("p");
            errArray[countErr].innerHTML = countErr+1 + ") Your entered data in " + (i+1) + "-th input hasn't value!";
            countErr++;
        }
        valCheck[i] = formVar[i].willValidate;
        messageCheck[i] = formVar[i].validity.customError;
        checkVal[i] = formVar[i].validity.valid;
    }
    var alertText = document.createElement("p");
    if(countErr === 0){
        alBlock.alertBlock.setAttribute("class","alert alert-success");
        alBlock.alertHead.innerHTML = "Success!";
        alertText.innerHTML = "You have not errors in this special form!";
        alBlock.alertBlock.appendChild(alertText);
    } else {
        alBlock.alertBlock.setAttribute("class","alert alert-danger");
        alBlock.alertHead.innerHTML = "Fatal Error!";
        alertText.innerHTML = "Sorry, but in your form are " + countErr + " errors!";
        alBlock.alertBlock.appendChild(alertText);
        var errorBlock = document.createElement("div");
        alBlock.alertBlock.appendChild(errorBlock);
        errorBlock.innerHTML = "You have the next errors in your form: <br/><br/>";
        errorBlock.style.paddingLeft = "20px";
        errorBlock.style.paddingTop = "15px";
        errorBlock.style.paddingBottom = "15px";
        errorBlock.style.borderLeft = "5px solid #ff4d4d";
        errorBlock.style.backgroundColor = "#ff9999";
        errorBlock.style.borderRadius = "0 7px 7px 0";
        for(var i=0;i<errArray.length;i++){
            errorBlock.appendChild(errArray[i]);
        }
    }
    for(var i=0;i<formVar.length;i++){
        console.log("Element will be validated: " + valCheck[i]);
        console.log("Custom validity message is set: " + messageCheck[i]);
        console.log("Element's value is valid: " + checkVal[i]);
    }
    output[5].replaceChild(alBlock.alertBlock,repId);
}

function winCreate(){
    var alertObject = {
        alertBlock : document.createElement("div"),
        alertHead : document.createElement("h4")
    };
    
    alertObject.alertBlock.setAttribute("class","alert");
    alertObject.alertHead.setAttribute("class","alert-heading");
    alertObject.alertBlock.setAttribute("id","replaceId3");
    alertObject.alertBlock.style.marginTop = "15px";
    alertObject.alertBlock.appendChild(alertObject.alertHead);
    return alertObject;
}

//Function for implementation search pattern:
function sPattern(){
    var sSent = 'The Communist Manifesto is divided into a preamble and four sections, the last of these a short conclusion. The introduction begins by proclaiming "A spectre is haunting Europe—the spectre of communism. All the powers of old Europe have entered into a holy alliance to exorcise this spectre"',
    sWord = document.getElementById("searchedWord").value,
    posSearch = sSent.search(sWord),
    outVar = document.getElementById("outResultWin2");
    if(posSearch > 0){
        outVar.value = "Position searched element: " + posSearch;
    } else if(posSearch <= 0) {
        outVar.value = "Your entered word isn't searched in the sentence!";
    }
}

//Function for implementation replace pattern:
function rPattern(){
    var replaceEl = document.getElementById("repEl"),
    defBlock = document.getElementById("quote").innerHTML,
    replaceSen = document.getElementById("replaceSentence").value,
    outWin = document.getElementById("outResultWin3");
    if(replaceSen !== ""){
        outWin.value = "Operation Success! You replaced sentence.";
        replaceEl.innerHTML = replaceEl.innerHTML.replace("We call communism the real movement which abolishes the present state of things.",replaceSen);
        console.log(replaceEl);
    } else {
        outWin.value = "Error! You must enter own sentence for replacing!";
    }
}

//Function for implement searching all matchings for (h)-elements:
function allMatch(){
    var textForm = document.getElementById("regExp3").value,
    outSec = document.getElementById("outResultWin4"),
    matPat = /revolution/,
    sMatch = matPat.test(textForm),
    sContent = matPat.exec(textForm),
    sSearch = textForm.search(matPat);
    if(sMatch === true){
        outSec.value = "Success! We searched " + sContent + " on " + sSearch + "-position.";
    } else {
        outSec.value = "Fail! We searched " + sContent + " element."; 
    }
}

//Ativation dropdown button in Bootstrap:
$('.dropdown-toggle').dropdown();

//Function for implement modifier app:
function modifierApp(modifier){
    var textBlock = document.getElementById("inText").value,
    outResult5 = document.getElementById("outResultWin5"),
    btnItem = document.getElementsByClassName("dropdown-item"),
    matEl, result, testItem;
    //Select appropriate modifier:
    console.log(modifier);
    if(modifier === 'Insensetive'){
        matEl = /country/i;
    } else if(modifier === 'Global'){
        matEl = /country/g;
    } else if(modifier === 'Multiline'){
        matEl = /country/m;
    } else if(modifier === 'Integral'){
        matEl = /country/gmi;
    } else if(modifier === 'Beginning line'){
        matEl = /^country/gmi;
    } else if(modifier === 'End line'){
        matEl = /country$/gmi;
    }
    //Validate implementation:
    testItem = matEl.test(textBlock);
    console.log(testItem);
    if(testItem === true){
        result = textBlock.match(matEl);
        outResult5.value = result;
    } else {
        outResult5.value = "Fail! We didn't search element. Please try again!";
    }
}

//Function for implement brackets application:
var aKey = 0;
function bracketsApp(checkKey){
    var dropCon = document.getElementsByClassName("dropdown-item drop-list-2"),
    textInput = document.getElementById("textBlock6").value,
    symRange = document.getElementsByClassName("form-control form-customize"),
    textOut = document.getElementsByClassName("form-control textarea-customize"),
    contVar,matchCont;
    console.log(textInput + " + " + symRange[0].value);
    dropCon[aKey].setAttribute("class","dropdown-item drop-list-2");
    if(checkKey === dropCon[0].innerHTML){
        dropCon[0].setAttribute("class","dropdown-item drop-list-2 active");
        aKey = 0;
        contVar = /[likeovsm]/gi;
        symRange[0].value = "Selected range: " + "all symbols included [likeovsm]"
    } else if(checkKey === dropCon[1].innerHTML){
        dropCon[1].setAttribute("class","dropdown-item drop-list-2 active");
        aKey = 1;
        contVar = /[^hatefr]/gi;
        symRange[0].value = "Selected range: " + "all symbols excluded [hatefr]";
    } else if(checkKey === dropCon[2].innerHTML){
        dropCon[2].setAttribute("class","dropdown-item drop-list-2 active");
        aKey = 2;
        contVar = /[13579]/gi;
        symRange[0].value = "Selected range: " + "all numbers included [13579]";
    } else if(checkKey === dropCon[3].innerHTML){
        dropCon[3].setAttribute("class","dropdown-item drop-list-2 active");
        aKey = 3;
        contVar = /[^5-9]/gi;
        symRange[0].value = "Selected range: " + "all numbers excluded [from 5 to 9]"
    } else if(checkKey === dropCon[4].innerHTML){
        dropCon[4].setAttribute("class","dropdown-item drop-list-2 active");
        aKey = 4;
        contVar = /(effective|personal|government|individual)/gi;
        symRange[0].value = "Selected range: " + "'effective' or 'personal' or 'government' or 'individual'.";
    }
    matchCont = textInput.match(contVar);
    if(matchCont === null){
        textOut[0].value = "Error! Your text isn't match out search preferences. ";
        symRange[0].value = "Please, try again!";
    } else {
        textOut[0].value = matchCont;
    }
    console.log(contVar);
    console.log(matchCont);
}

//Modifier Application Function:
function modifierApp(check){
    var textBlock = document.getElementById("textBlock7").value,
    outResult = document.getElementById("outResultWin7"),
    matchVar;
    if(textBlock !== ""){
        switch(check){
            case "Single character":
                matchVar = textBlock.match(/s.h/gi);
                break;
            case "Word":
                matchVar = textBlock.match(/\w/gi);
                break;
            case "Non-word":
                matchVar = textBlock.match(/\W/gi);
                break;
            case "Digit":
                matchVar = textBlock.match(/\d/gi);
                break;
            case "Non-digit":
                matchVar = textBlock.match(/\W/gi);
                break;
            case "Whitespace":
                matchVar = textBlock.match(/\s/gi);
                break;
            case "Non-whitespace":
                matchVar = textBlock.match(/\S/gi);
                break;
            case "beginning/end":
                matchVar = textBlock.match(/\bPresident/gi);
                break;
            case "Non beg/end":
                matchVar = textBlock.match(/\BConsular/gi);
                break;
            case "NUL":
                matchVar = textBlock.search(/\0/gi);
                break;
            case "New line":
                matchVar = textBlock.search(/\n/gi);
                break;
            case "Form feed":
                matchVar = textBlock.search(/\f/gi);
                break;
            case "Carriage":
                matchVar = textBlock.search(/\r/gi);
                break;
            case "Tab":
                matchVar = textBlock.search(/\t/gi);
                break;
            case "Vertical Tab":
                matchVar = textBlock.search(/\v/gi);
                break;
            case "Character by octal":
                matchVar = textBlock.match(/\114/gi);
                break;
            case "Character by hexadecimal":
                matchVar = textBlock.match(/\x4C/gi);
                break;
            case "Unicode":
                matchVar = textBlock.match(/\u0062/gi);
                break;
        }
        outResult.value = matchVar;
    } else {
        outResult.value = "Sorry! But, your textblock is empty. Fill out him.";
    }
}

function quantifierApp(checkID){
    var textValue = document.getElementById("textBlock8").value,
    innerClass = document.getElementsByClassName("custom-control-input"),
    outWin = document.getElementById("outResultWin8"),
    temp, tempRes;
    
    if(textValue !== ""){
        switch(checkID){
        case 'radioStacked1':
            temp = /X+/gi;
            break;
        case 'radioStacked2':
            temp = /10*/g;
            break;
        case 'radioStacked3':
            temp = /40?/g;
            break;
        case 'radioStacked4':
            temp = /(3-7){6}/g;
            break;
        case 'radioStacked5':
            temp = /\d{2,5}/g;
            break;
        case 'radioStacked6':
            temp = /\d{5,}/g;
            break;
        case 'radioStacked7':
            temp = /snail$/gm;
            break;
        case 'radioStacked8':
            temp = /^borderland/gmi;
            break;
        case 'radioStacked9':
            temp = /are(?=changeable)/g;
            break;
        case 'radioStacked10':
            temp = /is(?!repeatedly)/gi;
            break;
        default:
            temp = "";
        }
        tempRes = textValue.match(temp);
        console.log(tempRes);
        outWin.value = (tempRes !== null)? tempRes : "Sorry, but we didn't search your pattern.";
    } else {
        outWin.value = "Sorry. But, your text-field is empty.";
    }
}

//Function for testing regular expression object:
var stringVar = "",
patt = /and/gi;
function regExpFunc(attr){
    var testText = document.getElementById("test-text").innerHTML,
    textBlock10 = document.getElementById("textBlock10");
    if(attr === 'constructor'){
        stringVar += "RegExp Object prototype: " + patt.constructor + '\n';
    } else if(attr === 'global'){
        stringVar += "Global modifier is set ? - " + patt.global + "\n";
    } else if(attr === 'ignore case'){
        stringVar += "Case-insensitive is set ? - " + patt.ignoreCase + "\n";
    } else if(attr === "last index"){
        stringVar += "Searching last index of matching: \n";
        while(patt.test(testText) === true){
            stringVar += "'and' found. Index now at: " + patt.lastIndex + "\n";
        }
    } else if(attr === "multiline"){
        stringVar += "Multiline is set ? - " + patt.multiline + "\n";
    } else if(attr === "source"){
        stringVar += "Text of the RegExp pattern: " + patt.source + "\n";
    } else if(attr === 'reset'){
        stringVar = "";
    }
    textBlock10.value = stringVar;
}

//Function for implement testing RegExp Object Methods:
function regExpMeth(check){
    var inputBlock = document.getElementById("textBlock11"),
    outputBlock = document.getElementById("textBlock12"),
    inPattern = document.getElementById("inputPattern");
    if(inputBlock.value !== "" && inPattern.value !== ""){
        var des = inPattern.value;
        patt = new RegExp(des,"g","i");
        switch(check){
            case 'Exec':
                outputBlock.value = "First matching pattern in the textblock: " + patt.exec(inputBlock.value);
                break;
            case 'Test':
                outputBlock.value = "Is set right pattern for this text ? - " + patt.test(inputBlock.value);
                break;
            case 'String value':
                outputBlock.value = "Pattern, which you filled out: " + patt.toString();
                break;
            default:
                outputBlock.value = "Erro!\nSorry, but your filled pattern didn't searched in the textblock. Please, try again!";
        }
        outputBlock.style.borderColor = " #00b33c";
        outputBlock.style.color = " #00b33c";
    } else {
        outputBlock.value = "Error!\nSorry, but you didn't fill out input text-block or pattern above! Please, try again!";
        outputBlock.style.borderColor = "#b32d00";
        outputBlock.style.color = "#b32d00";
    }
}