
const getHtml = (fileLink, id) => {
    fetch(fileLink)
        .then(response => response.text())
        .then(data => {
            console.log(data)
            document.getElementById(id).innerHTML = data;
        });

}
getHtml('./nav.html', 'nav');
getHtml('./about.html', 'about')
getHtml('./project.html', 'project')

// 기간
// 설명