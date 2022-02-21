async function apiCall(url) {

    try {
        let res = await fetch(url);

        let data = await res.json();
        console.log('data:', data);

        return data;

    } catch (error) {
        console.log('error:', error)
        
    }
    //add api call logic here


}


function appendArticles(articles, main) {

    articles.forEach(element => {
        
        let div = document.createElement("div");
        div.id = "news";

        div.addEventListener("click", () =>{

            localStorage.setItem("article",JSON.stringify(element));

            window.location.href = "news.html";

        })

        let title = document.createElement("h2");
        title.innerHTML = element.title;

        let description = document.createElement("h3");
        description.innerHTML = element.description;

        let images = document.createElement("img");
        images.src = element.urlToImage;

        div.append(title,description,images);

        main.append(div);


    });
    //add append logic here

}

export { apiCall, appendArticles }