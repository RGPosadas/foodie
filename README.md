# foodie - SOEN343 Project
v1.0

`Foodie`, the mobile food delivery application, has the goal of facilitating food delivery and making it easily accessible. The objective of the application is to establish communication between customers, restaurants, and independent drivers to ensure reliable delivery. The benefits of having a mobile application is the ease of use and accessibility to satisfy all cravings quickly and efficiently

# Team Members
- [Alessandro Kreslin](https://github.com/Alessandro100)
- [Andy Vu](https://github.com/Andynism)
- [David Chen](https://github.com/david0455)
- [Hai Ha Nguyen](https://github.com/nguyhh)
- [Jack Leung](https://github.com/Jack-Leung)
- [Jacob Guirguis](https://github.com/Jacobian8)
- [Joanna Lin](https://github.com/jayohanna)
- [Ritchelle Grace Posadas](https://github.com/RGPosadas)
- [Samiha Rahman](https://github.com/samiha-rahman)
- [Wei-Cheng Su](https://github.com/Weigiu)
- [Yomna Abdelkawy](https://github.com/yabdelkawy)

# Setup Front-End
Follow the steps in the [wiki](https://github.com/RGPosadas/foodie/wiki/Setup-Front-End)

# Getting the Backend Running

## Prerequisites

You must have these installed:
* Java 8 or 11
* Maven 3.6.2
* Spring CLI v2.2.1.RELEASE

## Running the Backend Server

Simply run:
```
$ mvn compile && mvn package && java -jar target/foodie-0.1.0.jar
```

Explanation:
* `mvn compile`: Compiles the application
* `mvn package`: Packages the application and creates the `target/` folder. Also creates the `.jar` executable
* `java -jar target/foodie-0.1.0.jar`: Execute the application executable to get the server running.

### Runnning the Server as a Process

If you don't want your terminal stuck on running the server, then you may use this command to run the server as a background process:
```
java -jar target/foodie-0.1.0.jar &
```

To kill the process:
```
$ ps //Will show you a list of all running processes. Take the PID of the server, for example, 80085
$ kill 80085
```

# Running Tests

Ensure you are at the root directory of the project.
Then run:
```
$ mvn clean test
```

# Getting the Application Running

# Travis Implementation

Travis is used to automate builds by:
* compiling the application,
* packaging the application into a .jar file,
* and executing the .jar file.

It is also used to execute our unit tests.

You may see [Travis builds here](https://travis-ci.com/RGPosadas/foodie/branches).

