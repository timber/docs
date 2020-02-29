#!/usr/bin/env bash

# Install dependencies
composer install
# npm install

# Clean out folder to remove deprecated files
rm -rf ./content/*

# Copy current docs from timber repository to this repository
cp -a ../timber/docs/. ./content/

# Move current version to current level
mv ./content/v2/* ./content/
rm -rf ./content/v2

# Create necessary folders that might not exist yet
mkdir -p ./content/contributing
mkdir -p ./content/integrations/woocommerce

# Copy contributing guide
cp -a ../timber/CONTRIBUTING.md ./content/contributing/contributing.md
# Remove first line
sed -i '' -e 1d ./content/contributing/contributing.md
# Add front matter
echo -e "---\ntitle: \"Contributing to Timber\"\nlayout: \"page\"\n---" | cat - ./content/contributing/contributing.md > ./content/contributing/contributing-tmp.md && mv ./content/contributing/contributing-tmp.md ./content/contributing/contributing.md

# Copy integration docs
mkdir -p ./_data/integrations/woocommerce
cp -a ../timber-integration-woocommerce/docs/ ./content/integrations/woocommerce/

##
# Build reference docs from PHP files
#

# Main reference
./vendor/bin/teak generate:class-reference ../timber/lib --output ./content/reference --front_matter_style=YAML

# WooCommerce integration
./vendor/bin/teak generate:class-reference ../timber-integration-woocommerce/lib --output ./content/integrations/woocommerce/reference --front_matter_style=YAML

##
# Build hook documentation
#

# Main hooks
./vendor/bin/teak generate:hook-reference ../timber/lib --output ./content/hooks --hook_type="filter" --hook_prefix="timber" --front_matter_style="YAML" --class_reference_path="/docs/reference"
./vendor/bin/teak generate:hook-reference ../timber/lib --output ./content/hooks --hook_type="action" --hook_prefix="timber" --front_matter_style="YAML" --class_reference_path="/docs/reference"

npm run production

# Delete the content folder because we don’t need that in our repository
rm -rf ./content
