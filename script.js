document.addEventListener('DOMContentLoaded', function() {
    // Initialize
    init();
});

/**
 * Initialize all functionality
 */
function init() {
    // Setup smooth scrolling for anchor links
    setupSmoothScrolling();
    
    // Highlight active navigation item based on current page
    highlightCurrentNavItem();
    
    // Load blog posts dynamically if we have a blog container
    const blogPostsContainer = document.querySelector('.blog-posts');
    if (blogPostsContainer) {
        loadBlogPosts(blogPostsContainer);
    }
    
    simplifyCalendarText();

    // Setup expandable sections (for reading list)
    setupExpandableSections();
    
    // Setup goal checkboxes
    setupGoalCheckboxes();
    
    // Setup quote rotation
    setupQuotes();
    
    // Add animation classes to elements as they scroll into view
    setupScrollAnimations();
    
    // Save and load user preferences and progress
    loadUserPreferences();
}

/**
 * Sets up smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
}

/**
 * Highlights the current navigation item based on the current page URL
 */
function highlightCurrentNavItem() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    // Default to home if we're on the root page
    const activePage = currentPage || 'home';
    
    // Find and activate the correct nav item
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        const linkHref = link.getAttribute('href');
        
        if ((activePage === 'home' && linkHref === '#home') || 
            (linkHref === activePage) || 
            (linkHref.includes(activePage))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Load blog posts dynamically from the /blogposts directory
 * This is a simplified version - in a real implementation, you'd likely
 * use a backend system or static site generator to handle this
 */
function loadBlogPosts(container) {
    // In a real implementation, you'd fetch this data from a backend
    // or generate it during build time. This is just for demonstration purposes.
    
    // You can extend this function to fetch real blog posts from a JSON file
    // or an API endpoint
    
    /*
    // Example of how you might fetch blog posts from a JSON file:
    fetch('/data/blogposts.json')
        .then(response => response.json())
        .then(posts => {
            renderBlogPosts(posts, container);
        })
        .catch(error => {
            console.error('Error loading blog posts:', error);
        });
    */
}

/**
 * Renders blog posts to the container
 */
function renderBlogPosts(posts, container) {
    if (!posts || !posts.length) return;
    
    container.innerHTML = '';
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        
        const tagHtml = post.tag ? 
            `<span class="blog-post-tag tag-${post.tag.toLowerCase()}">${post.tag}</span>` : '';
        
        postElement.innerHTML = `
            <div class="blog-post-content">
                <h3>
                    <i class="far fa-file-alt"></i>
                    <a href="${post.url}">${post.title}</a>
                </h3>
                <div class="blog-post-date">
                    ${post.date}
                    ${tagHtml}
                </div>
            </div>
        `;
        
        container.appendChild(postElement);
    });
}

/**
 * Sets up expandable sections (Reading list, etc)
 */
function setupExpandableSections() {
    const expandableHeaders = document.querySelectorAll('.expandable-header');
    
    expandableHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle active class on header
            header.classList.toggle('active');
            
            // Toggle active class on content
            const content = header.nextElementSibling;
            if (content && content.classList.contains('expandable-content')) {
                content.classList.toggle('active');
                
                // Save state to localStorage
                const sectionId = header.closest('.section').querySelector('h2').textContent.trim().toLowerCase().replace(/\s+/g, '-');
                localStorage.setItem(`section_${sectionId}_expanded`, content.classList.contains('active'));
            }
        });
    });
}

/**
 * Sets up goal checkboxes with localStorage persistence
 */
function setupGoalCheckboxes() {
    // Define goals here - edit or add more as needed
    const goals = [
        "Read 12 Books in 2025",
        "Finish CS50",
        "Create A Portfolio Website",
        "Run A Marathon",
        "Journal for 100 days",
        "Make My First Video",
    ];
    
    // Generate goal HTML
    const goalsContainer = document.querySelector('.goals-container');
    if (goalsContainer) {
        goalsContainer.innerHTML = goals.map((goal, index) => `
            <div class="goal-item">
                <input type="checkbox" id="goal${index}" class="goal-checkbox">
                <label for="goal${index}">${goal}</label>
            </div>
        `).join('');
        
        // Add event listeners to checkboxes
        document.querySelectorAll('.goal-checkbox').forEach((checkbox, index) => {
            checkbox.addEventListener('change', () => {
                // Save state to localStorage
                localStorage.setItem(`goal_${index}`, checkbox.checked ? 'completed' : 'incomplete');
                
                // Apply or remove text decoration to label
                const label = checkbox.nextElementSibling;
                if (label && label.tagName === 'LABEL') {
                    if (checkbox.checked) {
                        label.style.textDecoration = 'line-through';
                        label.style.color = 'var(--text-secondary)';
                    } else {
                        label.style.textDecoration = 'none';
                        label.style.color = 'var(--text-primary)';
                    }
                }
            });
        });
    }
}

/**
 * Sets up the quote rotation functionality
 */
function setupQuotes() {
    const quoteContainer = document.getElementById('quote-container');
    if (!quoteContainer) return;
    
    // Get all quotes and the button
    const quotes = document.querySelectorAll('.quote');
    const nextButton = document.getElementById('next-quote');
    
    if (!quotes.length || !nextButton) return;
    
    // Add the additional quote about discipline and consistency
    const additionalQuote = document.createElement('div');
    additionalQuote.className = 'quote hidden';
    additionalQuote.dataset.quote = "4";
    additionalQuote.innerHTML = `
        <blockquote>
            <p>Inspiration is useless if there is no discipline. Consistency is key!</p>
        </blockquote>
        <cite>Michael Fleischmann</cite>
    `;
    quoteContainer.insertBefore(additionalQuote, document.querySelector('.quote-nav'));
    
    // Show random quote on page load
    const randomIndex = Math.floor(Math.random() * (quotes.length + 1)); // +1 for our new quote
    showQuote(randomIndex);
    
    // Add click event to the button
    nextButton.addEventListener('click', () => {
        // Find current visible quote
        const currentQuote = document.querySelector('.quote:not(.hidden)');
        const currentIndex = parseInt(currentQuote.dataset.quote);
        
        // Calculate next quote to show (cycling through quotes)
        const totalQuotes = quotes.length + 1; // +1 for our new quote
        const nextIndex = currentIndex % totalQuotes + 1;
        
        showQuote(nextIndex);
    });
    
    /**
     * Shows the quote with the specified index and hides others
     * @param {number} index - The index of the quote to show
     */
    function showQuote(index) {
        // Hide all quotes
        document.querySelectorAll('.quote').forEach(quote => {
            quote.classList.add('hidden');
        });
        
        // Show the selected quote
        const quoteToShow = document.querySelector(`.quote[data-quote="${index}"]`);
        if (quoteToShow) {
            quoteToShow.classList.remove('hidden');
        }
    }
}

// Make sure the function is called when the page loads
document.addEventListener('DOMContentLoaded', function() {
    setupQuotes();
});

// ADD this function to your script.js and call it from the init() function
function simplifyCalendarText() {
    const scheduleItems = document.querySelectorAll('.schedule-item:not(.empty)');
    
    scheduleItems.forEach(item => {
        const text = item.textContent;
        // Extract just the title (part before the first comma)
        const title = text.split(',')[0];
        item.textContent = title;
    });
}
