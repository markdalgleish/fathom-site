/* Thanks John Resig */
function addEvent( obj, type, fn ) {
  if ( obj.attachEvent ) {
    obj['e'+type+fn] = fn;
    obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
    obj.attachEvent( 'on'+type, obj[type+fn] );
  } else
    obj.addEventListener( type, fn, false );
}

addEvent(document.getElementById("github"), 'click', function(){
	pageTracker._trackEvent("fathom", "Fork", "Ribbon");
});

addEvent(document.getElementById("demobutton-top"), 'click', function(){
	pageTracker._trackEvent("fathom", "Demo", "ButtonTop");
});

addEvent(document.getElementById("downloadbutton-top"), 'click', function(){
	pageTracker._trackEvent("fathom", "Download", "ButtonTop");
});

addEvent(document.getElementById("githubbutton-top"), 'click', function(){
	pageTracker._trackEvent("fathom", "Fork", "ButtonTop");
});

addEvent(document.getElementById("demobutton-bottom"), 'click', function(){
	pageTracker._trackEvent("fathom", "Demo", "ButtonBottom");
});

addEvent(document.getElementById("downloadbutton-bottom"), 'click', function(){
	pageTracker._trackEvent("fathom", "Download", "ButtonBottom");
});

addEvent(document.getElementById("githubbutton-bottom"), 'click', function(){
	pageTracker._trackEvent("fathom", "Fork", "ButtonBottom");
});

addEvent(document.getElementById("blog"), 'click', function(){
	pageTracker._trackEvent("fathom", "Blog", "Footer");
});

addEvent(document.getElementById("license"), 'click', function(){
	pageTracker._trackEvent("fathom", "License", "Footer");
});

addEvent(document.getElementById("twitter"), 'click', function(){
	pageTracker._trackEvent("fathom", "Twitter", "Footer");
});