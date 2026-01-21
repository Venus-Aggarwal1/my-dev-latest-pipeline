pipeline {
    agent any
    tools {
        nodejs('25.3.0')
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Venus-Aggarwal1/my-dev-latest-pipeline.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
