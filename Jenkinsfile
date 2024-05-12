pipeline {
    agent any

    environment {
        DOCKER_REGISTRY_URL = 'https://index.docker.io' // Replace with your Docker registry URL
        DOCKER_REGISTRY_CREDENTIALS_ID = 'docker-hub-credential' // Replace with your Jenkins credentials ID
        DOCKER_IMAGE = "3141hjkl/node-js-postgresql-crud-example:1.0.4"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Get some code from a GitHub repository
                    git 'https://github.com/Chanasit/node-js-postgresql-crud-example'
                    sh "echo 'develop building ....'"
                    withCredentials([usernamePassword(credentialsId: DOCKER_REGISTRY_CREDENTIALS_ID, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
                        sh "echo ${env.GIT_BRANCH}"

                        if (env.GIT_BRANCH == "origin/develop") {
                          sh "docker build -t ${DOCKER_IMAGE}-${env.BUILD_NUMBER} ."
                          sh "docker push ${DOCKER_IMAGE}-${env.BUILD_NUMBER}"
                        }

                        if (env.GIT_BRANCH == "origin/master") {
                          sh "docker build -t ${DOCKER_IMAGE} ."
                          sh "docker push ${DOCKER_IMAGE}"
                        }
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
