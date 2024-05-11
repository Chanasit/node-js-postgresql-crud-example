pipeline {
    agent any

    environment {
        NODE_VERSION = '14'
        NPM_VERSION = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh "nvm install ${NODE_VERSION}"
                sh "nvm use ${NODE_VERSION}"
                sh "npm install -g npm@${NPM_VERSION}"
                sh "npm install"
            }
        }

        stage('Run Tests') {
            steps {
                sh "npm test"
            }
        }

        stage('Build') {
            steps {
                // Add build steps if applicable
            }
        }

        stage('Deploy') {
            steps {
                // Add deployment steps if applicable
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo 'Pipeline succeeded.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
