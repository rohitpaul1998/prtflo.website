// Initialize EmailJS
emailjs.init("dTEQ6YStuxwO6pWB9"); // Replace with your actual EmailJS public key

// Project data for modals
const projectData = {
    ecommerce: {
        title: "Retail Store Analytics",
        tech: "Azure Data Factory • ADLS Gen2 • Azure SQL DB • Databricks • PySpark • Power BI • Python",
        overview: "A comprehensive retail store analytics project focused on gathering insights from transactions, products, and store data. Built an end-to-end data pipeline using Azure services with medallion architecture (Bronze-Silver-Gold layers) and integrated with Power BI for meaningful business insights.",
        githubUrl: "https://github.com/rohitpaul1998/Retail-Azure-Data-Engineering",
        features: [
            {
                title: "End-to-End Data Pipeline",
                description: "Complete ETL pipeline using Azure Data Factory for automated data ingestion and orchestration."
            },
            {
                title: "Medallion Architecture", 
                description: "Implemented Bronze (raw), Silver (cleansed), and Gold (business-ready) data layers for structured transformation."
            },
            {
                title: "Azure Data Lake Integration",
                description: "Centralized data storage using ADLS Gen2 with role-based access control and optimized file formats."
            },
            {
                title: "PySpark Data Processing",
                description: "Advanced data transformations and analytics using Azure Databricks with Python and Spark."
            },
            {
                title: "Business Intelligence Reporting",
                description: "Interactive Power BI dashboards and reports for retail insights and decision-making."
            },
            {
                title: "Scalable Cloud Infrastructure",
                description: "Built on Azure services ensuring high availability, performance, and cost-effective scaling."
            }
        ]
    },
    taskmanagement: {
        title: "Heart Disease Prediction",
        tech: "Python • Scikit-learn • Logistic Regression • Pandas • NumPy • Jupyter Notebook • Google Colab • Kaggle",
        overview: "Built a logistic regression model using Python and Scikit-learn to predict heart disease presence from patient health metrics with binary classification.",
        githubUrl: "https://github.com/rohitpaul1998/Heart_disease_prediction_ML",
        features: [
        {
            title: "Clinical Data Analysis",
            description: "Analyzes 13 key health metrics including age, chest pain type, blood pressure, and cholesterol levels."
        },
        {
            title: "Logistic Regression Model",
            description: "Implements scikit-learn's logistic regression algorithm for binary classification with high accuracy."
        },
        {
            title: "Data Preprocessing Pipeline",
            description: "Comprehensive data cleaning, feature scaling, and preparation using Pandas and NumPy."
        },
        {
            title: "Binary Classification Output",
            description: "Clear prediction results indicating presence (1) or absence (0) of heart disease risk."
        },
        {
            title: "Model Performance Evaluation",
            description: "Includes accuracy metrics, confusion matrix, and classification reports for model validation."
        },
        {
            title: "Interactive Jupyter Notebook",
            description: "Well-documented analysis with step-by-step implementation and Google Colab compatibility."
        }
]
    },
    datavisualization: {
        title: "NYC Motor Vehicle Collisions Analytics",
        tech: "SQL • Azure SQL Database • MySQL • Google BigQuery • ER/Studio • Alteryx • Talend Open Studio • Power BI • Tableau",
        overview: "Built a comprehensive data engineering solution analyzing NYC motor vehicle collisions using multi-database architecture, advanced ETL pipelines, and enterprise analytics tools. Processed 1M collision records across Azure SQL, MySQL, and BigQuery using Alteryx, Talend, and ER/Studio with Power BI and Tableau dashboards.",
        githubUrl: "https://github.com/rohitpaul1998/Data-Engineering-Projects/tree/main/NYC_Motor_Vehicle_Collisions",
        features: [
            {
                title: "Multi-Database Architecture",
                description: "Implemented data processing across Azure SQL Database, MySQL, and BigQuery for scalable storage and analysis."
            },
            {
                title: "Comprehensive Data Profiling",
                description: "Used Alteryx to profile and assess data quality of 200K+ collision records, identifying patterns and anomalies."
            },
            {
                title: "Advanced ETL Pipeline Development",
                description: "Built robust ETL workflows using Talend Open Studio for automated data extraction, transformation, and loading."
            },
            {
                title: "Database Design & Modeling",
                description: "Designed optimized data models using ER/Studio for efficient storage and query performance across platforms."
            },
            {
                title: "Collision Pattern Analytics",
                description: "Analyzed temporal trends, geographic hotspots, and contributing factors using advanced SQL queries and analytics."
            },
            {
                title: "Multi-Platform Visualization",
                description: "Created interactive dashboards in both Power BI and Tableau for comprehensive stakeholder reporting and insights."
            }
        ]
    }
};

// Generate mathematical symbols background
function generateMathSymbols() {
    const mathSymbols = ['π', 'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω', 'Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω', '∫', '∑', '∏', '∆', '∇', '∂', '∞', '≠', '≤', '≥', '±', '∓', '×', '÷', '√', '∛', '∜', '∝', '∈', '∉', '∋', '∌', '∩', '∪', '⊂', '⊃', '⊆', '⊇', '∧', '∨', '¬', '∀', '∃', '∄', '∴', '∵', 'ℵ', 'ℶ', 'ℷ', 'ℸ', '†'];
    
    const container = document.getElementById('mathSymbols');
    const heroHeight = window.innerHeight;
    const heroWidth = window.innerWidth;
    
    // Clear existing symbols and references
    container.innerHTML = '';
    allSymbols = [];
    
    // Define safe zones (areas to avoid)
    const safeZones = [
        // Menu button area (top right)
        { x: heroWidth - 120, y: 0, width: 120, height: 120 },
        // Hero content area (center)
        { x: heroWidth * 0.1, y: heroHeight * 0.3, width: heroWidth * 0.8, height: heroHeight * 0.4 },
        // Scroll indicator area (bottom center)
        { x: heroWidth * 0.4, y: heroHeight - 120, width: heroWidth * 0.2, height: 120 }
    ];
    
    function isInSafeZone(x, y) {
        return safeZones.some(zone => 
            x >= zone.x && x <= zone.x + zone.width &&
            y >= zone.y && y <= zone.y + zone.height
        );
    }
    
    // Generate 45-55 symbols
    const symbolCount = 45 + Math.floor(Math.random() * 11);
    
    for (let i = 0; i < symbolCount; i++) {
        const symbol = document.createElement('div');
        symbol.className = 'math-symbol';
        symbol.textContent = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
        
        let x, y;
        let attempts = 0;
        
        // Try to find a position not in safe zones
        do {
            x = Math.random() * (heroWidth - 100);
            y = Math.random() * (heroHeight - 100);
            attempts++;
        } while (isInSafeZone(x, y) && attempts < 20);
        
        symbol.style.left = x + 'px';
        symbol.style.top = y + 'px';
        symbol.style.fontSize = (30 + Math.random() * 50) + 'px';
        
        container.appendChild(symbol);
        allSymbols.push(symbol); // Store reference for proximity effect
        
        // Set random fade out after 4 seconds
        setTimeout(() => {
            if (Math.random() > 0.3) { // 70% chance to dim
                symbol.classList.add('dimmed');
            }
        }, 4000 + Math.random() * 2000); // 4-6 seconds
        
        // Start symbol transformation cycle
        startSymbolTransformation(symbol, mathSymbols);
    }
}

// Function to handle symbol transformation
function startSymbolTransformation(symbol, mathSymbols) {
    const transformInterval = 3000 + Math.random() * 4000; // 3-7 seconds
    
    setTimeout(function transform() {
        // Add morphing animation class
        symbol.classList.add('morphing');
        
        // Change symbol at the midpoint of animation (0.3s)
        setTimeout(() => {
            const newSymbol = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
            symbol.textContent = newSymbol;
        }, 300);
        
        // Remove morphing class after animation completes
        setTimeout(() => {
            symbol.classList.remove('morphing');
        }, 600);
        
        // Schedule next transformation
        setTimeout(transform, transformInterval + Math.random() * 2000);
    }, Math.random() * 2000); // Initial random delay
}

// Mouse movement interaction with proximity effect
let mouseTimeout;
let allSymbols = [];

function handleMouseMove(e) {
    const hero = document.getElementById('hero');
    const heroRect = hero.getBoundingClientRect();
    
    // Get mouse position relative to hero section
    const mouseX = e.clientX - heroRect.left;
    const mouseY = e.clientY - heroRect.top;
    
    // Update all symbols based on distance from cursor
    allSymbols.forEach(symbol => {
        const symbolRect = symbol.getBoundingClientRect();
        const symbolX = symbolRect.left - heroRect.left + symbolRect.width / 2;
        const symbolY = symbolRect.top - heroRect.top + symbolRect.height / 2;
        
        // Calculate distance from cursor to symbol
        const distance = Math.sqrt(
            Math.pow(mouseX - symbolX, 2) + Math.pow(mouseY - symbolY, 2)
        );
        
        // Define force field radius (adjust this value to change the effect area)
        const forceFieldRadius = 150;
        
        let targetOpacity;
        if (distance <= forceFieldRadius) {
            // Calculate opacity based on distance (closer = brighter)
            const proximity = 1 - (distance / forceFieldRadius);
            targetOpacity = 0.2 + (proximity * 0.5); // Range from 0.2 to 0.7
        } else {
            // Outside force field, use default opacity
            targetOpacity = symbol.classList.contains('dimmed') ? 0.2 : 0.4;
        }
        
        // Apply opacity change smoothly without interfering with drift animation
        symbol.style.opacity = targetOpacity;
    });
    
    clearTimeout(mouseTimeout);
    mouseTimeout = setTimeout(() => {
        // Reset all symbols to their default states after mouse stops
        allSymbols.forEach(symbol => {
            symbol.style.opacity = symbol.classList.contains('dimmed') ? 0.2 : 0.4;
        });
    }, 1000);
}

// Project Modal Functions
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectData[projectId];
    
    if (!project) return;
    
    // Generate GitHub thumbnail section
    const githubThumbnailSection = project.githubUrl 
        ? `<div class="github-thumbnail">
               <a href="${project.githubUrl}" target="_blank" class="github-link">
                   <img src="https://opengraph.githubassets.com/1/${project.githubUrl.split('github.com/')[1]}" 
                        alt="${project.title} GitHub Repository" 
                        class="github-image">
                   <div class="github-overlay">
                       <div class="github-icon">📂</div>
                       <div class="github-text">View on GitHub</div>
                   </div>
               </a>
           </div>`
        : `<div class="github-thumbnail">
               <div class="github-placeholder">
                   <div class="github-icon">📂</div>
                   <div class="github-text">Repository Coming Soon</div>
               </div>
           </div>`;
    
    // Generate modal content
    modalBody.innerHTML = `
        <div class="project-detail">
            <h1>${project.title}</h1>
            <div class="tech-stack">${project.tech}</div>
            <div class="overview">${project.overview}</div>
            
            ${githubThumbnailSection}
            
            <div class="project-features">
                <h3>Key Features</h3>
                <div class="features-grid">
                    ${project.features.map(feature => `
                        <div class="feature-item">
                            <h4>${feature.title}</h4>
                            <p>${feature.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal with escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu.contains(e.target)) {
        closeMenu();
    }
});

// Add scroll animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollTop = window.pageYOffset;
    const menuToggle = document.querySelector('.menu-toggle');

    // Dynamic menu button styling based on scroll position
    if (scrollTop > 100) {
        menuToggle.classList.add('scrolled');
    } else {
        menuToggle.classList.remove('scrolled');
    }

    sections.forEach(section => {
        const offset = section.offsetTop - window.innerHeight + 100;
        if (scrollTop > offset) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Handle form submission with EmailJS
async function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Get form data
    const formData = new FormData(form);
    const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Disable button and show loading
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    
    try {
        // Send email using EmailJS
        const response = await emailjs.send(
            'service_ryqdvsb',    // Replace with your EmailJS service ID
            'template_ldu2gir',   // Replace with your EmailJS template ID
            templateParams
        );
        
        if (response.status === 200) {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('EmailJS error:', error);
        showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
    } finally {
        // Reset button
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
    }
}

// Show notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? 'rgba(34, 197, 94, 0.9)' : type === 'error' ? 'rgba(239, 68, 68, 0.9)' : 'rgba(59, 130, 246, 0.9)'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(20px);
        font-family: 'Inter', sans-serif;
        font-size: 0.9rem;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Fetch GitHub repository count
async function fetchGitHubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/rohitpaul1998/repos?per_page=100');
        const repos = await response.json();
        
        if (Array.isArray(repos)) {
            const repoCount = repos.length;
            const projectsElement = document.getElementById('projects-count');
            if (projectsElement) {
                // Animate the number counting up
                animateCounter(projectsElement, repoCount);
            }
        }
    } catch (error) {
        console.log('Could not fetch GitHub repos, using fallback');
        const projectsElement = document.getElementById('projects-count');
        if (projectsElement) {
            projectsElement.textContent = '50+';
        }
    }
}

// Animate counter from 0 to target number
function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 30); // Animate over ~30 frames
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = current + '+';
        }
    }, 50); // Update every 50ms
}

// Contact form handling
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Generate math symbols on load
    generateMathSymbols();
    
    // Add mouse move listener for hero section
    const hero = document.getElementById('hero');
    hero.addEventListener('mousemove', handleMouseMove);
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Fetch GitHub repository count
    fetchGitHubRepos();
});

// Regenerate symbols on window resize
window.addEventListener('resize', () => {
    setTimeout(generateMathSymbols, 100);
});