semantic.icon = {};

// ready event
semantic.icon.ready = function() {

  // selector cache
  var
    $grid         = $('.ui.five.column.doubling.grid'),
    // alias
    handler
  ;

  // event handlers
  handler = {
    createTable: function() {
      var
        $grid = $(this),
        columnCount = 5
      ;
      $grid
        .find('.column:nth-child('+columnCount+'n+1)')
          .each(function() {
            var
              $group = $(this)
                .nextAll(':lt('+ (columnCount - 1) +')')
                .andSelf()
              ;
              $group.wrapAll('<div class="row"></div>');
              $group.filter('[data-content]').popup({
                position: 'top center',
                variation: 'large inverted',
                transition: 'fade up',
                delay: {
                  show: 200,
                  hide: 0
                }
              });
          })
          .end()
        .addClass('middle aligned equal height relaxed internally celled')
      ;
    }
  };

  $grid.each(handler.createTable);

};


// attach ready event
$(document)
  .ready(semantic.icon.ready)
;