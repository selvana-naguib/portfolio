// GALLERY 1
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
jQuery('#gallery20').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: false,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/DrycleanWireframes/1-Home.png',
            'thumb': 'images/DrycleanWireframes/1-Home.png',
            'subHtml': 'Home'
        }, {
            'src': 'images/DrycleanWireframes/2-Services.png',
            'thumb': 'images/DrycleanWireframes/2-Services.png',
            'subHtml': "Services"
        }, {
            'src': 'images/DrycleanWireframes/3-FAQs.png',
            'thumb': 'images/DrycleanWireframes/3-FAQs.png',
            'subHtml': "FAQs"
        }, {
            'src': 'images/DrycleanWireframes/4-About us.png',
            'thumb': 'images/DrycleanWireframes/4-About us.png',
            'subHtml': 'About us'
        }, {
            'src': 'images/DrycleanWireframes/5-login popup.png',
            'thumb': 'images/DrycleanWireframes/5-login popup.png',
            'subHtml': "login popup"
        }, {
            'src': 'images/DrycleanWireframes/6-registration _C.png',
            'thumb': 'images/DrycleanWireframes/6-registration .png',
            'subHtml': "registration "
        }, {
            'src': 'images/DrycleanWireframes/7-Verification code.png',
            'thumb': 'images/DrycleanWireframes/7-Verification code.png',
            'subHtml': 'Verification code'
        }, {
            'src': 'images/DrycleanWireframes/8-Verified code.png',
            'thumb': 'images/DrycleanWireframes/8-Verified code.png',
            'subHtml': "Verified code"
        }, {
            'src': 'images/DrycleanWireframes/9-order(service-package).png',
            'thumb': 'images/DrycleanWireframes/9-order(service-package).png',
            'subHtml': "Order(service-package)"
        }, {
            'src': 'images/DrycleanWireframes/10-order(order-type).png',
            'thumb': 'images/DrycleanWireframes/10-order(order-type).png',
            'subHtml': 'Order(order-type)'
        }, {
            'src': 'images/DrycleanWireframes/11A-order(service of laundry bag order).png',
            'thumb': 'images/DrycleanWireframes/11A-order(service of laundry bag order).png',
            'subHtml': "Order(service of laundry bag order)"
        }, {
            'src': 'images/DrycleanWireframes/11B-order(order-type_choose-items_).png',
            'thumb': 'images/DrycleanWireframes/11B-order(order-type_choose-items_).png',
            'subHtml': "Order(order-type_choose-items_)"
        }, {
            'src': 'images/DrycleanWireframes/12-order(service of choose items order).png',
            'thumb': 'images/DrycleanWireframes/12-order(service of choose items order).png',
            'subHtml': 'Order(service of choose items order)'
        }, {
            'src': 'images/DrycleanWireframes/13-order(order-type_choose-items_ & summary).png',
            'thumb': 'images/DrycleanWireframes/13-order(order-type_choose-items_ & summary).png',
            'subHtml': "Order(order-type_choose-items_ & summary)"
        }, {
            'src': 'images/DrycleanWireframes/14-order(time).png',
            'thumb': 'images/DrycleanWireframes/14-order(time).png',
            'subHtml': "Order(time)"
        }, {
            'src': 'images/DrycleanWireframes/15-order(confirmation).png',
            'thumb': 'images/DrycleanWireframes/15-order(confirmation).png',
            'subHtml': 'Order(confirmation)'
        }, {
            'src': 'images/DrycleanWireframes/16-Add address.png',
            'thumb': 'images/DrycleanWireframes/16-Add address.png',
            'subHtml': "Add address"
        }, {
            'src': 'images/DrycleanWireframes/17-order(Address added).png',
            'thumb': 'images/DrycleanWireframes/17-order(Address added).png',
            'subHtml': "Order(Address added)"
        }, {
            'src': 'images/DrycleanWireframes/18-order(confirmed).png',
            'thumb': 'images/DrycleanWireframes/18-order(confirmed).png',
            'subHtml': 'Order(confirmed)'
        }, {
            'src': 'images/DrycleanWireframes/19-Account.png',
            'thumb': 'images/DrycleanWireframes/19-Account.png',
            'subHtml': "Account"
        }, {
            'src': 'images/DrycleanWireframes/20-Account with collapsed information(recent-order).png',
            'thumb': 'images/DrycleanWireframes/20-Account with collapsed information(recent-order).png',
            'subHtml': "Account with collapsed information(recent-order)"
        }, {
            'src': 'images/DrycleanWireframes/21-Account with collapsed information (past-orders).png',
            'thumb': 'images/DrycleanWireframes/21-Account with collapsed information (past-orders).png',
            'subHtml': "Account with collapsed information (past-orders)"
        }, {
            'src': 'images/DrycleanWireframes/22-Edit fields.png',
            'thumb': 'images/DrycleanWireframes/22-Edit fields.png',
            'subHtml': "Edit fields"
        }]
    })
});
jQuery('#gallery21').on('click', function (e) {
    "use strict";
    e.preventDefault();
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
        dynamicEl: [{
            'src': 'images/LandingPageApplication/1-Home.png',
            'thumb': 'images/LandingPageApplication/1-Home.png',
            'subHtml': 'Home'
        }, {
            'src': 'images/LandingPageApplication/2-Services.png',
            'thumb': 'images/LandingPageApplication/2-Services.png',
            'subHtml': 'Services'
        }, {
           'src': 'images/LandingPageApplication/3-FAQs.png',
            'thumb': 'images/LandingPageApplication/3-FAQs.png',
            'subHtml': '3-FAQs'
        }, {
            'src': 'images/LandingPageApplication/4-About us.png',
            'thumb': 'images/LandingPageApplication/4-About us.png',
            'subHtml': 'About us'
        }, {
           'src': 'images/LandingPageApplication/23-Reset Password.png',
            'thumb': 'images/LandingPageApplication/23-Reset Password.png',
            'subHtml': 'Reset Password'
         }]
    })
});
jQuery('#gallery22').on('click', function (e) {
    "use strict";
    e.preventDefault();
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
        dynamicEl: [{
            'src': 'images/Brochure/Artboard 1 copy 2.png',
            'thumb': 'images/Brochure/Artboard 1 copy 2.png',
            'subHtml': '01'
        }, {
            'src': 'images/Brochure/Artboard 1 copy 3.png',
            'thumb': 'images/Brochure/Artboard 1 copy 3.png',
            'subHtml': '02'
        },{
            'src': 'images/Brochure/Artboard 1 copy 4.png',
            'thumb': 'images/Brochure/Artboard 1 copy 4.png',
            'subHtml': '03'
        },{
            'src': 'images/Brochure/Artboard 1 copy 5.png',
            'thumb': 'images/Brochure/Artboard 1 copy 5.png',
            'subHtml': '04'
        },{
            'src': 'images/Brochure/Artboard 1 copy 6.png',
            'thumb': 'images/Brochure/Artboard 1 copy 6.png',
            'subHtml': '05'
        },{
            'src': 'images/Brochure/Artboard 1 copy 7.png',
            'thumb': 'images/Brochure/Artboard 1 copy 7.png',
            'subHtml': '06'
        },{
            'src': 'images/Brochure/Artboard 1 copy 8.png',
            'thumb': 'images/Brochure/Artboard 1 copy 8.png',
            'subHtml': '07'
        },{
            'src': 'images/Brochure/Artboard 1 copy 9.png',
            'thumb': 'images/Brochure/Artboard 1 copy 9.png',
            'subHtml': '08'
        },{
            'src': 'images/Brochure/Artboard 1 copy 10.png',
            'thumb': 'images/Brochure/Artboard 1 copy 10.png',
            'subHtml': '09'
        },{
            'src': 'images/Brochure/Artboard 1 copy 11.png',
            'thumb': 'images/Brochure/Artboard 1 copy 11.png',
            'subHtml': '10'
        }, {
           'src': 'images/Brochure/Artboard 1 copy 12.png',
            'thumb': 'images/Brochure/Artboard 1 copy 12.png',
            'subHtml': '11'
        }, {
            'src': 'images/Brochure/Artboard 1 copy.png',
            'thumb': 'images/Brochure/Artboard 1 copy.png',
            'subHtml': '12'
        }, {
           'src': 'images/Brochure/Artboard 1.png',
            'thumb': 'images/Brochure/Artboard 1.png',
            'subHtml': '13'
         }]
    })
});
jQuery('#gallery23').on('click', function (e) {
    "use strict";
    e.preventDefault();
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
        dynamicEl: [{
            'src': 'images/DrycleanMobileView/1.jpg',
            'thumb': 'images/DrycleanMobileView/1.jpg',
            'subHtml': '1'
        }, {
           'src': 'images/DrycleanMobileView/2.jpg',
            'thumb': 'images/DrycleanMobileView/2.jpg',
            'subHtml': '2'

        }]
    })
});
// GALLERY 6
jQuery('#gallery61').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: false,
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

// GALLERY 3
jQuery('#gallery3').on('click', function (e) {
    "use strict";
    e.preventDefault();
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
        dynamicEl: [{
            'src': 'images/AdminDryclean/02.png',
            'thumb': 'images/AdminDryclean/02.png',
            'subHtml': '1'
        }, {
           'src': 'images/AdminDryclean/03.png',
            'thumb': 'images/AdminDryclean/03.png',
            'subHtml': '2'
        }, {
            'src': 'images/AdminDryclean/04.png',
            'thumb': 'images/AdminDryclean/04.png',
            'subHtml': '3'
        }, {
           'src': 'images/AdminDryclean/05.png',
            'thumb': 'images/AdminDryclean/05.png',
            'subHtml': '4'
         }, {
           'src': 'images/AdminDryclean/06.png',
            'thumb': 'images/AdminDryclean/06.png',
            'subHtml': '5'
         }, {
           'src': 'images/AdminDryclean/07.png',
            'thumb': 'images/AdminDryclean/07.png',
            'subHtml': '6'
         }, {
           'src': 'images/AdminDryclean/08.png',
            'thumb': 'images/AdminDryclean/08.png',
            'subHtml': '7'
         }, {
           'src': 'images/AdminDryclean/09.png',
            'thumb': 'images/AdminDryclean/09.png',
            'subHtml': '8'
         }, {
           'src': 'images/AdminDryclean/10.png',
            'thumb': 'images/AdminDryclean/10.png',
            'subHtml': '9'
         }, {
           'src': 'images/AdminDryclean/11.png',
            'thumb': 'images/AdminDryclean/11.png',
            'subHtml': '10'
         }, {
           'src': 'images/AdminDryclean/12.png',
            'thumb': 'images/AdminDryclean/12.png',
            'subHtml': '11'
         }, {
           'src': 'images/AdminDryclean/13.png',
            'thumb': 'images/AdminDryclean/13.png',
            'subHtml': '12'
         }, {
           'src': 'images/AdminDryclean/14.png',
            'thumb': 'images/AdminDryclean/14.png',
            'subHtml': '13'
         }, {
           'src': 'images/AdminDryclean/15.png',
            'thumb': 'images/AdminDryclean/15.png',
            'subHtml': '14'
         }, {
           'src': 'images/AdminDryclean/16.png',
            'thumb': 'images/AdminDryclean/16.png',
            'subHtml': '15'
         }, {
           'src': 'images/AdminDryclean/17.png',
            'thumb': 'images/AdminDryclean/17.png',
            'subHtml': '16'
         }, {
           'src': 'images/AdminDryclean/18.png',
            'thumb': 'images/AdminDryclean/18.png',
            'subHtml': '17'
         }, {
           'src': 'images/AdminDryclean/19.png',
            'thumb': 'images/AdminDryclean/19.png',
            'subHtml': '18'
         }, {
           'src': 'images/AdminDryclean/20.png',
            'thumb': 'images/AdminDryclean/20.png',
            'subHtml': '19'
         }, {
           'src': 'images/AdminDryclean/21.png',
            'thumb': 'images/AdminDryclean/21.png',
            'subHtml': '20'
         }, {
           'src': 'images/AdminDryclean/22.png',
            'thumb': 'images/AdminDryclean/22.png',
            'subHtml': '21'
         }, {
           'src': 'images/AdminDryclean/23.png',
            'thumb': 'images/AdminDryclean/23.png',
            'subHtml': '22'
         }, {
           'src': 'images/AdminDryclean/24.png',
            'thumb': 'images/AdminDryclean/24.png',
            'subHtml': '23'
         }, {
           'src': 'images/AdminDryclean/25.png',
            'thumb': 'images/AdminDryclean/25.png',
            'subHtml': '24'
         }, {
           'src': 'images/AdminDryclean/26.png',
            'thumb': 'images/AdminDryclean/26.png',
            'subHtml': '25'
        }]
    })
});

// GALLERY 4
jQuery('#gallery4').on('click', function (e) {
    "use strict";
    e.preventDefault();
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
        dynamicEl: [{
            'src': 'images/ClientDryclean/01.png',
            'thumb': 'images/ClientDryclean/01.png',
            'subHtml': '1'
        }, {
            'src': 'images/ClientDryclean/02.png',
            'thumb': 'images/ClientDryclean/02.png',
            'subHtml': '2'
        }, {
           'src': 'images/ClientDryclean/03.png',
            'thumb': 'images/ClientDryclean/03.png',
            'subHtml': '3'
        }, {
            'src': 'images/ClientDryclean/04.png',
            'thumb': 'images/ClientDryclean/04.png',
            'subHtml': '4'
        }, {
           'src': 'images/ClientDryclean/05.png',
            'thumb': 'images/ClientDryclean/05.png',
            'subHtml': '5'
         }, {
           'src': 'images/ClientDryclean/06.png',
            'thumb': 'images/ClientDryclean/06.png',
            'subHtml': '6'
         }, {
           'src': 'images/ClientDryclean/07.png',
            'thumb': 'images/ClientDryclean/07.png',
            'subHtml': '7'
         }, {
           'src': 'images/ClientDryclean/08.png',
            'thumb': 'images/ClientDryclean/08.png',
            'subHtml': '8'
         }, {
           'src': 'images/ClientDryclean/09.png',
            'thumb': 'images/ClientDryclean/09.png',
            'subHtml': '9'
         }, {
           'src': 'images/ClientDryclean/10.png',
            'thumb': 'images/ClientDryclean/10.png',
            'subHtml': '10'
         }, {
           'src': 'images/ClientDryclean/11.png',
            'thumb': 'images/ClientDryclean/11.png',
            'subHtml': '11'
         }, {
           'src': 'images/ClientDryclean/12.png',
            'thumb': 'images/ClientDryclean/12.png',
            'subHtml': '12'
         }, {
           'src': 'images/ClientDryclean/13.png',
            'thumb': 'images/ClientDryclean/13.png',
            'subHtml': '13'
         }, {
           'src': 'images/ClientDryclean/14.png',
            'thumb': 'images/ClientDryclean/14.png',
            'subHtml': '14'
         }, {
           'src': 'images/ClientDryclean/15.png',
            'thumb': 'images/ClientDryclean/15.png',
            'subHtml': '15'
         }, {
           'src': 'images/ClientDryclean/16.png',
            'thumb': 'images/ClientDryclean/16.png',
            'subHtml': '16'
         }, {
           'src': 'images/ClientDryclean/17.png',
            'thumb': 'images/ClientDryclean/17.png',
            'subHtml': '17'
         }, {
           'src': 'images/ClientDryclean/18.png',
            'thumb': 'images/ClientDryclean/18.png',
            'subHtml': '18'
         }, {
           'src': 'images/ClientDryclean/19.png',
            'thumb': 'images/ClientDryclean/19.png',
            'subHtml': '19'
         }, {
           'src': 'images/ClientDryclean/20.png',
            'thumb': 'images/ClientDryclean/20.png',
            'subHtml': '20'
         }, {
           'src': 'images/ClientDryclean/21.png',
            'thumb': 'images/ClientDryclean/21.png',
            'subHtml': '21'
         }, {
           'src': 'images/ClientDryclean/22.png',
            'thumb': 'images/ClientDryclean/22.png',
            'subHtml': '22'
         }, {
           'src': 'images/ClientDryclean/23.png',
            'thumb': 'images/ClientDryclean/23.png',
            'subHtml': '23'
         }, {
           'src': 'images/ClientDryclean/24.png',
            'thumb': 'images/ClientDryclean/24.png',
            'subHtml': '24'
         }, {
           'src': 'images/ClientDryclean/25.png',
            'thumb': 'images/ClientDryclean/25.png',
            'subHtml': '25'
         }, {
           'src': 'images/ClientDryclean/26.png',
            'thumb': 'images/ClientDryclean/26.png',
            'subHtml': '26'
         }, {
           'src': 'images/ClientDryclean/27.png',
            'thumb': 'images/ClientDryclean/27.png',
            'subHtml': '27'
         }, {
           'src': 'images/ClientDryclean/28.png',
            'thumb': 'images/ClientDryclean/28.png',
            'subHtml': '28'
         }, {
           'src': 'images/ClientDryclean/29.png',
            'thumb': 'images/ClientDryclean/29.png',
            'subHtml': '29'
         }, {
           'src': 'images/ClientDryclean/30.png',
            'thumb': 'images/ClientDryclean/30.png',
            'subHtml': '30'
         }, {
           'src': 'images/ClientDryclean/31.png',
            'thumb': 'images/ClientDryclean/31.png',
            'subHtml': '31'
         }, {
           'src': 'images/ClientDryclean/32.png',
            'thumb': 'images/ClientDryclean/32.png',
            'subHtml': '32'
         }, {
           'src': 'images/ClientDryclean/33.png',
            'thumb': 'images/ClientDryclean/33.png',
            'subHtml': '33'
         }, {
           'src': 'images/ClientDryclean/34.png',
            'thumb': 'images/ClientDryclean/34.png',
            'subHtml': '34'
         }, {
           'src': 'images/ClientDryclean/35.png',
            'thumb': 'images/ClientDryclean/35.png',
            'subHtml': '35'
         }, {
           'src': 'images/ClientDryclean/36.png',
            'thumb': 'images/ClientDryclean/36.png',
            'subHtml': '36'
         }, {
           'src': 'images/ClientDryclean/37.png',
            'thumb': 'images/ClientDryclean/37.png',
            'subHtml': '37'

        }]
    })
});

// GALLERY 4
jQuery('#gallery5').on('click', function (e) {
    "use strict";
    e.preventDefault();
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
        dynamicEl: [{
            'src': 'images/KuwaitCapitalArabYouth2017/01.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/01.png',
            'subHtml': '1'
        }, {
            'src': 'images/KuwaitCapitalArabYouth2017/02.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/02.png',
            'subHtml': '2'
        }, {
           'src': 'images/KuwaitCapitalArabYouth2017/03.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/03.png',
            'subHtml': '3'
        }, {
            'src': 'images/KuwaitCapitalArabYouth2017/04.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/04.png',
            'subHtml': '4'
        }, {
           'src': 'images/KuwaitCapitalArabYouth2017/05.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/05.png',
            'subHtml': '5'
         }, {
           'src': 'images/KuwaitCapitalArabYouth2017/06.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/06.png',
            'subHtml': '6'
         }, {
           'src': 'images/KuwaitCapitalArabYouth2017/07.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/07.png',
            'subHtml': '7'
         }, {
           'src': 'images/KuwaitCapitalArabYouth2017/08.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/08.png',
            'subHtml': '8'
         }, {
           'src': 'images/KuwaitCapitalArabYouth2017/09.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/09.png',
            'subHtml': '9'
         }, {
           'src': 'images/KuwaitCapitalArabYouth2017/10.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/10.png',
            'subHtml': '10'
         }, {
           'src': 'images/KuwaitCapitalArabYouth2017/11.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/11.png',
            'subHtml': '11'
         }, {
           'src': 'images/KuwaitCapitalArabYouth2017/12.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/12.png',
            'subHtml': '12'
         }, {
           'src': 'images/KuwaitCapitalArabYouth2017/13.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/13.png',
            'subHtml': '13'
         }, {
           'src': 'images/KuwaitCapitalArabYouth2017/14.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/14.png',
            'subHtml': '14'
         }, {
           'src': 'images/KuwaitCapitalArabYouth2017/15.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/15.png',
            'subHtml': '15'
         }, {
           'src': 'images/KuwaitCapitalArabYouth2017/16.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/16.png',
            'subHtml': '16'
         }, {
           'src': 'images/KuwaitCapitalArabYouth2017/17.png',
            'thumb': 'images/KuwaitCapitalArabYouth2017/17.png',
            'subHtml': '17'

        }]
    })
});

jQuery('#gallery12').on('click', function (e) {
    "use strict";
    e.preventDefault();
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
        dynamicEl: [{
            'src': 'images/images/BookletCover.jpg',
            'thumb': 'images/images/BookletCover.jpg',
            'subHtml': 'BookletCover'
        }, {
            'src': 'images/images/HomeApplication.png',
            'thumb': 'images/images/HomeApplication.png',
            'subHtml': 'HomeApplication'
        }, {
           'src': 'images/images/JopPost.jpg',
            'thumb': 'images/images/JopPost.jpg',
            'subHtml': 'JopPost'
        }, {
            'src': 'images/images/JopPost2.png',
            'thumb': 'images/images/JopPost2.png',
            'subHtml': 'JopPost2'
        }, {
           'src': 'images/images/LogoEcommerce.png',
            'thumb': 'images/images/LogoEcommerce.png',
            'subHtml': 'LogoEcommerce'
         }, {
           'src': 'images/images/LogoProgrammingCompany.png',
            'thumb': 'images/images/LogoProgrammingCompany.png',
            'subHtml': 'LogoProgrammingCompany'
         }, {
           'src': 'images/images/SocialMedia.jpg',
            'thumb': 'images/images/SocialMedia.jpg',
            'subHtml': 'SocialMedia.jpg'
         }, {
           'src': 'images/images/SocialMedia2.jpg',
            'thumb': 'images/images/SocialMedia2.jpg',
            'subHtml': 'SocialMedia2.jpg' 

        },{
           'src': 'images/images/CheckMyRyde-Logo.png',
            'thumb': 'images/images/CheckMyRyde-Logo.png',
            'subHtml': 'CheckMyRyde-Logo'
         }]
    })
});

jQuery('#gallery6').on('click', function (e) {
    "use strict";
    e.preventDefault();
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
        dynamicEl: [{
            'src': 'images/Ecommerce/01.jpg',
            'thumb': 'images/Ecommerce/01.jpg',
            'subHtml': '1'
        }, {
            'src': 'images/Ecommerce/02.jpg',
            'thumb': 'images/Ecommerce/02.jpg',
            'subHtml': '2'
        }, {
           'src': 'images/Ecommerce/03.jpg',
            'thumb': 'images/Ecommerce/03.jpg',
            'subHtml': '3'
        }, {
            'src': 'images/Ecommerce/04.jpg',
            'thumb': 'images/Ecommerce/04.jpg',
            'subHtml': '4'
        }, {
           'src': 'images/Ecommerce/05.jpg',
            'thumb': 'images/Ecommerce/05.jpg',
            'subHtml': '5'
         }, {
           'src': 'images/Ecommerce/06.jpg',
            'thumb': 'images/Ecommerce/06.jpg',
            'subHtml': '6'
         }, {
           'src': 'images/Ecommerce/07.jpg',
            'thumb': 'images/Ecommerce/07.jpg',
            'subHtml': '7'
         }, {
           'src': 'images/Ecommerce/08.jpg',
            'thumb': 'images/Ecommerce/08.jpg',
            'subHtml': '8'
         }, {
           'src': 'images/Ecommerce/09.jpg',
            'thumb': 'images/Ecommerce/09.jpg',
            'subHtml': '9'
         }, {
           'src': 'images/Ecommerce/10.jpg',
            'thumb': 'images/Ecommerce/10.jpg',
            'subHtml': '10'
         }, {
           'src': 'images/Ecommerce/11.jpg',
            'thumb': 'images/Ecommerce/11.jpg',
            'subHtml': '11'
         }, {
           'src': 'images/Ecommerce/12.jpg',
            'thumb': 'images/Ecommerce/12.jpg',
            'subHtml': '12'
         
         }, {
           'src': 'images/Ecommerce/14.png',
            'thumb': 'images/Ecommerce/14.png',
            'subHtml': '14'
         }, {
           'src': 'images/Ecommerce/15.png',
            'thumb': 'images/Ecommerce/15.png',
            'subHtml': '15'
         }, {
           'src': 'images/Ecommerce/16.png',
            'thumb': 'images/Ecommerce/16.png',
            'subHtml': '16'
         }, {
           'src': 'images/Ecommerce/17.png',
            'thumb': 'images/Ecommerce/17.png',
            'subHtml': '17'

        }]
    })
});

jQuery('#gallery11').on('click', function (e) {
    "use strict";
    e.preventDefault();
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
        dynamicEl: [{
            'src': 'images/SaudiEcommerce/01.jpg',
            'thumb': 'images/SaudiEcommerce/01.jpg',
            'subHtml': '1'
        }, {
            'src': 'images/SaudiEcommerce/02.jpg',
            'thumb': 'images/SaudiEcommerce/02.jpg',
            'subHtml': '2'
        }, {
           'src': 'images/SaudiEcommerce/03.jpg',
            'thumb': 'images/SaudiEcommerce/03.jpg',
            'subHtml': '3'
        }, {
            'src': 'images/SaudiEcommerce/04.jpg',
            'thumb': 'images/SaudiEcommerce/04.jpg',
            'subHtml': '4'
        }, {
           'src': 'images/SaudiEcommerce/05.jpg',
            'thumb': 'images/SaudiEcommerce/05.jpg',
            'subHtml': '5'
         }, {
           'src': 'images/SaudiEcommerce/06.jpg',
            'thumb': 'images/SaudiEcommerce/06.jpg',
            'subHtml': '6'
         }, {
           'src': 'images/SaudiEcommerce/07.jpg',
            'thumb': 'images/SaudiEcommerce/07.jpg',
            'subHtml': '7'
         }, {
           'src': 'images/SaudiEcommerce/08.jpg',
            'thumb': 'images/SaudiEcommerce/08.jpg',
            'subHtml': '8'
         }, {
           'src': 'images/SaudiEcommerce/09.jpg',
            'thumb': 'images/SaudiEcommerce/09.jpg',
            'subHtml': '9'
         }, {
           'src': 'images/SaudiEcommerce/10.jpg',
            'thumb': 'images/SaudiEcommerce/10.jpg',
            'subHtml': '10'
         }, {
           'src': 'images/SaudiEcommerce/11.jpg',
            'thumb': 'images/SaudiEcommerce/11.jpg',
            'subHtml': '11'
         }, {
           'src': 'images/SaudiEcommerce/12.jpg',
            'thumb': 'images/SaudiEcommerce/12.jpg',
            'subHtml': '12'
         }, {
           'src': 'images/SaudiEcommerce/13.jpg',
            'thumb': 'images/SaudiEcommerce/13.jpg',
            'subHtml': '13'
         }, {
           'src': 'images/SaudiEcommerce/14.jpg',
            'thumb': 'images/SaudiEcommerce/14.jpg',
            'subHtml': '14'
         }, {
           'src': 'images/SaudiEcommerce/15.jpg',
            'thumb': 'images/SaudiEcommerce/15.jpg',
            'subHtml': '15'


        }]
    })
});


jQuery('#gallery10').on('click', function (e) {
    "use strict";
    e.preventDefault();
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
        dynamicEl: [{
            'src': 'images/Service/1.png',
            'thumb': 'images/Service/1.png',
            'subHtml': '1'
        }, {
            'src': 'images/Service/2.png',
            'thumb': 'images/Service/2.png',
            'subHtml': '2'
        }, {
           'src': 'images/Service/3.png',
            'thumb': 'images/Service/3.png',
            'subHtml': '3'
        }, {
            'src': 'images/Service/4.png',
            'thumb': 'images/Service/4.png',
            'subHtml': '4'
        }, {
           'src': 'images/Service/5.png',
            'thumb': 'images/Service/5.png',
            'subHtml': '5'
         }, {
           'src': 'images/Service/6.png',
            'thumb': 'images/Service/6.png',
            'subHtml': '6'
         }, {
           'src': 'images/Service/7.png',
            'thumb': 'images/Service/7.png',
            'subHtml': '7'
         }, {
           'src': 'images/Service/8.png',
            'thumb': 'images/Service/8.png',
            'subHtml': '8'

        }]
    })
});

jQuery('#gallery13').on('click', function (e) {
    "use strict";
    e.preventDefault();
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
        dynamicEl: [{
            'src': 'images/menus/android1.jpg',
            'thumb': 'images/menus/android1.jpg',
            'subHtml': 'android1'
        }, {
            'src': 'images/menus/android2.jpg',
            'thumb': 'images/menus/android2.jpg',
            'subHtml': 'android2'
        }, {
           'src': 'images/menus/ios.jpg',
            'thumb': 'images/menus/ios.jpg',
            'subHtml': 'ios'
        }, {
            'src': 'images/menus/wp1.jpg',
            'thumb': 'images/menus/wp1.jpg',
            'subHtml': 'wp1'
        }, {
           'src': 'images/menus/wp2.jpg',
            'thumb': 'images/menus/wp2.jpg',
            'subHtml': 'wp2'

        }]
    })
});

// GALLERY 4
jQuery('#gallery7').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: false,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/Dashboard/1-Home.png',
            'thumb': 'images/Dashboard/1-Home.png',
            'subHtml': 'Home'
        }, {
            'src': 'images/Dashboard/2-Profile.png',
            'thumb': 'images/Dashboard/2-Profile.png',
            'subHtml': "Profile"
        },{
            'src': 'images/Dashboard/3-Change Password.png',
            'thumb': 'images/Dashboard/3-Change Password.png',
            'subHtml': "Change Password"
        },{
            'src': 'images/Dashboard/4-Partners.png',
            'thumb': 'images/Dashboard/4-Partners.png',
            'subHtml': "Partners"
        },{
            'src': 'images/Dashboard/5-Partners-edit&add.png',
            'thumb': 'images/Dashboard/5-Partners-edit&add.png',
            'subHtml': "Partners-edit&add"
        },{
            'src': 'images/Dashboard/6-Editable-Partners-details.png',
            'thumb': 'images/Dashboard/6-Editable-Partners-details.png',
            'subHtml': "Editable-Partners-details"
        },{
            'src': 'images/Dashboard/7-Users.png',
            'thumb': 'images/Dashboard/7-Users.png',
            'subHtml': "Users"
        },{
            'src': 'images/Dashboard/8-Users-edit&add.png',
            'thumb': 'images/Dashboard/8-Users-edit&add.png',
            'subHtml': "Users-edit&add"
        },{
            'src': 'images/Dashboard/9-Editable-Users-details.png',
            'thumb': 'images/Dashboard/9-Editable-Users-details.png',
            'subHtml': "Editable-Users-details"
        },{
            'src': 'images/Dashboard/10-Areas.png',
            'thumb': 'images/Dashboard/10-Areas.png',
            'subHtml': "10-Areas"
        },{
            'src': 'images/Dashboard/11-Areas-edit&add.png',
            'thumb': 'images/Dashboard/11-Areas-edit&add.png',
            'subHtml': "Areas-edit&add"
        },{
            'src': 'images/Dashboard/12-Editable-Areas-details .png',
            'thumb': 'images/Dashboard/12-Editable-Areas-details .png',
            'subHtml': "Editable-Areas-details "
        },{
            'src': 'images/Dashboard/13-Orders.png',
            'thumb': 'images/Dashboard/13-Orders.png',
            'subHtml': "Orders"
        },{
            'src': 'images/Dashboard/14-Orders-edit&add.png',
            'thumb': 'images/Dashboard/14-Orders-edit&add.png',
            'subHtml': "Orders-edit&add"
        },{
            'src': 'images/Dashboard/15-Editable-Orders-details.png',
            'thumb': 'images/Dashboard/15-Editable-Orders-details.png',
            'subHtml': "Editable-Orders-details"
        },{
            'src': 'images/Dashboard/16-Earnings.png',
            'thumb': 'images/Dashboard/16-Earnings.png',
            'subHtml': "16-Earnings"
        },{
            'src': 'images/Dashboard/17-Promotions.png',
            'thumb': 'images/Dashboard/17-Promotions.png',
            'subHtml': "Promotions"
        },{
            'src': 'images/Dashboard/18-Promotions-add.png',
            'thumb': 'images/Dashboard/18-Promotions-add.png',
            'subHtml': "Promotions-add"
        },{
            'src': 'images/Dashboard/19-Cases.png',
            'thumb': 'images/Dashboard/19-Cases.png',
            'subHtml': "Cases"
        },{
            'src': 'images/Dashboard/20-Cases-edit&add.png',
            'thumb': 'images/Dashboard/20-Cases-edit&add.png',
            'subHtml': "Cases-edit&add"
        }, {
            'src': 'images/Dashboard/21-Editable-Cases-details .png',
            'thumb': 'images/Dashboard/21-Editable-Cases-details .png',
            'subHtml': "Editable-Cases-details "
        }]
    })
});

jQuery('#gallery8').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: false,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/ETender/home.png',
            'thumb': 'images/ETender/home.png',
            'subHtml': 'Home'
        }, {
            'src': 'images/ETender/tender.png',
            'thumb': 'images/ETender/tender.png',
            'subHtml': "Tender"
        }, {
            'src': 'images/ETender/tenders.png',
            'thumb': 'images/ETender/tenders.png',
            'subHtml': "Tenders"
	    }, {
            'src': 'images/ETender/search.png',
            'thumb': 'images/ETender/search.png',
            'subHtml': "Search"
		}, {
            'src': 'images/ETender/contact.png',
            'thumb': 'images/ETender/contact.png',
            'subHtml': "Contact"
        }]
    })
});

jQuery('#gallery9').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: false,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/Youth/home.png',
            'thumb': 'images/Youth/home.png',
            'subHtml': 'Home'
        }, {
            'src': 'images/Youth/event-details.png',
            'thumb': 'images/Youth/event-details.png',
            'subHtml': "Event Details"
        }]
    })
});

// GALLERY 2
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
        thumbnail: false,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
             'src': 'images/AgilePortal/1.png',
            'thumb': 'images/AgilePortal/1.png',
            'subHtml': 'Login'
        }, {
            'src': 'images/AgilePortal/2.png',
            'thumb': 'images/AgilePortal/2.png',
            'subHtml': "Registration"
        }, {
            'src': 'images/AgilePortal/3.png',
            'thumb': 'images/AgilePortal/3.png',
            'subHtml': "Enter Email"
        }, {
            'src': 'images/AgilePortal/4.png',
            'thumb': 'images/AgilePortal/4.png',
            'subHtml': "All Requests"
        }, {
            'src': 'images/AgilePortal/5.png',
            'thumb': 'images/AgilePortal/5.png',
            'subHtml': "Payment"
        }, {
            'src': 'images/AgilePortal/6.png',
            'thumb': 'images/AgilePortal/6.png',
            'subHtml': "Leave"
        }, {
            'src': 'images/AgilePortal/7.png',
            'thumb': 'images/AgilePortal/7.png',
            'subHtml': "Excuse"
        }]
    })
});

