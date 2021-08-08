projects = [];
pendingFolderCount = 0;
notProjects = [".DS_Store", ""];
i = -1;


function loadProjects(foldername, category) {
    incrementPendingFolderCount();
    $.ajax({
        url: foldername,
        success: function (foldersData) {
            //addRow("AdminDryclean","AdminDryclean",1,864,"864 B",1628262972,"8/6/21, 5:16:12 PM");
            folders = foldersData.matchAll(/addRow\("([\w\d\s-_\.]*)"*/g);
            for (folder of folders) {
                if (!notProjects.includes(folder[1])) {

                    i++;
                    projects[i] = {};
                    projects[i].name = folder[1];
                    projects[i].images = [];
                    projects[i].category = category;
                    projects[i].folder = foldername + projects[i].name + '/'
                    incrementPendingFolderCount();
                    $.ajax({
                        url: projects[i].folder,
                        indexValue: i,
                        success: function (imagesData) {
                            images = imagesData.matchAll(/addRow\("([\w\d\s-_\.\(\)&\[\]$]*)"*/g);
                            j = 0;
                            for (image of images) {
                                if (!notProjects.includes(image[1])) {
                                    projects[this.indexValue].images[j++] = image[1];
                                }
                            }
                            deccrementPendingFolderCount();
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {deccrementPendingFolderCount();}
                    });
                }
            }
            deccrementPendingFolderCount();
            // console.log(projects);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {deccrementPendingFolderCount();}
    });
}

function loadScript(scriptName) {
    element = document.createElement("script");
    element.src = scriptName;
    document.body.appendChild(element);
}

function loadAllScripts() {
    //    loadScript('js/nerveslider.min.js');
    loadScript('js/wookmark.js');
    loadScript('js/portfolio-trigger.js');
    //   loadScript('js/jquery.tooltipster.min.js');
    //   loadScript('js/quovolver.js');
    //loadScript('js/scrollbar.js');
    loadScript('js/lightgallery.js');
    //   loadScript('js/googlemap.js');
    //   loadScript('js/home-custom.js');
    //   loadScript('js/sendmail.js');
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

    for (index = 0; index < projects.length; index++) {
        projects[index].id = index;
    }
    console.log(projects);
}

function incrementPendingFolderCount() {
    pendingFolderCount++;
    console.log('inc');
}

function deccrementPendingFolderCount() {
    pendingFolderCount--;
    console.log('dec');
}

function loadProjectsfromFile() {
    incrementPendingFolderCount();
    $.getJSON('projects.json', function(data) {         
        projects = data;
    }).always(function() { deccrementPendingFolderCount(); });;
}

//loadProjects('images/', 'all');
// loadProjects('projects/wireframes/', 'cat1');
// loadProjects('projects/websites/', 'cat2');
// loadProjects('projects/mobileApplications/', 'cat3');
// loadProjects('projects/designs/', 'cat4');
loadProjectsfromFile();
interval = setInterval(() => {
        console.log(pendingFolderCount);
        jQuery("body").find('#site-loading').fadeIn(500);
        if (pendingFolderCount === 0) {
           console.log('count is zero');
           console.log(JSON.stringify(projects));   
           clearInterval(interval);
           console.log('continue');
            jQuery("body").find('#site-loading').fadeOut(500);
            sortProjects();
            for (project of projects) {
                if (project.images.length > 0) {
                    //console.log("project name: ", project.name);
                    $("#cv-portfolio").append(`
            <li data-filter-class='["all","${project.category}"]'>
                <figure>
                    <a id="gallery${project.id}" href="#" class="cvgrid-img">
                        <img src="${project.folder}${project.images[0]}" alt="" />
                    </a>
                    <figcaption>
                        <div class="cvgrid-title">${!project.name.includes(".") ? project.name : project.name.split(".")[1]}</div>
                    </figcaption>
                </figure>
            </li>
            `);
                }
            }

            loadAllScripts();

            for (project of projects) {
                if (project.images.length > 0) {
                    jQuery('#gallery' + project.id).on('click', function (e) {
                        "use strict";
                        e.preventDefault();
                        project = projects[+e.currentTarget.id.replace('gallery', '')];
                        console.log("gallery: ", +e.currentTarget.id.replace('gallery', ''));
                        console.log("project: ", project);
                        if (project.images[0].includes('link$')) {
                            window.location.href = project.images[0].replace('link$', 'http://');
                        } else {
                            var galleryimages = [];
                            for (let image of project.images) {
                                galleryimages.push({
                                    'src': `${project.folder}${image}`,
                                    'thumb': `${project.folder}${image}`,
                                    'subHtml': `${image.split(".")[0]}`
                                });
                            }
                            jQuery(this).lightGallery({
                                dynamic: true,
                                mode: 'lg-slide-vertical',
                                zoom: true,
                                fullScreen: true,
                                autoplay: false,
                                thumbnail: false,
                                download: true,
                                counter: true,
                                // Images   
                                dynamicEl: galleryimages
                            })
                        }
                    });
                }
            }
    }
}, 10);