window._templateMocks = {
  "people-detailed.tmpl": "<% if (people.length) { %>\n  <% _.each(people, function(person) { %>\n  <li class=\"result\">\n    <h2><%= person.name %></h2>\n    <a class=\"btn btn-primary like\"><i class=\"icon-thumbs-up icon-white\"></i> Like</a>\n    <a class=\"btn btn-danger remove\"><i class=\"icon-remove icon-white\"></i> Remove</a>\n    <dl class=\"dl-horizontal\">\n      <dt class=\"company\">Company</dt>\n      <dd><%= person.company.name %></dd>\n      <dt class=\"email\">Email</dt>\n      <dd><%= person.email %></dd>\n    </dl>\n  </li>\n  <% }); %>\n<% } else { %>\n  <li class=\"no-results\">No results found.</li>\n<% } %>\n"
};