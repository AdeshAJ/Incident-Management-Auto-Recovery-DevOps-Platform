// Import built-in HTTP module to create a web server
const http = require("http");

// Import file system module to read HTML file
const fs = require("fs");

// Import URL module to parse request paths like /cpu, /health
const url = require("url");

// Define the port where the app will run
const PORT = 3000;

// Function to simulate CPU spike for a fixed duration
// This mimics real-world high CPU incidents
function cpuSpike(durationMs) {
  // Calculate end time
  const end = Date.now() + durationMs;

  // Busy loop to consume CPU until time ends
  while (Date.now() < end) {}
}

// Create HTTP server
const server = http.createServer((req, res) => {
  // Extract only the path from the request URL
  const path = url.parse(req.url).pathname;

  // ROOT PATH → Serve the UI dashboard
  if (path === "/") {
    // Read HTML file synchronously (simple & reliable for demo)
    const html = fs.readFileSync("index.html");

    // Send response header with HTML content type
    res.writeHead(200, { "Content-Type": "text/html" });

    // Send HTML to browser
    res.end(html);
  }

  // HEALTH CHECK ENDPOINT
  // Used by Kubernetes liveness & readiness probes
  else if (path === "/health") {
    // Send HTTP 200 → app is healthy
    res.writeHead(200);

    // Return health message
    res.end("✅ Service Healthy");
  }

  // CPU SPIKE ENDPOINT
  // Simulates high CPU usage incident
  else if (path === "/cpu") {
    // Send immediate response so client doesn’t wait
    res.writeHead(200);

    // Inform user that CPU spike has started
    res.end("🔥 CPU spike started for 5 seconds");

    // Log incident in server logs
    console.log("CPU spike triggered");

    // Trigger CPU spike for 5 seconds
    cpuSpike(5000);
  }

  // CRASH ENDPOINT
  // Simulates application crash (real production failure)
  else if (path === "/crash") {
    // Send HTTP 500 to indicate server error
    res.writeHead(500);

    // Inform user about crash
    res.end("💥 Application crashed intentionally");

    // Log crash event
    console.log("Crash triggered");

    // Exit process → Kubernetes will restart pod
    process.exit(1);
  }

  // UNKNOWN PATH
  else {
    // Return 404 for invalid endpoints
    res.writeHead(404);

    // Inform client
    res.end("Not Found");
  }
});

// Start server on defined port
server.listen(PORT, () => {
  // Log message when server is successfully running
  console.log(`🚀 Incident Management App running on port ${PORT}`);
});
