function solve() {
	//TODO
//Title value from the title input should be a heading 3 element <h3>;
//  Content text from the textarea element should be a paragraph <p>;
//  Both new created elements (h3 and p) should be appended to a new article element <article>;
//  The current article element should be appended to the section which has an id articles
// (#articles)
//  You should create new article element only if title and content are not empty
//  After the button is pressed you must clear the title value and text value

    let creatTitleElement = document.getElementById('createTitle');
    let creatContent = document.getElementById('createContent');

    let createTitleValue = creatTitleElement.value;
    let createContentValue = creatContent.value;

    if (createTitleValue && createContentValue){

        let titleElement = document.createElement('h3');
        titleElement.textContent = createTitleValue;

        let contentElement = document.createElement('p');
        contentElement.textContent = createContentValue;

        let articleElement = document.createElement('article');

        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);

        let articlesElement = document.getElementById('articles');

        articlesElement.appendChild(articleElement);


        creatTitleElement.value = '';
        creatContent.value = ''
    }
}