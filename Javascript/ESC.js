function Bildauswahl() {
	var index = document.getElementById("ESCLand").value;
	document.getElementById("Menürotation").src = "../Bilder/ESC-Überschrift/" + index + ".png";
}

function Rückmeldung() {
	if(confirm("Gefällt Ihnen unsere ESC-Mediathek?")){
		alert("Vielen Dank! Das freut uns sehr!");
		}
	else {
		alert("Es tut uns Leid, dass Ihnen unsere Mediathek nicht gefällt. Bitte teilen Sie uns in einer E-mail mit, wie wir die Mediathek verbessern könnten. Klicken Sie dafür auf den Link 'Kontakt'. Vielen Dank!");
		}
}

function DB2010(){																		/* Xpath-Funktion für den Zugriff auf die Datenbank 2010 */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        showResult(xhttp.responseXML);
    }
};
xhttp.open("GET", "../XML und Schemata/ESC.xml", true);
xhttp.send(); 

function showResult(xml) {
    var txt1 = "";																			/* Xpath Land 2010 */
    path = "/ESC/Contest[@Jahr='2010']/Teilnehmer/Land"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt1 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Land").innerHTML = txt1;
	
	var txt2 = "";																			/* Xpath Vertreter 2010 */
    path = "/ESC/Contest[@Jahr='2010']/Teilnehmer/Vertreter"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt2 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Vertreter").innerHTML = txt2;
	
	var txt3 = "";																			/* Xpath Song 2010 */
    path = "/ESC/Contest[@Jahr='2010']/Teilnehmer/Song"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt3 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Song").innerHTML = txt3;
	
	var txt5 = "";																			/* Xpath grobePlatzierung 2010 */
    path = "/ESC/Contest[@Jahr='2010']/Teilnehmer/grobePlatzierung"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt5 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("grobePltz").innerHTML = txt5;
	
	var txt6 = "";																			/* Xpath genauePlatzierung 2010 */
    path = "/ESC/Contest[@Jahr='2010']/Teilnehmer/genauePlatzierung"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt6 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("genauePltz").innerHTML = txt6;
	
	var txt7 = "";																			/* Xpath Logo 2010 */
    path = "/ESC/Contest[@Jahr='2010']/Logo"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt7 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Logobild").src = txt7;
	
	var txt8 = "";																			/* Xpath Bühnenbild 2010 */
    path = "/ESC/Contest[@Jahr='2010']/Bühnenbild"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt8 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Bühnenbild").src = txt8;
	
	var txt9 = "";																			/* Xpath Titelbild 2010 */
    path = "/ESC/Contest[@Jahr='2010']/Titelbild"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt9 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Titelbild").src = txt9;
	
	var txt10 = "";																			/* Xpath Informationstext 2010 */
    path = "/ESC/Contest[@Jahr='2010']/Informationstext"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt10 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Informationstext").innerHTML = txt10;
}

}

function DB2011(){																		/* Xpath-Funktion für den Zugriff auf die Datenbank 2011 */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        showResult(xhttp.responseXML);
    }
};
xhttp.open("GET", "../XML und Schemata/ESC.xml", true);
xhttp.send(); 

function showResult(xml) {
    var txt1 = "";																			/* Xpath Land 2011 */
    path = "/ESC/Contest[@Jahr='2011']/Teilnehmer/Land"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt1 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Land").innerHTML = txt1;
	
	var txt2 = "";																			/* Xpath Vertreter 2011 */
    path = "/ESC/Contest[@Jahr='2011']/Teilnehmer/Vertreter"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt2 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Vertreter").innerHTML = txt2;
	
	var txt3 = "";																			/* Xpath Song 2011 */
    path = "/ESC/Contest[@Jahr='2011']/Teilnehmer/Song"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt3 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Song").innerHTML = txt3;
		
	var txt5 = "";																			/* Xpath grobePlatzierung 2011 */
    path = "/ESC/Contest[@Jahr='2011']/Teilnehmer/grobePlatzierung"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt5 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("grobePltz").innerHTML = txt5;
	
	var txt6 = "";																			/* Xpath genauePlatzierung 2011 */
    path = "/ESC/Contest[@Jahr='2011']/Teilnehmer/genauePlatzierung"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt6 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("genauePltz").innerHTML = txt6;
	
	var txt7 = "";																			/* Xpath Logo 2011 */
    path = "/ESC/Contest[@Jahr='2011']/Logo"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt7 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Logobild").src = txt7;
	
	var txt8 = "";																			/* Xpath Bühnenbild 2011 */
    path = "/ESC/Contest[@Jahr='2011']/Bühnenbild"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt8 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Bühnenbild").src = txt8;
	
	var txt9 = "";																			/* Xpath Titelbild 2011 */
    path = "/ESC/Contest[@Jahr='2011']/Titelbild"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt9 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Titelbild").src = txt9;
	
	var txt10 = "";																			/* Xpath Informationstext 2011 */
    path = "/ESC/Contest[@Jahr='2011']/Informationstext"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt10 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Informationstext").innerHTML = txt10;
}

}

function DB2012(){																		/* Xpath-Funktion für den Zugriff auf die Datenbank 2012 */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        showResult(xhttp.responseXML);
    }
};
xhttp.open("GET", "../XML und Schemata/ESC.xml", true);
xhttp.send(); 

function showResult(xml) {
    var txt1 = "";																			/* Xpath Land 2012 */
    path = "/ESC/Contest[@Jahr='2012']/Teilnehmer/Land"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt1 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Land").innerHTML = txt1;
	
	var txt2 = "";																			/* Xpath Vertreter 2012 */
    path = "/ESC/Contest[@Jahr='2012']/Teilnehmer/Vertreter"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt2 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Vertreter").innerHTML = txt2;
	
	var txt3 = "";																			/* Xpath Song 2012 */
    path = "/ESC/Contest[@Jahr='2012']/Teilnehmer/Song"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt3 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Song").innerHTML = txt3;

	var txt5 = "";																			/* Xpath grobePlatzierung 2012 */
    path = "/ESC/Contest[@Jahr='2012']/Teilnehmer/grobePlatzierung"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt5 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("grobePltz").innerHTML = txt5;
	
	var txt6 = "";																			/* Xpath genauePlatzierung 2012 */
    path = "/ESC/Contest[@Jahr='2012']/Teilnehmer/genauePlatzierung"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt6 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("genauePltz").innerHTML = txt6;
	
	var txt7 = "";																			/* Xpath Logo 2012 */
    path = "/ESC/Contest[@Jahr='2012']/Logo"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt7 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Logobild").src = txt7;
	
	var txt8 = "";																			/* Xpath Bühnenbild 2012 */
    path = "/ESC/Contest[@Jahr='2012']/Bühnenbild"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt8 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Bühnenbild").src = txt8;
	
	var txt9 = "";																			/* Xpath Titelbild 2012 */
    path = "/ESC/Contest[@Jahr='2012']/Titelbild"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt9 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Titelbild").src = txt9;
	
	var txt10 = "";																			/* Xpath Informationstext 2012 */
    path = "/ESC/Contest[@Jahr='2012']/Informationstext"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt10 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Informationstext").innerHTML = txt10;
}

}

function DB2013(){																		/* Xpath-Funktion für den Zugriff auf die Datenbank 2013 */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        showResult(xhttp.responseXML);
    }
};
xhttp.open("GET", "../XML und Schemata/ESC.xml", true);
xhttp.send(); 

function showResult(xml) {
    var txt1 = "";																			/* Xpath Land 2013 */
    path = "/ESC/Contest[@Jahr='2013']/Teilnehmer/Land"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt1 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Land").innerHTML = txt1;
	
	var txt2 = "";																			/* Xpath Vertreter 2013 */
    path = "/ESC/Contest[@Jahr='2013']/Teilnehmer/Vertreter"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt2 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Vertreter").innerHTML = txt2;
	
	var txt3 = "";																			/* Xpath Song 2013 */
    path = "/ESC/Contest[@Jahr='2013']/Teilnehmer/Song"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt3 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Song").innerHTML = txt3;

	var txt5 = "";																			/* Xpath grobePlatzierung 2013 */
    path = "/ESC/Contest[@Jahr='2013']/Teilnehmer/grobePlatzierung"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt5 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("grobePltz").innerHTML = txt5;
	
	var txt6 = "";																			/* Xpath genauePlatzierung 2013 */
    path = "/ESC/Contest[@Jahr='2013']/Teilnehmer/genauePlatzierung"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt6 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("genauePltz").innerHTML = txt6;
	
	var txt7 = "";																			/* Xpath Logo 2013 */
    path = "/ESC/Contest[@Jahr='2013']/Logo"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt7 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Logobild").src = txt7;
	
	var txt8 = "";																			/* Xpath Bühnenbild 2013 */
    path = "/ESC/Contest[@Jahr='2013']/Bühnenbild"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt8 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Bühnenbild").src = txt8;
	
	var txt9 = "";																			/* Xpath Titelbild 2013 */
    path = "/ESC/Contest[@Jahr='2013']/Titelbild"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt9 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Titelbild").src = txt9;
	
	var txt10 = "";																			/* Xpath Informationstext 2013 */
    path = "/ESC/Contest[@Jahr='2013']/Informationstext"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt10 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Informationstext").innerHTML = txt10;
}

}

function DB2014(){																		/* Xpath-Funktion für den Zugriff auf die Datenbank 2014 */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        showResult(xhttp.responseXML);
    }
};
xhttp.open("GET", "../XML und Schemata/ESC.xml", true);
xhttp.send(); 

function showResult(xml) {
    var txt1 = "";																			/* Xpath Land 2014 */
    path = "/ESC/Contest[@Jahr='2014']/Teilnehmer/Land"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt1 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Land").innerHTML = txt1;
	
	var txt2 = "";																			/* Xpath Vertreter 2014 */
    path = "/ESC/Contest[@Jahr='2014']/Teilnehmer/Vertreter"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt2 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Vertreter").innerHTML = txt2;
	
	var txt3 = "";																			/* Xpath Song 2014 */
    path = "/ESC/Contest[@Jahr='2014']/Teilnehmer/Song"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt3 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Song").innerHTML = txt3;

	var txt5 = "";																			/* Xpath grobePlatzierung 2014 */
    path = "/ESC/Contest[@Jahr='2014']/Teilnehmer/grobePlatzierung"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt5 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("grobePltz").innerHTML = txt5;
	
	var txt6 = "";																			/* Xpath genauePlatzierung 2014 */
    path = "/ESC/Contest[@Jahr='2014']/Teilnehmer/genauePlatzierung"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt6 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("genauePltz").innerHTML = txt6;
	
	var txt7 = "";																			/* Xpath Logo 2014 */
    path = "/ESC/Contest[@Jahr='2014']/Logo"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt7 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Logobild").src = txt7;
	
	var txt8 = "";																			/* Xpath Bühnenbild 2014 */
    path = "/ESC/Contest[@Jahr='2014']/Bühnenbild"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt8 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Bühnenbild").src = txt8;
	
	var txt9 = "";																			/* Xpath Titelbild 2014 */
    path = "/ESC/Contest[@Jahr='2014']/Titelbild"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt9 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Titelbild").src = txt9;
	
	var txt10 = "";																			/* Xpath Informationstext 2014 */
    path = "/ESC/Contest[@Jahr='2014']/Informationstext"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt10 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Informationstext").innerHTML = txt10;
}

}

function DB2015(){																		/* Xpath-Funktion für den Zugriff auf die Datenbank 2015 */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        showResult(xhttp.responseXML);
    }
};
xhttp.open("GET", "../XML und Schemata/ESC.xml", true);
xhttp.send(); 

function showResult(xml) {
    var txt1 = "";																			/* Xpath Land 2015 */
    path = "/ESC/Contest[@Jahr='2015']/Teilnehmer/Land"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt1 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Land").innerHTML = txt1;
	
	var txt2 = "";																			/* Xpath Vertreter 2015 */
    path = "/ESC/Contest[@Jahr='2015']/Teilnehmer/Vertreter"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt2 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Vertreter").innerHTML = txt2;
	
	var txt3 = "";																			/* Xpath Song 2015 */
    path = "/ESC/Contest[@Jahr='2015']/Teilnehmer/Song"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt3 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Song").innerHTML = txt3;

	var txt5 = "";																			/* Xpath grobePlatzierung 2015 */
    path = "/ESC/Contest[@Jahr='2015']/Teilnehmer/grobePlatzierung"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt5 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("grobePltz").innerHTML = txt5;
	
	var txt6 = "";																			/* Xpath genauePlatzierung 2015 */
    path = "/ESC/Contest[@Jahr='2015']/Teilnehmer/genauePlatzierung"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt6 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("genauePltz").innerHTML = txt6;
	
	var txt7 = "";																			/* Xpath Logo 2015 */
    path = "/ESC/Contest[@Jahr='2015']/Logo"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt7 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Logobild").src = txt7;
	
	var txt8 = "";																			/* Xpath Bühnenbild 2015 */
    path = "/ESC/Contest[@Jahr='2015']/Bühnenbild"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt8 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Bühnenbild").src = txt8;
	
	var txt9 = "";																			/* Xpath Titelbild 2015 */
    path = "/ESC/Contest[@Jahr='2015']/Titelbild"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt9 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Titelbild").src = txt9;
	
	var txt10 = "";																			/* Xpath Informationstext 2015 */
    path = "/ESC/Contest[@Jahr='2015']/Informationstext"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt10 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Informationstext").innerHTML = txt10;
}

}

function DB2016(){																		/* Xpath-Funktion für den Zugriff auf die Datenbank 2016 */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        showResult(xhttp.responseXML);
    }
};
xhttp.open("GET", "../XML und Schemata/ESC.xml", true);
xhttp.send(); 

function showResult(xml) {
    var txt1 = "";																			/* Xpath Land 2016 */
    path = "/ESC/Contest[@Jahr='2016']/Teilnehmer/Land"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt1 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Land").innerHTML = txt1;
	
	var txt2 = "";																			/* Xpath Vertreter 2016 */
    path = "/ESC/Contest[@Jahr='2016']/Teilnehmer/Vertreter"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt2 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Vertreter").innerHTML = txt2;
	
	var txt3 = "";																			/* Xpath Song 2016 */
    path = "/ESC/Contest[@Jahr='2016']/Teilnehmer/Song"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt3 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Song").innerHTML = txt3;

	var txt5 = "";																			/* Xpath grobePlatzierung 2016 */
    path = "/ESC/Contest[@Jahr='2016']/Teilnehmer/grobePlatzierung"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt5 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("grobePltz").innerHTML = txt5;
	
	var txt6 = "";																			/* Xpath genauePlatzierung 2016 */
    path = "/ESC/Contest[@Jahr='2016']/Teilnehmer/genauePlatzierung"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt6 += result.childNodes[0].nodeValue + "<br>" + "<hr>";
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("genauePltz").innerHTML = txt6;
	
	var txt7 = "";																			/* Xpath Logo 2016 */
    path = "/ESC/Contest[@Jahr='2016']/Logo"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt7 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Logobild").src = txt7;
	
	var txt8 = "";																			/* Xpath Bühnenbild 2016 */
    path = "/ESC/Contest[@Jahr='2016']/Bühnenbild"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt8 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Bühnenbild").src = txt8;
	
	var txt9 = "";																			/* Xpath Titelbild 2016 */
    path = "/ESC/Contest[@Jahr='2016']/Titelbild"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt9 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Titelbild").src = txt9;
	
	var txt10 = "";																			/* Xpath Informationstext 2016 */
    path = "/ESC/Contest[@Jahr='2016']/Informationstext"
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt10 += result.childNodes[0].nodeValue;
            result = nodes.iterateNext();
        } 
    }
    document.getElementById("Informationstext").innerHTML = txt10;
}

}
