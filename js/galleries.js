var categories = {};
var projects;
categoriesOrder = [];
function getCategoryName (category) {
    switch(category) {
        case "cat1":
          return "Wireframes"
        case "cat2":
          return "Websites"
        case "cat3":
          return "Mobile Applications"
        case "cat4":
          return "Presentations"
        case "cat5":
          return "Diagrams"
        case "cat6":
          return "Design Systems"
        default: console.log(category)
      }
}

function renderCategories() {
    // Add all tab
    $(".album-tab").append(`<a href="#album-all" class="is-active">All</a>`);
    $(".content-inner").append(`
        <div class="grid-album" id="album-all">
            <div class="grid-sizer"></div>
        </div>`);
    for (i in projects) {
        project = projects[i];
        if (!project.hide) {
            $(`#album-all`).append(`
            <div class="grid-item album-item">
                <a href="gallery-single.html?project=${project.id}">
                    <div class="album-thumb">
                        <img src="${project.folder}${project.images[0].replace('.png','-thumbnail.png').replace('.jpg','-thumbnail.jpg').replace('.PNG','-thumbnail.PNG').replace('.JPG','-thumbnail.JPG')}" 
                        class="" alt="${!project.name.includes(".") ? project.name : project.name.split(".")[1]}">
                    </div>
                    <div class="album-name">${!project.name.includes(".") ? project.name : project.name.split(".")[1]}</div>
                </a>
            </div>`);
        }
    }

    // add categories tabs
    Object.entries(categories).forEach(([key, value]) => {
        $(".album-tab").append(`<a href="#album-${key}" >${getCategoryName(key)}</a>`);
        $(".content-inner").append(`
        <div class="grid-album" id="album-${key}">
            <div class="grid-sizer"></div>
        </div>`)

        for (p in value) {
            project = value[p]; 
            if (!project.hide) {
                $(`#album-${key}`).append(`
                <div class="grid-item album-item">
                    <a href="gallery-single.html?project=${project.id}">
                        <div class="album-thumb">
                            <img src="${project.folder}${project.images[0].replace('.png','-thumbnail.png').replace('.jpg','-thumbnail.jpg').replace('.PNG','-thumbnail.PNG').replace('.JPG','-thumbnail.JPG')}" 
                            class="" alt="${!project.name.includes(".") ? project.name : project.name.split(".")[1]}">
                        </div>
                        <div class="album-name">${!project.name.includes(".") ? project.name : project.name.split(".")[1]}</div>
                    </a>
                </div>`);
            }
        }   
    });

    // click on first tab
    setTimeout(() => {
        $(`.album-tab a:first`).click();
    }, 100);
}

function renderProject(p){
    project = projects[p];
    // $(".grid-item").remove();
    for (i in project.images) {
        $(".grid-single").append(`
            <div class="grid-item"><a href="${project.folder}${project.images[i]}" data-effect="mfp-zoom-in"><img class="b-lazy" src="${project.folder}${project.images[i].replace('.png','-thumbnail.png').replace('.jpg','-thumbnail.jpg').replace('.PNG','-thumbnail.PNG').replace('.JPG','-thumbnail.JPG')}" alt="${project.images[i]}"></a></div>
        `);    
    } 
    $(".title").text(!project.name.includes(".") ? project.name : project.name.split(".")[1]);
    $(".subtitle").find("p").text(project.desc ? project.desc : "");
    $("#goNext").attr("href", goNext(p));
    $("#goPrevious").attr("href", goPrevious(p));
}

function goNext (p) {
    n = (Number(p) +1)
    if (n>=projects.length) n=0;
    return "gallery-single.html?project="+n;
}

function goPrevious (p) {
    n = Number(p) - 1;
    if (n < 0) n = projects.length -1
    return "gallery-single.html?project="+n;

}

function sortProjects() {
    projects.sort(function (a, b) {
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1;
        }
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1;
        }
        return 0;
    });
}

function loadScript(scriptName) {
    element = document.createElement("script");
    element.src = scriptName;
    document.body.appendChild(element);
}

function loadAllScripts() {
    loadScript("js/swiper-bundle.min.js");
    loadScript("js/wow.min.js");
    loadScript("js/masonry.pkgd.min.js");
    loadScript("js/imagesloaded.pkgd.min.js");
    loadScript("js/magnific-popup.min.js");
    loadScript("js/blazy.min.js");
    loadScript("js/parazoom.min.js");
    loadScript("js/script.js");
}

$.getJSON('projects.json', function(data) {  
    projects = data; 
    sortProjects();
    for (p in projects) {
        project = projects[p]
        key = project.category;
        if (!categories[key]) categories[key] = []
        project.id = p;
        categories[key].push(project);
    }
    // console.log(categories);
    if (window.location.href.indexOf("gallery.html") > -1)  renderCategories();
    else {
        const urlParams = new URLSearchParams(window.location.search);
        const p  = urlParams.get('project');
        if (p) renderProject(p);
    } 
    loadAllScripts();
});
