#!/usr/bin/env bash

# Install dependencies
composer install

# Clean out folder to remove deprecated files
rm -rf ./content/*

# Copy current docs from timber repository to this repository
cp -a ../timber/docs/. ./content/

# Create necessary folders that might not exist yet
mkdir -p content/reference
mkdir -p generator/timber-current

# Copy current timber library to this repository
cp -a ../timber/lib/. ./generator/timber-current/

cd ./generator

# Build reference docs from PHP files
./phpdocs-md generate Timber\\Archives > ../content/reference/timber-archives.md
./phpdocs-md generate Timber\\Comment > ../content/reference/timber-comment.md
./phpdocs-md generate Timber\\Image > ../content/reference/timber-image.md
./phpdocs-md generate Timber\\Menu > ../content/reference/timber-menu.md
./phpdocs-md generate Timber\\MenuItem > ../content/reference/timber-menuitem.md
./phpdocs-md generate Timber\\Pagination > ../content/reference/timber-pagination.md
./phpdocs-md generate Timber\\Post > ../content/reference/timber-post.md
./phpdocs-md generate Timber\\PostQuery > ../content/reference/timber-postquery.md
./phpdocs-md generate Timber\\PostPreview > ../content/reference/timber-postpreview.md
./phpdocs-md generate Timber\\Site > ../content/reference/timber-site.md
./phpdocs-md generate Timber\\Theme > ../content/reference/timber-theme.md
./phpdocs-md generate Timber\\Term > ../content/reference/timber-term.md
./phpdocs-md generate Timber\\User > ../content/reference/timber-user.md

./phpdocs-md generate Timber\\Timber > ../content/reference/timber.md

./phpdocs-md generate Timber\\Helper > ../content/reference/timber-helper.md
./phpdocs-md generate Timber\\ImageHelper > ../content/reference/timber-imagehelper.md
./phpdocs-md generate Timber\\URLHelper > ../content/reference/timber-urlhelper.md
./phpdocs-md generate Timber\\TextHelper > ../content/reference/timber-texthelper.md

cd ..

# Clean site output folder
rm -rf ./docs/*

# Build documentation site with Hugo
hugo
