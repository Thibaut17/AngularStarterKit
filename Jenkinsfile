node {
    def dockerImage
    // ip address of the docker private repository(nexus)

    def dockerImageTag = "angular-starter-kit${env.BUILD_NUMBER}"
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }

    /*
    stage('Build Docker test'){
     sh 'docker build -t react-test -f Dockerfile.test --no-cache .'
    }
    stage('Docker test'){
      sh 'docker run --rm react-test'
    }
    stage('Clean Docker test'){
      sh 'docker rmi react-test'
    }
    */
    stage('Build Docker Image') {
      // build docker image
      dockerImage = docker.build("localhost:5000/angular-starter-kit:latest")//${env.BUILD_NUMBER}")
    }

    stage('Deploy Docker Image'){

      // deploy docker image to nexus

      echo "Docker Image Tag Name: ${dockerImageTag}"

	  //sh "docker stop angular-starter-kit"

	  //sh "docker rm angular-starter-kit"

	  //sh "docker image tag ${dockerImageTag} localhost:5000/angular-starter-kit:${env.BUILD_NUMBER}"

	  //sh "docker push localhost:5000/angular-starter-kit:${env.BUILD_NUMBER}"

	  sh "docker run --name angular-starter-kit --restart unless-stopped -d -p 4100:80 localhost:5000/angular-starter-kit:latest" //angular-starter-kit:${env.BUILD_NUMBER}"

	  // docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
      //    dockerImage.push("${env.BUILD_NUMBER}")
      //      dockerImage.push("latest")
      //  }

    }
    /*

    stage('Deploy'){
        sh 'docker build -t react-app .'
        sh 'docker run --name angular-starter-kit -p 3000:80 --rm react-app'
        //sh 'docker tag react-app localhost:5000/react-app'
        //sh 'docker push localhost:5000/react-app'
        //sh 'docker rmi -f react-app localhost:5000/react-app'
    }
    */
}
/*
pipeline {
    agent {
        docker {
            image 'node:12.0.0'
            args '-p 3000:3000 -u root'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
*/
