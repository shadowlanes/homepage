// Component Data: Technical details and experiences
export const componentData = {
    "api-gateway": {
        title: "API Gateway",
        overview: "API Gateways serve as the entry point to a system, handling routing, authentication, rate limiting, and providing a unified interface for various backend services.",
        technologies: {
            title: "Technologies I've Used",
            list: [
                { name: "AWS API Gateway", desc: "For serverless API management and integration" },
                { name: "Kong", desc: "For open-source API gateway with plugins ecosystem" },
                { name: "Nginx", desc: "For Node.js microservices API Gateway" },
                { name: "IAS", desc: "For Java-based reactive API Gateway" }
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
                { name: "MSMQ", desc: "Used for task distribution and routing capabilities" },
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
                { name: "Faktory", desc: "For Python-based distributed task processing" },
                { name: "AWS Batch", desc: "For Ruby background job processing" },
                { name: "AWS Lambda", desc: "For serverless event-driven workloads" },
                { name: "BullMQ", desc: "For containerized batch processing" }
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
                { name: "ElasticSearch", desc: "For highly-available distributed storage" },
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
                { name: "Readyset", desc: "For search and analytics caching" }
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