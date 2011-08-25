# a lightweight jQuery plugin for autosuggest searching on goingslowly.com

### initialization options
    $('#autosuggest').autosuggest(
    {
      data:{}, // JSON data to search
      delaySearch:100, // delay from last typed letter before searching
      delayClose:1500, // delay to close results after mouseout
      minChars:3, // minimum number of characters required to start search
      key:'name', // data object property name for field to search
      val:'url', // data object property name for url of hit
      prefix:'prefix', // data object property name for prefixed hits
                       // this should be placed at the end of the object
                       // so they display first
      offsetTop:0, // offset placement of results from top
      offsetLeft:0, // offset placement of results from left
      highlight:true // true of matching portion of word should be highlighted
    };
    
### sample JSON data
    var blog_entries =
    [
      {
        name:'My First Blog Entry',
        url:'http://www.blog.com/blog-entry-one/'
      },
      {
        name:'Blog Entry Number Two',
        url:'http://www.blog.com/blog-entry-two/'
      },
      {
        name:'Title of Third Blog',
        url:'http://www.blog.com/blog-entry-three/'
      },
      {
        name:'Blogs',
        url:'http://www.blog.com/topic/blogs/',
        prefix:'Topic:'
      }
    ];
