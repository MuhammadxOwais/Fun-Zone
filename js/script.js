// navbar
let search = document.getElementById('search');
let input= document.getElementById('input');
search.addEventListener('click', () =>  {
    if (input.style.display === 'block') {
        input.style.display = 'none';
    } else {
        input.style.display = 'block';
    }
})









// custamer
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

    





// autocomplete
const local_database = [
    "Home",
    "Attractions",
    "Rides",
    "Shows",
    "Events",
    "Food & Drinks",
    "Restaurants",
    "Snacks",
    "Drinks",
    "Tickets",
    "Prices",
    "Deals",
    "About Us",
    "History",
    "Mission",
    "Team",
    "Contact",
    "Information",
    "Location",
    "FAQ",
    "Hours",
    "Opening Times",
    "Closing Times",
    "Schedule",
    "Parking",
    "Directions",
    "Transportation",
    "Discounts",
    "Offers",
    "Promotions",
    "Specials",
    "Reviews",
    "Customer Feedback",
    "Testimonials",
    "Ratings",
    "Comments",
    "Jobs",
    "Careers",
    "Employment",
    "Opportunities",
    "Internships",
    "Volunteer",
    "Eating",
    "Dining",
    "Food Options",
    "Menu",
    "Cuisine",
    "Toys",
    "Merchandise",
    "Gift Shop",
    "Souvenirs",
    "Games",
    "Arcade",
    "Midway",
    "Carnival Games",
    "Entertainment",
    "Performances",
    "Parades",
    "Fireworks",
    "Concerts",
    "Live Music",
    "Shows",
    "Theater",
    "Cinema",
    "Movies",
    "Film",
    "Photography",
    "Photo Ops",
    "Pictures",
    "Memories",
    "Guide",
    "Map",
    "Park Map",
    "Site Map",
    "Visitor Guide",
    "Security",
    "Safety",
    "Emergency",
    "Medical Services",
    "First Aid",
    "Lost and Found",
    "Items",
    "Property",
    "Assistance",
    "Training",
    "Staff Training",
    "Employee Training",
    "Customer Service",
    "Wheelchair Rentals",
    "Accessibility",
    "Accommodations",
    "Special Needs",
    "Pets",
    "Animals",
    "Pet Policy",
    "Rules",
    "Regulations",
    "Code of Conduct",
    "Privacy Policy",
    "Terms and Conditions",
    "Legal",
    "Copyright",
    "Trademark",
        "Social Media",
    "Follow Us",
    "Connect",
    "Share",
    "Newsletter",
    "Subscribe",
    "Updates",
    "Latest News",
    "Blog",
    "Articles",
    "Tips",
    "Guides",
    "Gallery",
    "Photos",
    "Videos",
    "Promotional Material",
    "Press",
    "Media",
    "Coverage",
    "Partnerships",
    "Sponsorships",
    "Donations",
    "Community",
    "Fundraisers",
    "Charity",
    "Events Calendar",
    "Special Events",
    "Holiday Events",
    "Seasonal Events",
    "Birthday Parties",
    "Group Events",
    "Corporate Events",
    "Weddings",
    "Celebrations",
    "Festivals",
    "Conventions",
    "Exhibitions",
    "Workshops",
    "Classes",
    "Educational Programs",
    "Guided Tours",
    "Behind the Scenes",
    "Animal Encounters",
    "Conservation Programs",
    "Membership",
    "Annual Pass",
    "Season Pass",
    "VIP Access",
    "Gift Cards",
    "Reservations",
    "Booking",
    "Online Booking",
    "Mobile App",
    "Downloads",
    "FAQs",
    "Contact Us",
    "Get in Touch",
    "Customer Support",
    "Help",
    "Feedback",
    "Suggestions",
    "Complaints",
    "Survey",
    "Request",
    "Inquiry",
    "Feedback Form",
    "Report",
    "Bug Report",
    "Technical Support",
    "Troubleshooting",
    "Account",
    "Profile",
    "Settings",
    "Preferences",
    "Notifications",
    "Privacy Settings",
    "Security Settings",
    "Password Reset",
    "Logout"
]
$('#input').autocomplete({
    source: local_database
});





