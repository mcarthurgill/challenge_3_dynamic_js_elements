$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    $('.add').on("click", add);
    $('#todo').on("click", '.delete' , remove);
    $('#todo').on("click", '.complete', complete);
  }

  function add(e) {
    todo_object = buildTodo($('.toolbox').find('input').val());
    $('.todo_list').append(todo_object);
  }

  function remove(e) {
    $(this).closest('.todo').fadeOut();
  }

  function complete(e) {
    $(this).closest('li').fadeOut();
  }


  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  

  bindEvents();
});
