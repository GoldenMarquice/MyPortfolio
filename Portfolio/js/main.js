let projects;

fetch('./data/projects.json')
    .then(response => response.json())
    .then(json =>{
        projects = json;

    });
