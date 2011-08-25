a lightweight autosuggest plugin for usage on goingslowly.com

initialization options

    $('#autosuggest').autosuggest(
    {
      data:{}, // describe this
      delay:400, // describe this
      minChars:3, // describe this
      key:'name', // describe this
      val:'value', // describe this
      prefix:'prefix', // describe this
      offsetTop:20, // describe this
      offsetLeft:0, // describe this
      logger:function(q){}, // describe this
      highlight:true // describe this
    };
    
sample JSON data

    var blog_entries =
    [
      {
        value:'http://www.blog.com/blog-entry-one/',
        key:'My First Blog Entry'
      },
      {
        value:'http://www.blog.com/blog-entry-two/',
        key:'Blog Entry Number Two'
      },
      {
        value:'http://www.blog.com/blog-entry-three/',
        key:'Title of Third Blog'
      },
      {
        value:'http://www.blog.com/topic/blogs/',
        key:'Blogs'
        prefix:'Topic'
      }
    ];