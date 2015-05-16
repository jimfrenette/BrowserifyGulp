module.exports = function() {
    //IIFE    
    (function () {

        var tmplSource = $('#tmpl-artist').html(),
            template;
    
        $.getJSON('http://responsiveresourcesgroup.com/chinook/api/artists').done(function(data) {
            if (data) {
    
                template = _.template(tmplSource)({
                    data: data
                });
    
                $(".artist-list").html(template);
            }
        });

    })();

};