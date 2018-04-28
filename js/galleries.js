// GALLERY 1
jQuery('#gallery1').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/SP/0_0_splash.png',
            'thumb': 'images/SP/0_0_splash.png',
            'subHtml': 'Splash'
        }, {
            'src': 'images/SP/0_2_create_user.png',
            'thumb': 'images/SP/0_2_create_user.png',
            'subHtml': "Registration"
        }, {
            'src': 'images/SP/0_3_login.png',
            'thumb': 'images/SP/0_3_login.png',
            'subHtml': 'Login'
        }, {
            'src': 'images/SP/0_4_forgot_password.png',
            'thumb': 'images/SP/0_4_forgot_password.png',
            'subHtml': "Forget password"
        }, {
            'src': 'images/SP/1_home.png',
            'thumb': 'images/SP/1_home.png',
            'subHtml': "Home"
        }, {
            'src': 'images/SP/2_2_sweep_qualified.png',
            'thumb': 'images/SP/2_2_sweep_qualified.png',
            'subHtml': 'Sweep qualified'
        }, {
            'src': 'images/SP/2_4_sweep_not_qualified.png',
            'thumb': 'images/SP/2_4_sweep_not_qualified.png',
            'subHtml': "Sweep not qualified"
        }, {
            'src': 'images/SP/3_2_install_ready.png',
            'thumb': 'images/SP/3_2_install_ready.png',
            'subHtml': "Install ready"
        }, {
            'src': 'images/SP/3_3_install_not_ready.png',
            'thumb': 'images/SP/3_3_install_not_ready.png',
            'subHtml': 'Install not ready'
        }, {
            'src': 'images/SP/4_2_maintenance_install.png',
            'thumb': 'images/SP/4_2_maintenance_install.png',
            'subHtml': "Maintenance install"
        }, {
            'src': 'images/SP/4_3_maintenance_replace.png',
            'thumb': 'images/SP/4_3_maintenance_replace.png',
            'subHtml': "Maintenance replace"
        }, {
            'src': 'images/SP/6_1_projects_listing.png',
            'thumb': 'images/SP/6_1_projects_listing.png',
            'subHtml': 'Projects listing'
        }, {
            'src': 'images/SP/6_2_projects_listing_filter.png',
            'thumb': 'images/SP/6_2_projects_listing_filter.png',
            'subHtml': "Projects listing filter"
        }, {
            'src': 'images/SP/6_3_project_info.png',
            'thumb': 'images/SP/6_3_project_info.png',
            'subHtml': "Project info"
        }, {
            'src': 'images/SP/7_1_tasks_listing.png',
            'thumb': 'images/SP/7_1_tasks_listing.png',
            'subHtml': 'Tasks listing'
        }, {
            'src': 'images/SP/7_2_create_task_A.png',
            'thumb': 'images/SP/7_2_create_task_A.png',
            'subHtml': "Create task A"
        }, {
            'src': 'images/SP/7_3_create_task_C.png',
            'thumb': 'images/SP/7_3_create_task_C.png',
            'subHtml': "Create task C"
        }, {
            'src': 'images/SP/7_4_create_task_O.png',
            'thumb': 'images/SP/7_4_create_task_O.png',
            'subHtml': 'Create task O'
        }, {
            'src': 'images/SP/7_5_tasks_listing_filter.png',
            'thumb': 'images/SP/7_5_tasks_listing_filter.png',
            'subHtml': "Tasks listing filter"
        }, {
            'src': 'images/SP/8_1_buildings_listing.png',
            'thumb': 'images/SP/8_1_buildings_listing.png',
            'subHtml': "Buildings listing"
        }, {
            'src': 'images/SP/8_2_buildings_listing_filter.png',
            'thumb': 'images/SP/8_2_buildings_listing_filter.png',
            'subHtml': 'Buildings listing filter'
        }, {
            'src': 'images/SP/8_3_building_info.png',
            'thumb': 'images/SP/8_3_building_info.png',
            'subHtml': "Building info"
        }, {
            'src': 'images/SP/9_1_users.png',
            'thumb': 'images/SP/9_1_users.png',
            'subHtml': "Users"
        }, {
            'src': 'images/SP/9_2_user_profile.png',
            'thumb': 'images/SP/9_2_user_profile.png',
            'subHtml': 'User profile'
        }, {
            'src': 'images/SP/10_notifications.png',
            'thumb': 'images/SP/10_notifications.png',
            'subHtml': "notifications"
        }, {
            'src': 'images/SP/11_1_messages_center.png',
            'thumb': 'images/SP/11_1_messages_center.png',
            'subHtml': "Messages center"
        }, {
            'src': 'images/SP/11_2_send_message.png',
            'thumb': 'images/SP/11_2_send_message.png',
            'subHtml': 'Send message'
        }, {
            'src': 'images/SP/11_2_single_message.png',
            'thumb': 'images/SP/11_2_single_message.png',
            'subHtml': "Single message"
        }, {
            'src': 'images/SP/12_3_reports_support.png',
            'thumb': 'images/SP/12_3_reports_support.png',
            'subHtml': "Reports support"
        }, {
            'src': 'images/SP/12_4_reports_support_single.png',
            'thumb': 'images/SP/12_4_reports_support_single.png',
            'subHtml': 'Reports support single'
        }, {
            'src': 'images/SP/12_5_reports_support_new.png',
            'thumb': 'images/SP/12_5_reports_support_new.png',
            'subHtml': "Reports support new"
        }, {
            'src': 'images/SP/Screenshot_2016-09-25-10-56-06.png',
            'thumb': 'images/SP/Screenshot_2016-09-25-10-56-06.png',
            'subHtml': "Update location"
        }, {
            'src': 'images/SP/Screenshot_2016-09-25-10-59-40.png',
            'thumb': 'images/SP/Screenshot_2016-09-25-10-59-40.png',
            'subHtml': "Add task"
        }, {
            'src': 'images/SP/Screenshot_2016-09-25-10-59-45.png',
            'thumb': 'images/SP/Screenshot_2016-09-25-10-59-45.png',
            'subHtml': "Add task"
        }]
    })
});

// GALLERY 6
jQuery('#gallery6').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplayControls: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Videos
        dynamicEl: [
            {
                "src": "http://vimeo.com/70301553",
                "subHtml": "Vimeo"
            },
            { // You Tube videos work only on a server.
                "src": "http://www.youtube.com/embed/efVWyPNd3xw",
                "subHtml": "You Tube"
            }
        ]
    });
});

// GALLERY 5
jQuery('#gallery5').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: false,
        pause: 5000,
        thumbnail: false,
        download: false,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/p5.jpg',
            'thumb': 'images/photos/p5-s.jpg',
            'subHtml': 'Quae expetendis'
        }, {
            'src': 'images/photos/p2.jpg',
            'thumb': 'images/photos/p2-s.jpg',
            'subHtml': "Lorem ipsum dolor"
        }, {
            'src': 'images/photos/p4.jpg',
            'thumb': 'images/photos/p4-s.jpg',
            'subHtml': "Legam a expetendis"
        }, {
            'src': 'images/photos/p3.jpg',
            'thumb': 'images/photos/p3-s.jpg',
            'subHtml': "Magna quamquam"
        }]
    })
});

// GALLERY 4
jQuery('#gallery4').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/p2.jpg',
            'thumb': 'images/photos/p2-s.jpg',
            'subHtml': 'Tamen excepteur'
        }, {
            'src': 'images/photos/p5.jpg',
            'thumb': 'images/photos/p5-s.jpg',
            'subHtml': "Iudicem admodum"
        }, {
            'src': 'images/photos/p4.jpg',
            'thumb': 'images/photos/p4-s.jpg',
            'subHtml': "Enim pariatur"
        }]
    })
});

// GALLERY 3
jQuery('#gallery3').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/Logos/loginLogo.png',
            'thumb': 'images/Logos/loginLogo.png',
            'subHtml': 'Seven pounds'
        }, {
            'src': 'images/Logos/SocialEducation.png',
            'thumb': 'images/Logos/SocialEducation.png',
            'subHtml': "Social education"
        }, {
            'src': 'images/Logos/logo10.png',
            'thumb': 'images/Logos/logo10.png',
            'subHtml': 'Seven pounds'
        }, {
            'src': 'images/Logos/logo8.png',
            'thumb': 'images/Logos/logo8.png',
            'subHtml': "eCommerce"
        }, {
            'src': 'images/Logos/logo7.png',
            'thumb': 'images/Logos/logo7.png',
            'subHtml': "Seven pounds"
        }, {
            'src': 'images/Logos/logo6.png',
            'thumb': 'images/Logos/logo6.png',
            'subHtml': 'Seven pounds'
        }, {
            'src': 'images/Logos/logo5.png',
            'thumb': 'images/Logos/logo5.png',
            'subHtml': "Seven pounds"
        }, {
            'src': 'images/Logos/logo4.png',
            'thumb': 'images/Logos/logo4.png',
            'subHtml': "Seven pounds"
        }, {
            'src': 'images/Logos/logo.png',
            'thumb': 'images/Logos/logo.png',
            'subHtml': 'Seven pounds'
        }, {
            'src': 'images/Logos/logo2.png',
            'thumb': 'images/Logos/logo2.png',
            'subHtml': "Seven pounds"
        }, {
            'src': 'images/Logos/logo1.png',
            'thumb': 'images/Logos/logo1.png',
            'subHtml': "Seven pounds"
        }]
    })
});

// GALLERY 2
jQuery('#gallery2').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/Images/Argan-oil-cover-booklet.jpg',
            'thumb': 'images/Images/Argan-oil-cover-booklet.jpg',
            'subHtml': 'Booklet cover'
        }, {
            'src': 'images/Images/Argan oil social media post.jpg',
            'thumb': 'images/Images/Argan oil social media post.jpg',
            'subHtml': "Argan oil"
        }, {
            'src': 'images/Images/natural ingredients post for skin care to introduce the company Groupe batteur  now in Egypt.jpg',
            'thumb': 'images/Images/natural ingredients post for skin care to introduce the company Groupe batteur  now in Egypt.jpg',
            'subHtml': 'Natural ingredients'
        }, {
            'src': 'images/Images/natural ingredients post for skin care to introduce the company Groupe batteur  now in Egypt2.jpg',
            'thumb': 'images/Images/natural ingredients post for skin care to introduce the company Groupe batteur  now in Egypt2.jpg',
            'subHtml': "Natural ingredients"
        }, {
            'src': 'images/Images/saudiii.png',
            'thumb': 'images/Images/saudiii.png',
            'subHtml': "Online Education"
        }, {
            'src': 'images/Images/selvana.Arabjobs2.png',
            'thumb': 'images/Images/selvana.Arabjobs2.png',
            'subHtml': 'Arab jobs'
        }, {
            'src': 'images/Images/IMG-20160628-WA0006.jpg',
            'thumb': 'images/Images/IMG-20160628-WA0006.jpg',
            'subHtml': "Arab jobs"
        }, {
            'src': 'images/Images/New Mockup 1.png',
            'thumb': 'images/Images/New Mockup 1.png',
            'subHtml': "Login"
        }, {
            'src': 'images/Images/drug.png',
            'thumb': 'images/Images/drug.png',
            'subHtml': 'Profile'
        }]
    })
});