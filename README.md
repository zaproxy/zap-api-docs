
# Introduction

Welcome to ZAP API Documentation! The [OWASP Zed Attack Proxy](https://www.zaproxy.org/) (**ZAP**) 
is one of the world's most popular free security tools which lets you automatically find security vulnerabilities in your 
applications. ZAP also has an extremely powerful API that allows you to do nearly everything that possible via the desktop interface.
This allows the developers to automate pentesting and security regression testing of the application in the CI/CD pipeline.
This repository provides example guides & API definitions for ZAP APIs.

The live documentation can be viewed in the following [URL](https://zaproxy.org/docs/api/).

# Contributing to the Documentation

The guidelines for contribution is available in the [following page](https://zaproxy.org/docs/api/#contributions-welcome).
ZAP documentation is built using [Slate](https://github.com/tripit/slate). The source files for the documentation are available 
in the `source/includes` directory. View the contribution guide on how to start contributing to the document.

# Deploying

To deploy to https://zaproxy.org/

1. Run `bundle install` if you have not done so before
1. Run `bundle exec middleman build --clean`
1. Copy the build directory to your own clone of https://github.com/zaproxy/zaproxy.github.io e.g.
    - `cp -R build/* ../zaproxy.github.io/docs/api/`
1. Commit and push any changes then open a PR on https://github.com/zaproxy/zaproxy.github.io

# Generate OpenAPI Markdown

The OpenAPI markdown is auto generated from the `openapi.yaml` file and the [Widdershins](https://github.com/Mermade/widdershins) 
node package is used to auto generate the markdown file.

```bash
# To install the widdershins package
npm i -g widdershins
# To generate the markdown file
widdershins --search false --language_tabs 'shell:Shell' 'java:Java' 'python:Python' --summary openapi.yaml source/includes/apis.md
``` 
