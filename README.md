intern-test-example
===================

Trying out The Intern test framework

##Setup

    $ git clone https://github.com/JakeStoeffler/intern-test-example.git
    $ cd intern-test-example/
    $ npm install
    $ brew install selenium-server-standalone chromedriver
    $ selenium-server
    
From another terminal:

    $ node node_modules/intern/runner.js config=tests/intern