(function($)
{
  $.autosuggest = function(el, settings)
  {
     var base = this;

     base.el = $(el); // shorthand to called element
     base.el.data("autosuggest",base); // allow entry from dom

     // default state
     var state =
     {
       defer: false,
       last:'',
       loaded: false,
       results:false
     };

     // initialize autosuggest
     base.init = function()
     {
       base.settings = $.extend({},$.autosuggest.settings,settings);
       var s = base.settings;

       // bind keyup to input field
       base.el.bind('keyup',function()
       {
         if(state.defer) clearTimeout(state.defer);
         state.defer = setTimeout(function()
         {
           // get search term
           var q = base.el.val().toLowerCase();

           // run search
           base.search(q);
         },s.delay);
       });
       
       state.results = $('<ul class="as"></ul>');
       state.results.hover
       (
         function(){clearTimeout(state.closing);},
         function(){state.closing=setTimeout(base.close,2000)}
       );
       $('body').append(state.results);
     };

     base.close = function()
     {
       var s = base.settings;
       state.last='';
       state.results.fadeOut('fast');
     };

     base.search = function(q)
     {
       var s = base.settings;

       // skip scheduling a search for the same text
       if(state.last == q) return;
       if(q.length < s.minChars)
       {
         state.results.fadeOut('fast');
         return;
       }
       state.last = q;

       if(s.highlight)
       {
         var regx = new RegExp('(?![^&;]+;)(?!<[^<>]*)('+q+')(?![^<>]*>)(?![^&;]+;)','gi');
       }
       if(s.logger) s.logger(q);

       var match = html = [];
       
       var i = s.data.length;
       while(i--)
       {
         if(s.data[i][s.key].toLowerCase().search(q)!=-1)
         {
           var prefix = s.data[i][s.prefix]||'';
           var key = s.data[i][s.key];
           var val = s.data[i][s.val];
           if(s.highlight) key = key.replace(regx,"<em>$1</em>");
           html.push('<li><a href="'+val+'">'+prefix+''+key+'</a></li>');
         }
       }
       if(match.length)
       {
         var pos = base.el.offset();
         var list = $(html.join(''));
         state.results.css({top:pos.top+s.offsetTop,left:pos.left+s.offsetLeft})
                      .html(list)
                      .fadeIn('fast');
       }
     };

     base.init();
  };
  $.fn.autosuggest = function(s){return this.each(function(){(new $.autosuggest(this,s));});};

  $.autosuggest.settings =
  {
    data:{},
    delay:400,
    minChars:3,
    key:'name',
    val:'value',
    prefix:'prefix',
    offsetTop:20,
    offsetLeft:0,
    logger:function(q){},
    highlight:true
  };
})(jQuery);
