function getArticleGenerator(articles) {
    let arr = Array.from(articles);

    return () => {
        if (!arr.length) {
            return;
        }

        let article = document.createElement('article');
        article.appendChild(document.createTextNode(arr.shift()));
        document.getElementById('content').appendChild(article);
    }
}
