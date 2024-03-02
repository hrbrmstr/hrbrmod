# Display this list
@default:
  just --list

# Clean all files from dist/
@clean-dist:
  rm -rf dist/*

# Kill node_modules
@clean-node-modules:
  rm -rf node_modules

# Clean all the things
@clean:
  just clean-dist
  just clean-node-modules

# Build the library
@build:
  just clean-dist
  npm run build