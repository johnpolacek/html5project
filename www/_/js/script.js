var App = (function() {
    
    // Keep vars & functions private unless there is a reason to use in other
    // scripts running on the page. For example, to let another script
    // use getCookie(), move it inside the returned object closure.
    
    // Private Vars
    
    var appData = {};  // note: Recommend keeping data in DOM when appropriate
    
    
    // Private Functions
    
    //--------------------------------------
    //  EVENT HANDLING
    //--------------------------------------
    
    function setEvents() {
        $('.nav-button').on("click", {message: 'You just clicked '}, mainNavHandler);
    }
    
    function mainNavHandler(e) {
        e.preventDefault();
        alert(e.data.message+$(this).text());
    }
    
    
    //--------------------------------------
    //  FORM HANDLING
    //--------------------------------------
    
    function handleFormSubmit(data) {
        
    }
    
    function validateEmail(emailTest) {
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        if (filter.test(emailTest) && emailTest.length < 99)
            return true;
        else
            return false;
    }
    
    function validateName(nameTest) {
        var filter = /[^a-z0-9\s]/gi;
        var valid = !(filter.test(nameTest));
        
        // at least 2 letters
        if (nameTest.length < 2)
            valid = false;
        
        // at least one letter character
        filter = /[a-z]/gi;
        if (!(filter.test(nameTest)))
            valid = false;
        
        // no extra spaces
        filter = /\s{2,}/g;
        if (filter.test(nameTest))
            valid = false;
        
        return valid;
    }

    
    //--------------------------------------
    //  COOKIES
    //--------------------------------------
    
    function getCookie(cookieName) {
        var i, x, y, cookies = document.cookie.split(';');
        var cookieValue = '';
        for (i = 0; i < cookies.length; i++)
        {
            x = cookies[i].substr(0, cookies[i].indexOf('='));
            y = cookies[i].substr(cookies[i].indexOf('=')+1);
            x = x.replace(/^\s+|\s+$/g,'');
            if (x == cookieName)
                cookieValue = unescape(y);
        }
        return cookieValue;
    }
    
    function setCookie(cookieName, value, expDays) {
        var expDate = new Date();
        expDate.setDate(expDate.getDate() + expDays);
        var cookieValue = escape(value) + ((expDays === null) ? '' : '; expires='+expDate.toUTCString());
        document.cookie = cookieName + '=' + cookieValue;
    }
    
    
    //--------------------------------------
    //  CLOSURE
    //--------------------------------------
    
    return {
        
        // create public vars / functions here, inside the closure
        
        init : function() {

            setEvents();
        }
    };

}());

$(function() {
    App.init();
});