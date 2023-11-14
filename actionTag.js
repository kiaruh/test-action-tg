
// Function to be executed when the button is clicked
function actionToPurchase() {
    var _tvq = window._tvq = window._tvq || [];
   (function() {
       var session = {
           'user': '<USERREF>'
       };
       var actionname = 'kpi1';
       var action = {
           '': '', //USING THE CONSOLE LOG PATH
       };
       var u = (("https:" == document.location.protocol) ? "https://collector-25922.tvsquared.com/" : "http://collector-25922.tvsquared.com/");
       _tvq.push(['setSiteId', "TV-7245097272-1"]);
       _tvq.push(['setTrackerUrl', u + 'tv2track.php']);
       _tvq.push([function() {
           this.setCustomVariable(5, 'session', JSON2.stringify(session), 'visit')
       }]);
       _tvq.push([function() {
           this.setCustomVariable(5, actionname, JSON2.stringify(action), 'page')
       }]);
       _tvq.push(['trackPageView']);
       var d = document,
           g = d.createElement('script'),
           s = d.getElementsByTagName('script')[0];
       g.type = 'text/javascript';
       g.defer = true;
       g.async = true;
       g.src = u + 'tv2track.js';
       s.parentNode.insertBefore(g, s);
       console.log(document.location.href);//LOGGING THE PATH
       console.log('Buy button clicked')
   })();
}

 // Attach the function to the button's click event

document.getElementById('BuyButton').addEventListener('click',actionToPurchase);

