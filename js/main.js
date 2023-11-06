$(document).ready(function () {
    $('#plan-carousel').owlCarousel({
        loop: true,
        autoplay: 3000,
        margin: 10,
        nav: true,
        autoHeight: true,
        // navText: [
        //     '<i style="font-size:40px;" class="fa fa-angle-left arrow-position-left color-green color-white" aria-hidden="true"></i>',
        //     '<i style="font-size:40px;" class="fa fa-angle-right arrow-position-right color-green color-white" aria-hidden="true"></i>'
        // ],
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 3
            },
            768: {
                items: 5
            },
            1000: {
                items: 5
            },
        }
    })
    
});

$(document).ready(function () {
    $('#test-carousel').owlCarousel({
        loop: true,
        autoplay: 3000,
        margin: 10,
        nav: true,
        autoHeight: true,
        navText: [
            '<i style="font-size:23px;color:#FFF" class="fa fa-angle-left arrow-position-left color-green color-white" aria-hidden="true"></i>',
            '<i style="font-size:23px;color:#FFF" class="fa fa-angle-right arrow-position-right color-green color-white" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 2
            },
        }
    })
    
});

$(document).ready(function () {
    $('#seller-carousel').owlCarousel({
        loop: true,
        autoplay: 3000,
        margin: 10,
        nav: true,
        autoHeight: true,
        navText: [
            '<i style="font-size:23px;color:#FFF" class="fa fa-angle-left arrow-position-left color-green color-white" aria-hidden="true"></i>',
            '<i style="font-size:23px;;color:#FFF" class="fa fa-angle-right arrow-position-right color-green color-white" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            425: {
                items:2
            },
            575: {
                items:3
            },
            768: {
                items: 4
            },
            1000: {
                items: 5
            },
        }
    })
    
});

$(document).ready(function () {
    $('#component-carousel').owlCarousel({
        loop: true,
        autoplay: 3000,
        // margin: 10,
        nav: true,
        autoHeight: true,
        navText: [
            '<i style="font-size:23px;color:#FFF" class="fa fa-angle-left arrow-position-left color-green color-white" aria-hidden="true"></i>',
            '<i style="font-size:23px;color:#FFF" class="fa fa-angle-right arrow-position-right color-green color-white" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            425: {
                items:2
            },
            
            992: {
                items: 4
            },
            1000: {
                items: 4
            },
        }
    })
    
});

document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            // Hide all tab contents
            tabContents.forEach(function(content) {
                content.style.display = "none";
            });

            // Deactivate all tab links
            tabLinks.forEach(function(tabLink) {
                tabLink.classList.remove("active");
            });

            // Activate the selected tab link
            link.classList.add("active");

            // Show the corresponding tab content
            const targetTabId = link.getAttribute("data-tab");
            const targetTab = document.getElementById(targetTabId);
            targetTab.style.display = "block";
        });
    });

    // Activate the first tab by default
    tabLinks[0].click();
});




	 
	
$(function () {
    $('.toggle-menu').click(function(){
       $('.exo-menu').toggleClass('display');
       
    });
    
   });
   
     
