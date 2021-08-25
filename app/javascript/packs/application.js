// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.


require("jquery")
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("selectize")
require("components/post")

import "stylesheets/application";

$(document).on("turbolinks:load", function() {
    $('.post-category').selectize({
        create: function (input, callback){
            console.log(input, 'With call back')
            $.ajax({
                url: '/categories',
                type: "POST",
                data: { category: {name : input } },
                success: function(res) {
                    callback({value: res.id, text: res.name});
                }
            });
        },
        load: function (query, callback) {
            if (!query.length) return callback();
            $.ajax({
                url: '/categories?search=' +
                    encodeURIComponent(query),
                type: 'GET',
                error: function() {
                    callback();
                },
                success: function(res) {
                    callback(res.slice(0, 10));
                }
            });
        }
    });
});
