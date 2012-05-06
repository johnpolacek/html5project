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