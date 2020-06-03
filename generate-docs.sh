#!/usr/bin/env bash

# Clean out folder to remove deprecated files.
rm -rf ./content/*

# Copy static content.
cp -a ./content-static/. ./content/

# Copy current docs from timber repository to this repository.
cp -a ../timber/docs/. ./content/

# Move current version to current level.
mv ./content/v1/* ./content/
rm -rf ./content/v1

# Move data file from base version to global data.
mv ./content/v1.json ./_data/baseVersion.json

################################################################################
# Contributing guide.
################################################################################

mkdir -p ./content/v2/contributing
# Copy contributing guide.
cp -a ../timber/CONTRIBUTING.md ./content/v2/contributing/contributing.md
# Remove first line.
sed -i '' -e 1d ./content/v2/contributing/contributing.md
# Add front matter.
echo -e "---\ntitle: \"Contributing to Timber\"\nlayout: \"page\"\n---" | cat - ./content/v2/contributing/contributing.md > ./content/v2/contributing/contributing-tmp.md && mv ./content/v2/contributing/contributing-tmp.md ./content/v2/contributing/contributing.md

################################################################################
# Integration docs.
################################################################################

# mkdir -p ./content/integrations/woocommerce
# mkdir -p ./_data/integrations/woocommerce
# cp -a ../timber-integration-woocommerce/docs/ ./content/integrations/woocommerce/

################################################################################
# Build reference docs from PHP files.
################################################################################

# Main reference
./vendor/bin/teak generate:class-reference ../timber/lib --output ./content/v2/reference --front_matter_style=YAML

# WooCommerce integration
# ./vendor/bin/teak generate:class-reference ../timber-integration-woocommerce/lib --output ./content/integrations/woocommerce/reference --front_matter_style=YAML

################################################################################
# Build hook documentation.
################################################################################

# Main hooks
./vendor/bin/teak generate:hook-reference ../timber/lib --output ./content/v2/hooks --hook_type="filter" --hook_prefix="timber" --front_matter_style="YAML" --class_reference_path="/docs/reference"
./vendor/bin/teak generate:hook-reference ../timber/lib --output ./content/v2/hooks --hook_type="action" --hook_prefix="timber" --front_matter_style="YAML" --class_reference_path="/docs/reference"

################################################################################
# Sitemap
################################################################################

cp ./sitemap.xml.njk ./content/
