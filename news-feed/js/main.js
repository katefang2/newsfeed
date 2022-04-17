console.log('it wotks')
// The url that will retrieve the data.
// Change the query to reflect the kinds of headlines you're looking to present
// See https://news.wwworkshop.org for examples
// var apiQuery = 'https://news.wwworkshop.org/top-headlines?country=ca'
// var apiQuery = 'https://news.wwworkshop.org/top-headlines?country=ca'

// // Use what's the <template> element in index.html as the template
// var template = $('#template').html()

// Use jQuery to get the data
// $.get(apiQuery, function (data) {
//   // For every article we get back from news.wwworkshop.org perform the following function
//   data.articles.forEach(function (article) {
//     // Use the template in from line 6 and insert the article data
//     var element = eval('`' + template + '`')
//     // Add the article to the div with the class of article-feed
//     $('.articles-feed').append(element)
//   })
// })

$.get('https://news.wwworkshop.org/everything?q=microsoft',function (data){
  console.log(data.articles)
     data.articles.forEach((article) => {
       $ ('.articles-feed').append(`
       <article class="article">
      <div class="article-image">
  
        <img src="${article.urlToImage ? article.urlToImage : 'images/placeholder.png'}" alt="">
      </div>
      <header>
        <h1 class="article-title">${article.title}</h1>
   
        <h2 class="article-author">${article.author}</h2>
  
        <h3 class="article-source">${article.source.name}</h3>
      </header>
      <div class="content">
        <p>${article.content}</p>
      </div>
      
      
     

      <a href="${article.url}" target="_blank" class="article-link">Read more</a>
    </article>
       
       `)
     })
 })

 $('.color-picker').on('input',function(event){
  $('.circle').css('background', $('.color-picker').val() )
 })

 $('.background-color').on('input',function(event){
  $('body').css('background', $('.background-color').val() )
 })
