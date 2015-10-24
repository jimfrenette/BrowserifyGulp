var $ = require('jquery');
var _ = require('lodash');
var setElementHtml = require('./element');
module.exports = function() {

    var module = {

        init: function() {

            var tmplSource = $('#tmpl-artist').html(),
                template;

            $.getJSON('http://responsiveresourcesgroup.com/chinook/api/artists').done(function(data) {
                if (data) {

                    template = _.template(tmplSource)({
                        data: data
                    });

                    $(".artist-list").html(template);

                    setElementHtml('#some-id', 'Done');
                }
            });
        }
    };

    return module.init();

};