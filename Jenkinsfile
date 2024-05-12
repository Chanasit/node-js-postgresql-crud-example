pipeline {
    agent any

    environment {
        DOCKER_REGISTRY_URL = 'https://index.docker.io' // Replace with your Docker registry URL
        DOCKER_REGISTRY_CREDENTIALS_ID = 'docker-hub-credential' // Replace with your Jenkins credentials ID
        DOCKER_IMAGE = "3141hjkl/node-js-postgresql-crud-example:1.0.3"
    }

    stages {

        stage('Build') {
            steps {
                script {
                    // Get some code from a GitHub repository
                    git 'https://github.com/Chanasit/node-js-postgresql-crud-example'
                    withCredentials([usernamePassword(credentialsId: DOCKER_REGISTRY_CREDENTIALS_ID, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"

                        // Build Docker image
                        sh "docker build -t ${DOCKER_IMAGE}-${env.BUILD_NUMBER} ."

                        // Push Docker image
                        sh "docker push ${DOCKER_IMAGE}-${env.BUILD_NUMBER}"
                    }
                }
            }
        }
    }
    post {
        success {
            echo 'Docker image built and pushed successfully!'
        }
        failure {
            echo 'Failed to build or push Docker image.'
        }
    }
}
