// Import component data from separate file
import { componentData } from './jobExp.js';

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
    // Get the positions of each component for the animation waypoints
    function getComponentPositions() {
        const positions = [];
        const components = ['api-gateway', 'queue', 'worker', 'cache', 'db'];
        
        components.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                const rect = element.getBoundingClientRect();
                const containerRect = document.querySelector('.system-container').getBoundingClientRect();
                
                // Get position relative to container
                const relativePos = {
                    left: rect.left - containerRect.left + rect.width / 2,
                    top: rect.top - containerRect.top + rect.height / 2
                };
                
                positions.push(relativePos);
            }
        });
        
        return positions;
    }
    
    // Check if we're on a mobile device
    function isMobileView() {
        return window.innerWidth <= 900;
    }
    
    // Create and animate a single data packet
    function createDataPacket() {
        const container = document.querySelector('.system-container');
        const componentPositions = getComponentPositions();
        const isMobile = isMobileView();
        
        if (componentPositions.length === 0) return; // Safety check
        
        // Create the data packet element
        const packet = document.createElement('div');
        packet.className = 'data-packet';
        
        // Initial styling - JSON-like appearance
        packet.innerHTML = `{ }`;
        
        // Position differently based on device type
        if (isMobile) {
            // Position for mobile (vertical flow)
            packet.style.cssText = `
                position: absolute;
                background-color: var(--dark-gray);
                color: var(--accent-color);
                border: 1px solid var(--accent-color);
                border-radius: 4px;
                padding: 2px 6px;
                font-size: 10px;
                font-family: monospace;
                top: ${componentPositions[0].top - 40}px;
                left: ${componentPositions[0].left}px;
                opacity: 0;
                z-index: 10;
                box-shadow: 0 0 8px rgba(95, 219, 167, 0.3);
                transform: translateX(-50%) translateY(-50%);
                transition: all 0.5s ease-in-out;
            `;
        } else {
            // Position for desktop (horizontal flow)
            packet.style.cssText = `
                position: absolute;
                background-color: var(--dark-gray);
                color: var(--accent-color);
                border: 1px solid var(--accent-color);
                border-radius: 4px;
                padding: 2px 6px;
                font-size: 10px;
                font-family: monospace;
                top: ${componentPositions[0].top}px;
                left: ${componentPositions[0].left - 50}px;
                opacity: 0;
                z-index: 10;
                box-shadow: 0 0 8px rgba(95, 219, 167, 0.3);
                transform: translateX(-50%) translateY(-50%);
                transition: all 0.5s ease-in-out;
            `;
        }
        
        container.appendChild(packet);
        
        // Animation sequence
        setTimeout(() => {
            // Fade in at start position
            packet.style.opacity = '1';
            
            // Move to API Gateway and process
            setTimeout(() => {
                if (isMobile) {
                    packet.style.top = `${componentPositions[0].top}px`;
                } else {
                    packet.style.left = `${componentPositions[0].left}px`;
                }
                document.getElementById('api-gateway').classList.add('processing');
                
                setTimeout(() => {
                    packet.innerHTML = `{"req":true}`;
                    packet.style.color = 'var(--api-gateway-color)';
                    document.getElementById('api-gateway').classList.remove('processing');
                    
                    // Move to Message Broker and process
                    setTimeout(() => {
                        if (isMobile) {
                            packet.style.top = `${componentPositions[1].top}px`;
                        } else {
                            packet.style.left = `${componentPositions[1].left}px`;
                        }
                        document.getElementById('queue').classList.add('processing');
                        
                        setTimeout(() => {
                            packet.innerHTML = `{"event":1}`;
                            packet.style.color = 'var(--queue-color)';
                            document.getElementById('queue').classList.remove('processing');
                            
                            // Move to Worker and process
                            setTimeout(() => {
                                if (isMobile) {
                                    packet.style.top = `${componentPositions[2].top}px`;
                                } else {
                                    packet.style.left = `${componentPositions[2].left}px`;
                                }
                                document.getElementById('worker').classList.add('processing');
                                
                                setTimeout(() => {
                                    packet.innerHTML = `{"data":{}}`;
                                    packet.style.color = 'var(--worker-color)';
                                    document.getElementById('worker').classList.remove('processing');
                                    
                                    // Move to Cache and process
                                    setTimeout(() => {
                                        if (isMobile) {
                                            packet.style.top = `${componentPositions[3].top}px`;
                                        } else {
                                            packet.style.left = `${componentPositions[3].left}px`;
                                        }
                                        document.getElementById('cache').classList.add('processing');
                                        
                                        setTimeout(() => {
                                            packet.innerHTML = `{"cached":1}`;
                                            packet.style.color = 'var(--cache-color)';
                                            document.getElementById('cache').classList.remove('processing');
                                            
                                            // Move to DB and process
                                            setTimeout(() => {
                                                if (isMobile) {
                                                    packet.style.top = `${componentPositions[4].top}px`;
                                                } else {
                                                    packet.style.left = `${componentPositions[4].left}px`;
                                                }
                                                document.getElementById('db').classList.add('processing');
                                                
                                                setTimeout(() => {
                                                    packet.innerHTML = `{"id":123}`;
                                                    packet.style.color = 'var(--db-color)';
                                                    document.getElementById('db').classList.remove('processing');
                                                    
                                                    // Final fade out
                                                    setTimeout(() => {
                                                        packet.style.opacity = '0';
                                                        
                                                        // Remove packet after animation completes
                                                        setTimeout(() => {
                                                            packet.remove();
                                                        }, 500);
                                                    }, 400);
                                                }, 400);
                                            }, 500);
                                        }, 400);
                                    }, 500);
                                }, 400);
                            }, 500);
                        }, 400);
                    }, 500);
                }, 400);
            }, 200);
        }, 200);
    }
    
    // Clear any existing interval
    if (dataFlowInterval) {
        clearInterval(dataFlowInterval);
    }
    
    // Create data packets at interval
    dataFlowInterval = setInterval(createDataPacket, 4000);
    
    // Create the first packet right away
    createDataPacket();
    
    // Handle window resize to ensure animation positions are updated
    window.addEventListener('resize', () => {
        if (dataFlowInterval) {
            clearInterval(dataFlowInterval);
            dataFlowInterval = setInterval(createDataPacket, 4000);
            createDataPacket();
        }
    });
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