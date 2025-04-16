#!/bin/bash

echo "Starting local web server on port 8000..."
echo "Visit http://localhost:8000 in your browser"
echo "Press Ctrl+C to stop the server"

# Check if the script is run from the correct directory
if [ -f "index.html" ]; then
    python3 -m http.server 8000
else
    echo "Error: You must run this script from your homepage directory"
    echo "Current directory: $(pwd)"
    exit 1
fi