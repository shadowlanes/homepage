// Component Data: Technical details and experiences
const componentData = {
    "api-gateway": {
        title: "API Gateway",
        overview: "API Gateways serve as the entry point to a system, handling routing, authentication, rate limiting, and providing a unified interface for various backend services.",
        technologies: {
            title: "Technologies I've Used",
            list: [
                { name: "AWS API Gateway", desc: "For serverless API management and integration" },
                { name: "Kong", desc: "For open-source API gateway with plugins ecosystem" },
                { name: "Express Gateway", desc: "For Node.js microservices API Gateway" },
                { name: "Spring Cloud Gateway", desc: "For Java-based reactive API Gateway" }
            ]
        },
        warStories: {
            title: "War Stories",
            content: "When migrating from a monolithic API to a microservices architecture, we faced significant latency issues at the gateway layer. I implemented request batching and an intelligent caching strategy that reduced API latency by 70% while maintaining the flexibility of our microservices deployment.",
        },
        tradeOffs: {
            title: "Engineering Trade-offs",
            content: "API Gateways create a central point of control but can become bottlenecks. I've implemented a federated gateway pattern where teams manage their own gateway instances with shared authentication middleware, balancing governance and autonomy.",
        },
        metrics: {
            latency: 45,
            throughput: 85,
            complexity: 70
        }
    },
    queue: {
        title: "Message Broker",
        overview: "Message brokers facilitate asynchronous communication between system components, enabling reliable event streaming, decoupling of services, and building resilient distributed architectures.",
        technologies: {
            title: "Technologies I've Used",
            list: [
                { name: "RabbitMQ", desc: "Used for task distribution and routing capabilities" },
                { name: "Kafka", desc: "Implemented for high-throughput event streaming" },
                { name: "AWS SQS", desc: "Used for reliable cloud-native messaging" },
                { name: "Redis Streams", desc: "For lightweight streaming with persistence" }
            ]
        },
        warStories: {
            title: "War Stories",
            content: "During a Black Friday sale, our primary message broker hit capacity limits, causing a cascading failure. I implemented a dynamic scaling solution with back-pressure mechanisms that automatically provisioned resources based on queue depth. This saved us during the next sale when traffic was 3x higher than expected.",
        },
        tradeOffs: {
            title: "Engineering Trade-offs",
            content: "Message brokers introduce latency but provide fault tolerance. I've balanced these by implementing a hybrid approach: critical paths use synchronous processing while maintaining asynchronous messaging for fault tolerance and load shedding during traffic spikes.",
        },
        metrics: {
            latency: 35,
            throughput: 85,
            complexity: 65
        }
    },
    worker: {
        title: "Worker Processing",
        overview: "Workers handle resource-intensive tasks, ensuring the main application remains responsive while providing controlled concurrency and failure isolation.",
        technologies: {
            title: "Technologies I've Used",
            list: [
                { name: "Celery", desc: "For Python-based distributed task processing" },
                { name: "Sidekiq", desc: "For Ruby background job processing" },
                { name: "AWS Lambda", desc: "For serverless event-driven workloads" },
                { name: "Kubernetes Jobs", desc: "For containerized batch processing" }
            ]
        },
        warStories: {
            title: "War Stories",
            content: "Once faced a memory leak in our worker pool that gradually degraded performance over days. After intensive profiling, I discovered a third-party library wasn't releasing file handles. Implemented a 'circuit breaker' pattern that automatically recycled workers after processing a certain number of jobs, preventing the leak from impacting users.",
        },
        tradeOffs: {
            title: "Engineering Trade-offs",
            content: "More workers increase throughput but consume more resources. I developed an adaptive scaling algorithm that dynamically adjusted worker count based on queue depth, system load, and time-of-day patterns, reducing our infrastructure costs by 40%.",
        },
        metrics: {
            latency: 55,
            throughput: 90,
            complexity: 70
        }
    },
    db: {
        title: "Database Layer",
        overview: "The database provides persistent storage and data integrity, serving as the source of truth for application state and business data.",
        technologies: {
            title: "Technologies I've Used",
            list: [
                { name: "PostgreSQL", desc: "For ACID-compliant relational data" },
                { name: "MongoDB", desc: "For flexible document storage" },
                { name: "Cassandra", desc: "For highly-available distributed storage" },
                { name: "DynamoDB", desc: "For serverless key-value storage" }
            ]
        },
        warStories: {
            title: "War Stories",
            content: "During a database migration that was supposed to take 4 hours, we encountered unexpected locking issues. With the business expecting systems to be back online, I rapidly implemented a read-only mode for the application that redirected writes to a temporary store. After the migration completed, I developed a reconciliation process that merged the temporary data with the migrated database, limiting downtime to just 45 minutes.",
        },
        tradeOffs: {
            title: "Engineering Trade-offs",
            content: "SQL vs NoSQL is just the beginning. I've implemented multi-model database strategies, using specialized databases for different data access patterns. For example, using graph databases for relationship-heavy data while keeping transactional data in traditional RDBMSs.",
        },
        metrics: {
            latency: 65,
            throughput: 75,
            complexity: 85
        }
    },
    cache: {
        title: "Cache Layer",
        overview: "Caching improves performance and reduces load on backend systems by storing frequently accessed data in memory for rapid retrieval.",
        technologies: {
            title: "Technologies I've Used",
            list: [
                { name: "Redis", desc: "For versatile in-memory data structures" },
                { name: "Memcached", desc: "For simple high-performance caching" },
                { name: "Varnish", desc: "For HTTP acceleration and edge caching" },
                { name: "Elasticsearch", desc: "For search and analytics caching" }
            ]
        },
        warStories: {
            title: "War Stories",
            content: "Our cache invalidation strategy was causing intermittent data consistency issues. I implemented a distributed cache invalidation system using Kafka as an event backbone, ensuring all application nodes received invalidation signals within milliseconds. This pattern became a company standard for all services requiring consistent caching.",
        },
        tradeOffs: {
            title: "Engineering Trade-offs",
            content: "Caching introduces the risk of stale data. I've implemented techniques like TTL (Time To Live) hierarchies, where different types of data have optimized expiration policies: user profiles might cache for hours, while inventory data might only cache for seconds.",
        },
        metrics: {
            latency: 15,
            throughput: 95,
            complexity: 60
        }
    },
    result: {
        title: "Result Delivery",
        overview: "The final stage where processed data is formatted and delivered to users or downstream systems, often with additional handling for reliability.",
        technologies: {
            title: "Technologies I've Used",
            list: [
                { name: "REST APIs", desc: "For standard HTTP-based interfaces" },
                { name: "GraphQL", desc: "For flexible client-specific data fetching" },
                { name: "WebSockets", desc: "For real-time bidirectional communication" },
                { name: "gRPC", desc: "For efficient service-to-service communication" }
            ]
        },
        warStories: {
            title: "War Stories",
            content: "During a critical system outage, our monitoring indicated results weren't reaching customers, despite all services showing 'green' in our dashboards. I quickly implemented a synthetic transaction monitor that followed the complete data flow from request to response. This revealed an intermittent network issue between our load balancer and application servers that was causing a 0.1% data loss – enough to affect thousands of users but too small to trigger alerts.",
        },
        tradeOffs: {
            title: "Engineering Trade-offs",
            content: "Result delivery involves balancing consistency vs. availability. I've implemented circuit breakers with graceful degradation, where systems can return partial results with clear indicators rather than failing completely when subsystems are impaired.",
        },
        metrics: {
            latency: 25,
            throughput: 85,
            complexity: 55
        }
    }
};

// DOM Elements
const nodes = document.querySelectorAll('.node');
const infoPanel = document.getElementById('info-panel');
const componentTitle = document.getElementById('component-title');
const closeBtn = document.querySelector('.close-btn');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
const latencyFill = document.getElementById('latency-fill');
const throughputFill = document.getElementById('throughput-fill');
const complexityFill = document.getElementById('complexity-fill');
const aboutBtn = document.getElementById('about-btn');
const interactiveSystem = document.getElementById('interactive-system');

// Terminal typing effect for the title
function typeWriterEffect() {
    const titleElement = document.getElementById('title');
    titleElement.style.width = '0';
    
    // Let the CSS animation do its work
    setTimeout(() => {
        titleElement.style.width = '';
    }, 100);
}

// Toggle interactive system visibility
function toggleInteractiveSystem() {
    if (interactiveSystem.classList.contains('hidden')) {
        interactiveSystem.classList.remove('hidden');
        
        // Use setTimeout to allow the display: none to resolve first
        setTimeout(() => {
            interactiveSystem.classList.add('visible');
            
            // Initialize data flow effect when system becomes visible
            if (!dataFlowInterval) {
                initDataFlow();
            }
        }, 10);
    } else {
        interactiveSystem.classList.remove('visible');
        
        // Wait for transition to finish before hiding
        setTimeout(() => {
            interactiveSystem.classList.add('hidden');
        }, 500);
    }
}

// Data visualization management
let activeComponent = null;
let dataFlowInterval = null;

// Initialize data flow animation
function initDataFlow() {
    // Visual data package animation
    function createDataPacket() {
        const container = document.querySelector('.system-container');
        const packet = document.createElement('div');
        packet.className = 'data-packet';
        packet.style.cssText = `
            position: absolute;
            width: 8px;
            height: 8px;
            background-color: var(--accent-color);
            border-radius: 50%;
            top: ${50 + (Math.random() * 10 - 5)}%;
            left: 0;
            opacity: 0.8;
            z-index: 3;
            box-shadow: 0 0 8px var(--accent-color);
            animation: movePacket 6s linear forwards;
        `;
        
        container.appendChild(packet);
        
        // Remove packet after animation completes
        setTimeout(() => {
            packet.remove();
        }, 6000);
    }
    
    // Create data packets at interval
    dataFlowInterval = setInterval(createDataPacket, 1500);
    
    // Add animation to CSS - adjust for 5 components
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes movePacket {
            0% { left: 0; transform: scale(1); }
            20% { left: 20%; transform: scale(1.2); }
            40% { left: 40%; transform: scale(1); }
            60% { left: 60%; transform: scale(1.2); }
            80% { left: 80%; transform: scale(1); }
            100% { left: 100%; transform: scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Show component details in panel
function showComponentDetails(componentId) {
    const data = componentData[componentId];
    if (!data) {
        console.error('No data found for component:', componentId);
        return;
    }
    
    activeComponent = componentId;
    
    // Update panel title with more descriptive content
    componentTitle.textContent = data.title;
    // Keep title static as "Soumyadeep Das | Engineer" instead of changing it
    document.title = "Soumyadeep Das | Engineer";
    
    // Update overview with rich, keyword-optimized content
    document.getElementById('overview').innerHTML = `<p>${data.overview}</p>`;
    
    // Update technologies with structured, accessible markup
    const techContent = document.getElementById('tech');
    techContent.innerHTML = `<h4>${data.technologies.title}</h4><ul class="tech-list"></ul>`;
    const techList = techContent.querySelector('ul');
    
    data.technologies.list.forEach(tech => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${tech.name}:</strong> ${tech.desc}`;
        // Set custom data attributes for potential filtering
        li.setAttribute('data-tech-name', tech.name.toLowerCase());
        techList.appendChild(li);
    });
    
    // Update war stories with properly structured content
    document.getElementById('stories').innerHTML = `
        <h4>${data.warStories.title}</h4>
        <div class="story-content">
            <p>${data.warStories.content}</p>
        </div>
    `;
    
    // Update trade-offs
    document.getElementById('trade-offs').innerHTML = `
        <h4>${data.tradeOffs.title}</h4>
        <div class="tradeoff-content">
            <p>${data.tradeOffs.content}</p>
        </div>
    `;
    
    // Reset tab selection
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    tabButtons[0].classList.add('active');
    tabButtons[0].setAttribute('aria-selected', 'true');
    
    tabPanes.forEach(pane => pane.classList.remove('active'));
    tabPanes[0].classList.add('active');
    
    // Update metrics with aria attributes for accessibility
    setTimeout(() => {
        latencyFill.style.width = `${data.metrics.latency}%`;
        latencyFill.parentElement.setAttribute('aria-valuenow', data.metrics.latency);
        latencyFill.parentElement.setAttribute('aria-valuetext', `Latency: ${data.metrics.latency}%`);
        
        throughputFill.style.width = `${data.metrics.throughput}%`;
        throughputFill.parentElement.setAttribute('aria-valuenow', data.metrics.throughput);
        throughputFill.parentElement.setAttribute('aria-valuetext', `Throughput: ${data.metrics.throughput}%`);
        
        complexityFill.style.width = `${data.metrics.complexity}%`;
        complexityFill.parentElement.setAttribute('aria-valuenow', data.metrics.complexity);
        complexityFill.parentElement.setAttribute('aria-valuetext', `Complexity: ${data.metrics.complexity}%`);
    }, 100);
    
    // Show panel and update ARIA attributes
    infoPanel.classList.add('active');
    infoPanel.setAttribute('aria-hidden', 'false');
}

// Event Listeners
aboutBtn.addEventListener('click', toggleInteractiveSystem);

nodes.forEach(node => {
    // Hover effect
    node.addEventListener('mouseenter', () => {
        nodes.forEach(n => n.classList.remove('highlighted'));
        node.classList.add('highlighted');
    });
    
    node.addEventListener('mouseleave', () => {
        node.classList.remove('highlighted');
    });
    
    // Click to show details
    node.addEventListener('click', () => {
        showComponentDetails(node.id);
    });
});

// Close panel when clicking the X
closeBtn.addEventListener('click', () => {
    infoPanel.classList.remove('active');
    activeComponent = null;
});

// Tab switching
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.getAttribute('data-tab');
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
        
        tabPanes.forEach(pane => pane.classList.remove('active'));
        document.getElementById(tab).classList.add('active');
    });
});

// Add cursor blinking effect and terminal aesthetic
document.addEventListener('DOMContentLoaded', () => {
    // Run the typing animation
    typeWriterEffect();
    
    // Add CSS for highlighted state
    const style = document.createElement('style');
    style.innerHTML = `
        .node.highlighted {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }
        
        .node.highlighted::before {
            height: 100%;
            opacity: 0.15;
        }
        
        .data-packet {
            animation-play-state: running;
        }
    `;
    document.head.appendChild(style);
});